
import React, { useState, useEffect, useCallback } from 'react';

// ── Types ──────────────────────────────────────────────────────────
type WorkType = 'rifacimento' | 'nuova' | 'coibentazione' | 'impermeabilizzazione' | 'bonifica' | 'manutenzione';
type Surface = '<50' | '50-100' | '100-200' | '>200' | 'non_so';
type Building = 'casa' | 'condominio' | 'industriale' | 'altro';
type Access = 'facile' | 'media' | 'difficile' | 'non_so';
type Urgency = 'urgente' | 'normale' | 'programmato' | 'preventivo';

interface FormData {
  tipoLavoro: WorkType | '';
  superficie: Surface | '';
  tipoEdificio: Building | '';
  accessibilita: Access | '';
  urgenza: Urgency | '';
  nome: string;
  telefono: string;
  email: string;
  indirizzo: string;
  note: string;
  privacy: boolean;
}

// ── Work type options ──────────────────────────────────────────────
const WORK_TYPES: { id: WorkType; icon: string; title: string; desc: string }[] = [
  { id: 'rifacimento', icon: '🏠', title: 'Rifacimento Completo Tetto', desc: 'Sostituzione completa copertura esistente' },
  { id: 'nuova', icon: '🏗️', title: 'Nuova Copertura', desc: 'Copertura per nuova costruzione' },
  { id: 'coibentazione', icon: '🌡️', title: 'Coibentazione Termica', desc: 'Isolamento termico per risparmio energetico' },
  { id: 'impermeabilizzazione', icon: '💧', title: 'Impermeabilizzazione', desc: 'Risoluzione infiltrazioni e perdite' },
  { id: 'bonifica', icon: '⚠️', title: 'Bonifica Amianto', desc: 'Rimozione eternit certificata' },
  { id: 'manutenzione', icon: '🔧', title: 'Manutenzione / Riparazione', desc: 'Piccoli interventi e riparazioni' },
];

const WORK_TYPE_LABELS: Record<WorkType, string> = {
  rifacimento: 'Rifacimento Completo Tetto',
  nuova: 'Nuova Copertura',
  coibentazione: 'Coibentazione Termica',
  impermeabilizzazione: 'Impermeabilizzazione',
  bonifica: 'Bonifica Amianto',
  manutenzione: 'Manutenzione / Riparazione',
};

const SURFACE_LABELS: Record<Surface, string> = {
  '<50': '< 50 mq',
  '50-100': '50-100 mq',
  '100-200': '100-200 mq',
  '>200': '> 200 mq',
  'non_so': 'Non lo so',
};

const BUILDING_LABELS: Record<Building, string> = {
  casa: 'Casa / Villetta',
  condominio: 'Condominio',
  industriale: 'Capannone / Industriale',
  altro: 'Altro',
};

// ── Price calculation ──────────────────────────────────────────────
const PRICE_RANGES: Record<WorkType, Record<string, [number, number]>> = {
  rifacimento: { '<50': [3000, 6000], '50-100': [6000, 12000], '100-200': [8000, 15000], '>200': [15000, 30000] },
  nuova: { '<50': [4000, 8000], '50-100': [8000, 15000], '100-200': [12000, 25000], '>200': [20000, 40000] },
  coibentazione: { '<50': [1500, 3000], '50-100': [3000, 6000], '100-200': [5000, 10000], '>200': [8000, 15000] },
  impermeabilizzazione: { '<50': [1000, 2500], '50-100': [2000, 4500], '100-200': [3500, 7000], '>200': [6000, 12000] },
  bonifica: { '<50': [2000, 4000], '50-100': [4000, 8000], '100-200': [7000, 14000], '>200': [12000, 25000] },
  manutenzione: { '<50': [500, 2000], '50-100': [1500, 5000], '100-200': [1500, 5000], '>200': [1500, 5000] },
};

function calculateRange(tipo: WorkType, sup: Surface, edificio: Building): [number, number] | null {
  const surfKey = sup === 'non_so' ? '100-200' : sup;
  const base = PRICE_RANGES[tipo]?.[surfKey];
  if (!base) return null;
  let [min, max] = base;
  if (edificio === 'condominio' || edificio === 'industriale') {
    min = Math.round(min * 1.2);
    max = Math.round(max * 1.3);
  }
  return [min, max];
}

function formatCurrency(n: number): string {
  return n.toLocaleString('it-IT') + '€';
}

// ── Shared styles ──────────────────────────────────────────────────
const inputClass = 'w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all text-gray-900';

// ── Component ──────────────────────────────────────────────────────
const QuoteForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [animKey, setAnimKey] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState<FormData>({
    tipoLavoro: '',
    superficie: '',
    tipoEdificio: '',
    accessibilita: '',
    urgenza: '',
    nome: '',
    telefono: '',
    email: '',
    indirizzo: '',
    note: '',
    privacy: false,
  });

  const goNext = useCallback(() => {
    setDirection('forward');
    setAnimKey(k => k + 1);
    setStep(s => Math.min(s + 1, 4));
  }, []);

  const goBack = useCallback(() => {
    setDirection('back');
    setAnimKey(k => k + 1);
    setStep(s => Math.max(s - 1, 1));
  }, []);

  // ESC to close / go back
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && step > 1) goBack();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [step, goBack]);

  const handleSubmit = () => {
    if (!formData.nome || !formData.telefono || !formData.email || !formData.privacy) return;
    setStatus('loading');

    // Build payload
    const range = formData.tipoLavoro && formData.superficie && formData.tipoEdificio
      ? calculateRange(formData.tipoLavoro, formData.superficie, formData.tipoEdificio)
      : null;

    const payload = {
      tipo_lavoro: formData.tipoLavoro ? WORK_TYPE_LABELS[formData.tipoLavoro] : '',
      superficie: formData.superficie ? SURFACE_LABELS[formData.superficie] : '',
      tipo_edificio: formData.tipoEdificio ? BUILDING_LABELS[formData.tipoEdificio] : '',
      accessibilita: formData.accessibilita,
      urgenza: formData.urgenza,
      range_mostrato: range ? `${formatCurrency(range[0])} - ${formatCurrency(range[1])}` : 'N/D',
      nome: formData.nome,
      telefono: formData.telefono,
      email: formData.email,
      indirizzo: formData.indirizzo,
      note: formData.note,
      timestamp: new Date().toISOString(),
    };

    // TODO: Replace with actual webhook URL when n8n is set up
    // fetch('https://your-n8n-webhook-url.com/webhook/quote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });

    console.log('Quote form payload:', payload);

    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setStatus('idle');
    setFormData({
      tipoLavoro: '', superficie: '', tipoEdificio: '',
      accessibilita: '', urgenza: '', nome: '', telefono: '',
      email: '', indirizzo: '', note: '', privacy: false,
    });
  };

  // ── Progress bar ──────────────────────────────────
  const ProgressBar = () => (
    <div className="flex items-center justify-between mb-10">
      {[1, 2, 3, 4].map((s) => (
        <React.Fragment key={s}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${s < step ? 'bg-green-500 text-white' :
                  s === step ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110' :
                    'bg-gray-200 text-gray-400'
                }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              ) : s}
            </div>
            <span className={`text-[10px] mt-1.5 font-bold uppercase tracking-wider ${s === step ? 'text-blue-600' : 'text-gray-400'}`}>
              {s === 1 ? 'Lavoro' : s === 2 ? 'Dettagli' : s === 3 ? 'Stima' : 'Contatti'}
            </span>
          </div>
          {s < 4 && (
            <div className="flex-1 mx-2 h-1 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: s < step ? '100%' : '0%' }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  // ── Step 1: Work Type ──────────────────────────────
  const Step1 = () => (
    <div>
      <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Che tipo di intervento ti serve?</h3>
      <p className="text-gray-500 mb-8">Seleziona il tipo di lavoro per ricevere una stima orientativa.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WORK_TYPES.map((wt) => (
          <button
            key={wt.id}
            type="button"
            onClick={() => {
              setFormData({ ...formData, tipoLavoro: wt.id });
              setTimeout(goNext, 200);
            }}
            className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer group hover:shadow-lg hover:-translate-y-0.5 ${formData.tipoLavoro === wt.id
                ? 'border-orange-500 bg-orange-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-blue-400'
              }`}
          >
            <span className="text-3xl block mb-3">{wt.icon}</span>
            <h4 className="font-bold text-gray-900 mb-1">{wt.title}</h4>
            <p className="text-sm text-gray-500">{wt.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  // ── Step 2: Project Details ────────────────────────
  const RadioGroup = ({ label, options, value, onChange }: {
    label: string;
    options: { id: string; label: string }[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 mb-3">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${value === opt.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  const Step2 = () => {
    const canProceed = formData.superficie && formData.tipoEdificio && formData.accessibilita && formData.urgenza;
    return (
      <div>
        <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Dettagli del progetto</h3>
        <p className="text-gray-500 mb-8">Queste informazioni ci aiutano a darti una stima più precisa.</p>

        <RadioGroup
          label="📏 Superficie approssimativa"
          value={formData.superficie}
          onChange={(v) => setFormData({ ...formData, superficie: v as Surface })}
          options={[
            { id: '<50', label: '< 50 mq' },
            { id: '50-100', label: '50-100 mq' },
            { id: '100-200', label: '100-200 mq' },
            { id: '>200', label: '> 200 mq' },
            { id: 'non_so', label: 'Non lo so' },
          ]}
        />

        <RadioGroup
          label="🏛️ Tipo di edificio"
          value={formData.tipoEdificio}
          onChange={(v) => setFormData({ ...formData, tipoEdificio: v as Building })}
          options={[
            { id: 'casa', label: 'Casa / Villetta' },
            { id: 'condominio', label: 'Condominio' },
            { id: 'industriale', label: 'Capannone / Industriale' },
            { id: 'altro', label: 'Altro' },
          ]}
        />

        <RadioGroup
          label="🪜 Accessibilità tetto"
          value={formData.accessibilita}
          onChange={(v) => setFormData({ ...formData, accessibilita: v as Access })}
          options={[
            { id: 'facile', label: 'Facile (piano terra)' },
            { id: 'media', label: 'Media (1-2 piani)' },
            { id: 'difficile', label: 'Difficile (3+ piani)' },
            { id: 'non_so', label: 'Non lo so' },
          ]}
        />

        <RadioGroup
          label="⏰ Urgenza"
          value={formData.urgenza}
          onChange={(v) => setFormData({ ...formData, urgenza: v as Urgency })}
          options={[
            { id: 'urgente', label: 'Urgente (2 settimane)' },
            { id: 'normale', label: 'Normale (1-2 mesi)' },
            { id: 'programmato', label: 'Programmato (3+ mesi)' },
            { id: 'preventivo', label: 'Solo preventivo' },
          ]}
        />

        <div className="flex gap-3 mt-8">
          <button type="button" onClick={goBack}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-all cursor-pointer">
            ← Indietro
          </button>
          <button type="button" onClick={goNext} disabled={!canProceed}
            className={`flex-1 py-3 rounded-xl font-bold transition-all cursor-pointer ${canProceed
                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}>
            Vedi Stima →
          </button>
        </div>
      </div>
    );
  };

  // ── Step 3: Price Range ────────────────────────────
  const Step3 = () => {
    const range = formData.tipoLavoro && formData.superficie && formData.tipoEdificio
      ? calculateRange(formData.tipoLavoro, formData.superficie, formData.tipoEdificio)
      : null;
    const tipoLabel = formData.tipoLavoro ? WORK_TYPE_LABELS[formData.tipoLavoro] : '';
    const supLabel = formData.superficie ? SURFACE_LABELS[formData.superficie] : '';
    const buildLabel = formData.tipoEdificio ? BUILDING_LABELS[formData.tipoEdificio] : '';

    return (
      <div>
        <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Stima Indicativa</h3>
        <p className="text-gray-500 mb-8">Ecco una stima orientativa basata sulle informazioni fornite.</p>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <p className="text-blue-200 text-sm mb-4">
              Per <span className="font-bold text-white">{tipoLabel}</span>,{' '}
              <span className="font-bold text-white">{supLabel}</span>,{' '}
              <span className="font-bold text-white">{buildLabel}</span>
            </p>
            <p className="text-blue-200 text-xs uppercase tracking-widest mb-2 font-bold">I costi variano da</p>
            {range ? (
              <p className="text-4xl md:text-5xl font-black font-heading">
                <span className="text-orange-400">{formatCurrency(range[0])}</span>
                <span className="text-blue-300 mx-3 text-2xl">—</span>
                <span className="text-orange-400">{formatCurrency(range[1])}</span>
              </p>
            ) : (
              <p className="text-2xl font-bold text-orange-400">Contattaci per un preventivo personalizzato</p>
            )}
            <div className="mt-6 space-y-1.5 text-sm text-blue-200">
              <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Materiali scelti</p>
              <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Stato attuale del tetto</p>
              <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Accessibilità cantiere</p>
              <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Eventuali complicazioni strutturali</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="text-amber-800 text-sm flex items-start gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <span>
              <strong>Importante:</strong> Questa è una stima puramente indicativa basata su valori medi di mercato.
              Il preventivo definitivo sarà fornito dopo il <strong>sopralluogo gratuito</strong> del nostro tecnico,
              che valuterà la tua situazione specifica.
            </span>
          </p>
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={goBack}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-all cursor-pointer">
            ← Indietro
          </button>
          <button type="button" onClick={goNext}
            className="flex-1 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all cursor-pointer">
            Prenota Sopralluogo Gratuito →
          </button>
        </div>
      </div>
    );
  };

  // ── Step 4: Contact Form ───────────────────────────
  const Step4 = () => {
    const isValid = formData.nome && formData.telefono && formData.email && formData.privacy;

    if (status === 'success') {
      return (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ animation: 'fadeInUp 0.5s ease-out' }}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">Richiesta Inviata!</h3>
          <p className="text-gray-500 mb-6">
            Grazie! Ti contatteremo entro <span className="font-bold text-blue-600">24 ore</span> per
            fissare l'appuntamento per il sopralluogo gratuito.
          </p>
          <button onClick={resetForm}
            className="text-blue-600 font-bold hover:underline cursor-pointer">
            Invia un'altra richiesta
          </button>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Prenota il Tuo Sopralluogo Gratuito</h3>
        <p className="text-gray-500 mb-6">
          Un nostro tecnico specializzato verrà a fare un sopralluogo <strong>gratuito e senza impegno</strong>.
        </p>

        {/* Benefits */}
        <div className="bg-blue-50 rounded-2xl p-5 mb-8">
          <p className="text-sm font-bold text-blue-900 mb-3">Durante il sopralluogo:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-blue-800">
            <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Ispezione completa copertura</p>
            <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Valutazione stato attuale</p>
            <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Preventivo dettagliato</p>
            <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Consigli tecnici professionali</p>
          </div>
          <p className="text-xs text-blue-600 mt-3 font-medium">⏱️ Durata circa 30-45 minuti</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nome e Cognome *</label>
              <input
                required type="text" placeholder="Es. Mario Rossi"
                className={inputClass}
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Telefono *</label>
              <input
                required type="tel" placeholder="+39 3XX XXX XXXX"
                className={inputClass}
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
            <input
              required type="email" placeholder="mario@esempio.it"
              className={inputClass}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Indirizzo intervento</label>
            <input
              type="text" placeholder="Via, Città, CAP"
              className={inputClass}
              value={formData.indirizzo}
              onChange={(e) => setFormData({ ...formData, indirizzo: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Note aggiuntive (opzionale)</label>
            <textarea
              rows={3} placeholder="Descrivi brevemente la tua situazione..."
              className={inputClass + ' resize-none'}
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            />
          </div>

          <label className="flex items-start space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 mt-0.5 cursor-pointer"
              checked={formData.privacy}
              onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
            />
            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
              Accetto la <a href="#" className="underline text-blue-600">Privacy Policy</a> e il trattamento dei dati.
              I prezzi mostrati sono stime indicative non vincolanti.
            </span>
          </label>
        </div>

        <div className="flex gap-3 mt-8">
          <button type="button" onClick={goBack}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-all cursor-pointer">
            ← Indietro
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isValid || status === 'loading'}
            className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all cursor-pointer flex items-center justify-center gap-3 ${isValid
                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>INVIO IN CORSO...</span>
              </>
            ) : (
              <span>📅 PRENOTA SOPRALLUOGO GRATUITO</span>
            )}
          </button>
        </div>
      </div>
    );
  };

  // ── Render ─────────────────────────────────────────
  const slideAnim = direction === 'forward'
    ? 'animate-[slideInRight_0.35s_ease-out]'
    : 'animate-[slideInLeft_0.35s_ease-out]';

  return (
    <div className="container mx-auto px-4">
      {/* Inline keyframes for step animations */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-heading mb-4">Calcola il Tuo Preventivo</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Rispondi a poche domande e ricevi una stima indicativa. Poi prenota un sopralluogo gratuito per il preventivo definitivo.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 md:p-12 overflow-hidden">
          <ProgressBar />

          <div key={animKey} className={slideAnim}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
          </div>
        </div>

        {/* Bottom contact info */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Oppure contattaci direttamente: <a href="tel:+390511234567" className="text-blue-600 font-bold hover:underline">051 123 4567</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;

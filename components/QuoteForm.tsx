
import React, { useState } from 'react';
import { JobType } from '../types';

const QuoteForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    jobType: '',
    message: '',
    privacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', city: '', jobType: '', message: '', privacy: false });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto bg-blue-950 rounded-[50px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        {/* Info Column */}
        <div className="lg:w-2/5 p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
           <div className="relative z-10">
              <h2 className="text-4xl font-bold font-heading mb-6">Pronto per il tuo nuovo tetto?</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Compila il form e ricevi una risposta dettagliata in <span className="text-orange-400 font-bold">24 ore lavorative</span>. Il nostro sopralluogo è sempre gratuito e senza impegno.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Analisi Tecnica</h4>
                    <p className="text-sm text-blue-200/60">Valutiamo lo stato attuale della struttura.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Preventivo Chiara</h4>
                    <p className="text-sm text-blue-200/60">Costi fissi senza sorprese finali.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Zero Burocrazia</h4>
                    <p className="text-sm text-blue-200/60">Gestiamo noi le pratiche per le detrazioni fiscali.</p>
                  </div>
                </div>
              </div>
           </div>
           
           <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
              <span className="block text-blue-200/60 text-xs font-bold uppercase tracking-widest mb-4">Oppure contattaci direttamente:</span>
              <a href="tel:+390511234567" className="text-3xl font-black text-white hover:text-orange-400 transition-colors">051 123 4567</a>
           </div>
        </div>

        {/* Form Column */}
        <div className="lg:w-3/5 p-12 md:p-16 bg-white">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
               <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
               </div>
               <h3 className="text-3xl font-bold font-heading">Richiesta Inviata!</h3>
               <p className="text-gray-500 text-lg">Grazie per averci contattato. <br /> Riceverai una risposta dal nostro team entro 24 ore.</p>
               <button 
                 onClick={() => setStatus('idle')}
                 className="text-blue-900 font-bold hover:underline"
               >
                 Invia un'altra richiesta
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nome e Cognome *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="E es. Mario Rossi"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefono *</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+39 3XX XXX XXXX"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="mario@esempio.it"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Città *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Es. Bologna"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo di Lavoro *</label>
                <select 
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all appearance-none"
                  value={formData.jobType}
                  onChange={(e) => setFormData({...formData, jobType: e.target.value})}
                >
                  <option value="" disabled>Seleziona un'opzione</option>
                  {Object.values(JobType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Messaggio (Opzionale)</label>
                <textarea 
                  rows={4}
                  placeholder="Descrivi brevemente il tuo progetto..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  required
                  className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-900 transition-all cursor-pointer"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                  Accetto la <a href="#" className="underline">Privacy Policy</a> e il trattamento dei dati.
                </span>
              </label>

              <button 
                disabled={status === 'loading'}
                className="w-full bg-orange-600 text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-orange-600/20 hover:bg-orange-700 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-3 active:scale-95"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>INVIO IN CORSO...</span>
                  </>
                ) : (
                  <span>INVIA RICHIESTA</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;

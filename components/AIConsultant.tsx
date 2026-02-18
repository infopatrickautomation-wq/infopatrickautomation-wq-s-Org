
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Sei un esperto consulente di Vertical System. Rispondi in italiano a questa domanda sui lavori edili in quota con tecnica su funi (rope access): "${message}". Sii professionale, conciso e invita a contattare l'azienda per un sopralluogo gratuito.`,
        config: {
          systemInstruction: `Sei l'assistente virtuale di Vertical System.

INFORMAZIONI AZIENDA:
- Nome: Vertical System
- Servizi: Lavorazioni edili su funi (rope access)
- Specializzazioni: Ristrutturazione facciate in quota, Manutenzione e tinteggiatura, Impermeabilizzazioni, Installazione linee vita, Pulizia grondaie, Ispezioni tecniche
- Zone: Emilia-Romagna (Bologna, Modena, Ferrara, Ravenna, Imola)
- Tecnica: Rope access (lavori su funi senza ponteggi)
- Certificazioni: Operatori IRATA/FISAT certificati

VANTAGGI TECNICA SU FUNI:
- Costi inferiori (no ponteggi)
- Tempi ridotti (setup veloce)
- Zero impatto visivo (no strutture ingombranti)
- Accesso a zone difficili
- Massima sicurezza

COMPORTAMENTO:
- Rispondi alle domande sui nostri servizi
- Spiega vantaggi tecnica rope access vs ponteggi tradizionali
- Enfatizza sicurezza e certificazioni
- Per domande tecniche generali, usa conoscenza ma applica al nostro contesto
- Invita sempre a sopralluogo gratuito per preventivo preciso
- Tono: Professionale, competente, rassicurante`
        }
      });
      setResponse(res.text || 'Non sono riuscito a elaborare una risposta. Prova a chiamarci!');
    } catch (error) {
      console.error(error);
      setResponse('Spiacente, il servizio AI è temporaneamente non disponibile. Chiamaci per assistenza!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-2xl shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-110 flex items-center space-x-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span className="font-bold text-sm hidden sm:inline">Consulente AI</span>
        </button>
      ) : (
        <div className="bg-white w-80 sm:w-96 rounded-[30px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-black p-6 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Vertical System AI</h4>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Sempre Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="p-6 h-64 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
            {response ? (
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-sm leading-relaxed text-gray-700">
                {response}
              </div>
            ) : (
              <div className="text-gray-400 text-sm italic text-center mt-12">
                Chiedi informazioni sui nostri servizi di lavori edili su funi...
              </div>
            )}
            {isLoading && (
              <div className="flex justify-center py-4">
                <div className="animate-bounce space-x-1 flex">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Chiedi consiglio..."
              className="flex-grow text-sm outline-none bg-gray-100 p-3 rounded-xl focus:ring-1 focus:ring-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && askAI()}
            />
            <button
              onClick={askAI}
              className="bg-black text-white p-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50"
              disabled={isLoading || !message.trim()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 glass-strong px-4 py-2 rounded-full mb-6 fade-in">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-100 text-sm font-bold tracking-wide uppercase">Specialisti Rope Access in Emilia-Romagna</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 font-heading fade-in fade-in-delay-1">
            Lavori Edili in Quota <br />
            <span className="text-orange-500">Tecnica su Funi</span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light fade-in fade-in-delay-2">
            Interventi specializzati in altezza senza ponteggi.
            Sicurezza, rapidità ed efficienza garantite.
            Preventivo gratuito in <span className="text-white font-bold">24 ore</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 fade-in fade-in-delay-3">
            <a
              href="#preventivo"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 text-center shadow-2xl shadow-orange-600/30 cursor-pointer"
            >
              RICHIEDI PREVENTIVO GRATUITO
            </a>
            <a
              href="#servizi"
              className="glass-strong text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all hover:bg-white/20 text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>SCOPRI I NOSTRI SERVIZI</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 opacity-80 fade-in fade-in-delay-3">
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="font-semibold">Certificati e Assicurati</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="font-semibold">Emilia-Romagna e zone limitrofe</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="font-semibold">Interventi rapidi senza interruzioni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-white text-xs font-bold tracking-widest uppercase">Scopri di più</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </div>
  );
};

export default Hero;

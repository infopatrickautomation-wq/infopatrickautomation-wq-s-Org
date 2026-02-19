
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b9bfd5f578?q=80&w=2069&auto=format&fit=crop')", // Professional Rope Access Technician
        }}
      >
        <div className="absolute inset-0 bg-[#0F1115]/70"></div> {/* 70% Opacity Dark Overlay for better text contrast */}
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase font-heading">Specialisti Rope Access Emilia-Romagna</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-tight mb-8 font-heading uppercase opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Lavori Edili in Quota <br />
            <span className="text-orange-500 font-extrabold text-6xl md:text-8xl lg:text-9xl">Tecnica su Funi</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl font-light opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            Sicurezza, rapidità ed efficienza senza ponteggi. <br className="hidden md:block" />
            Interventi professionali garantiti ad ogni altezza.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            {/* Primary Button */}
            <a
              href="#preventivo"
              className="w-full sm:w-auto bg-[#FF8C00] text-white px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] text-center cursor-pointer font-cta uppercase"
            >
              Richiedi Preventivo
            </a>

            {/* Ghost Button */}
            <a
              href="#servizi"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 text-center cursor-pointer font-cta uppercase group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Scopri i Servizi</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards] cursor-pointer z-20" onClick={() => {
        const nextSection = document.getElementById('featured-projects');
        if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }}>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="shape-divider-bottom shape-divider-bottom-dark z-10 pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

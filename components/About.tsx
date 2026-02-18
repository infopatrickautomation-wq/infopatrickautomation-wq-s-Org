
import React, { useState, useEffect, useRef } from 'react';

const StatCounter: React.FC<{ end: number, label: string, suffix?: string }> = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={elementRef} className="text-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-center">
      <span className="text-4xl md:text-5xl font-black text-blue-600 mb-2 font-heading">
        {count}{suffix}
      </span>
      <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">{label}</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541913080211-483750244621?auto=format&fit=crop&q=80"
              alt="Team in cantiere"
              className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white p-10 rounded-[40px] z-20 hidden md:block shadow-2xl cursor-default">
              <span className="block text-5xl font-black font-heading mb-1">25+</span>
              <span className="block text-sm font-bold uppercase tracking-wider">Anni di Esperienza <br /> Certificata</span>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">La nostra storia</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-blue-600 mb-8 leading-tight">Passione e professionalità dal 1998</h3>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
            <p>
              <span className="font-bold text-gray-900">Rossini Coperture</span> nasce nel 1998 dalla passione di Marco Rossini per il settore edile. In oltre 25 anni di attività abbiamo realizzato centinaia di progetti in tutta l'Emilia-Romagna.
            </p>
            <p>
              Il nostro team è composto da professionisti specializzati con certificazioni di settore. Ogni lavoro viene seguito personalmente dal titolare, garantendo un controllo qualità costante e un rapporto diretto con il cliente.
            </p>
            <p className="font-medium text-blue-600 italic border-l-4 border-orange-500 pl-6">
              "Il nostro obiettivo non è solo costruire un tetto, ma proteggere il valore della tua casa e il benessere della tua famiglia."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            <StatCounter end={500} label="Progetti" suffix="+" />
            <StatCounter end={100} label="Soddisfazione" suffix="%" />
            <StatCounter end={10} label="Esperti" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

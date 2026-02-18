
import React, { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-black text-orange-500 font-heading">{count}{suffix}</span>
      <p className="text-gray-500 text-sm font-bold mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500 rounded-[40px] opacity-10"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-black rounded-[40px] opacity-5"></div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
            alt="Team Vertical System al lavoro"
            className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover h-[500px]"
            loading="lazy"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Chi Siamo</h2>
            <h3 className="text-4xl font-bold font-heading mb-6">Esperienza e sicurezza nei lavori in quota</h3>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Vertical System</strong> è specializzata in lavorazioni edili su funi,
              una tecnica innovativa che permette di eseguire interventi in
              altezza senza l'utilizzo di ponteggi o piattaforme aeree.
            </p>
            <p>
              Grazie alla tecnica <strong className="text-gray-900">rope access</strong> (accesso su funi), operiamo in
              modo rapido, sicuro ed economico su edifici residenziali,
              commerciali e industriali di qualsiasi altezza.
            </p>
            <p>
              Il nostro team è composto da operatori certificati <strong className="text-gray-900">IRATA/FISAT</strong>
              {' '}con anni di esperienza in lavori edili complessi. Ogni intervento
              è eseguito secondo le più rigide normative di sicurezza.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-100">
        <StatCounter end={100} suffix="+" label="Clienti Soddisfatti" />
        <StatCounter end={500} suffix="+" label="Interventi Completati" />
        <StatCounter end={100} suffix="%" label="Certificati e Assicurati" />
        <StatCounter end={3} suffix="" label="Operatori Specializzati" />
      </div>
    </div>
  );
};

export default About;

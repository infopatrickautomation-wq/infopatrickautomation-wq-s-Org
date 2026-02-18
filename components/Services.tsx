
import React, { useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = section.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in-up');
              }, index * 100); // 0.1s delay per card
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4" ref={sectionRef}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Professionalità al tuo servizio</h2>
        <h3 className="text-4xl font-bold font-heading mb-6">Soluzioni complete per ogni tipo di copertura</h3>
        <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="service-card group bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start opacity-0"
          >
            <div className="mb-6">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900 font-heading">{service.title}</h4>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>
            <a href="#preventivo" className="text-blue-600 font-bold text-sm flex items-center space-x-2 group-hover:text-orange-500 transition-colors cursor-pointer">
              <span>Richiedi maggiori info</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-600 rounded-[40px] p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">Sapevi che un buon isolamento termico <br className="hidden md:block" /> può farti risparmiare fino al 40%?</h4>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Non aspettare la prossima bolletta. Valuta oggi stesso un intervento di coibentazione professionale.</p>
          <a href="#preventivo" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all transform active:scale-95 shadow-xl cursor-pointer">
            Calcola il tuo risparmio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

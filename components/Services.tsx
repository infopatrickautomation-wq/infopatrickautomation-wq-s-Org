
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
              }, index * 100);
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
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">I Nostri Servizi</h2>
        <h3 className="text-4xl font-bold font-heading mb-6">Soluzioni professionali su funi per ogni esigenza</h3>
        <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="service-card group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-start opacity-0"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                {service.icon}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-bold mb-4 text-gray-900 font-heading group-hover:text-orange-500 transition-colors">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <a href="#preventivo" className="text-orange-500 font-bold text-sm flex items-center space-x-2 group-hover:text-orange-600 transition-colors cursor-pointer self-start">
                <span className="border-b-2 border-transparent group-hover:border-orange-500 transition-all">Richiedi maggiori info</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-black rounded-[40px] p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">Perché scegliere i lavori su funi <br className="hidden md:block" /> invece dei ponteggi tradizionali?</h4>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Costi ridotti fino al 60%, tempi più rapidi, zero impatto visivo e accesso a zone difficili. Scopri tutti i vantaggi della tecnica rope access.</p>
          <a href="#preventivo" className="inline-block bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all transform active:scale-95 shadow-xl cursor-pointer">
            Scopri i vantaggi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

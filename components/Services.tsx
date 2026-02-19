
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
            const items = section.querySelectorAll('.service-card');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('fade-in-up');
                item.classList.remove('opacity-0');
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servizi" className="py-24 bg-[#1C1F26] relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl font-normal font-heading text-white mb-4 uppercase tracking-[0.05em]">
            I Nostri Servizi
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="service-card group p-8 rounded-2xl bg-transparent hover:bg-[#2D3748] transition-all duration-300 border border-white/5 hover:border-white/10 opacity-0"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6 text-white group-hover:text-orange-500 transition-colors duration-300 transform group-hover:scale-110">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-12 h-12" })}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-normal font-heading text-orange-500 mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>

                {/* Orange Line Separator */}
                <div className="h-[3px] w-12 bg-orange-500 mb-6 group-hover:w-20 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-24 bg-white/5 border border-white/10 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h4 className="text-3xl font-heading text-white uppercase mb-4">
            Soluzioni su misura per ogni esigenza
          </h4>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Richiedi un sopralluogo gratuito. I nostri tecnici valuteranno l'intervento migliore per te.
          </p>
          <a
            href="#preventivo"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 uppercase tracking-widest text-sm shadow-lg hover:shadow-orange-500/20"
          >
            Contattaci Ora
          </a>
        </div>
      </div>
    </section>
  );
};
export default Services;

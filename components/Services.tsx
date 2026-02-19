
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
            const items = section.querySelectorAll('.service-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('fade-in-up');
                item.classList.remove('opacity-0');
              }, index * 50);
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
    <section id="servizi" className="py-24 bg-gray-50 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-2">
            I Nostri Servizi
          </h2>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="service-item opacity-0 transform transition-all duration-500"
            >
              <div className="group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 group-hover:text-orange-500 transition-colors font-heading">
                  {service.title}
                </h3>
                <div className="h-[2px] w-full bg-sky-200 group-hover:bg-orange-500 transition-colors duration-300"></div>
                {/* Optional: Minimal description on hover or always visible but subtle */}
                <p className="mt-3 text-sm text-gray-500 opacity-80 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Consistency */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Non trovi quello che cerchi?</h4>
              <p className="text-gray-500">Contattaci per una soluzione personalizzata.</p>
            </div>
            <a
              href="#contatti"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md uppercase tracking-wider text-sm"
            >
              Richiedi Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

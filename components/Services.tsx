
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
                card.classList.remove('opacity-0');
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
    <section id="servizi" className="py-24 bg-white relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase tracking-wider text-gray-900">
            I NOSTRI SERVIZI PER RISOLVERE I TUOI PROBLEMI
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col items-center text-center opacity-0 transform transition-all duration-700 hover:-translate-y-2"
            >
              {/* Circular Image Container */}
              <div className="relative w-48 h-48 mb-8 group">
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-orange-500/20 transition-all duration-500"></div>
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Icon Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-md z-10">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 font-heading text-gray-900 uppercase tracking-wide h-14 flex items-center justify-center">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-8 max-w-xs text-sm leading-relaxed min-h-[80px]">
                {service.description}
              </p>

              {/* CTA Button */}
              <a
                href="#preventivo"
                className="bg-[#FF8C00] hover:bg-[#E67E00] text-white text-xs font-bold py-3 px-8 uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Scopri di più
              </a>
            </div>
          ))}
        </div>

        {/* Banner Bottom */}
        <div className="mt-24 bg-[#1C1F26] rounded-[20px] p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <h4 className="text-2xl md:text-4xl font-bold text-white mb-6 font-heading uppercase">
              Hai bisogno di un intervento rapido?
            </h4>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Contattaci per un preventivo gratuito e senza impegno. Rispondiamo in meno di 24 ore.
            </p>
            <a
              href="https://wa.me/393475006093"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-xl cursor-pointer uppercase tracking-wider text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Chatta su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

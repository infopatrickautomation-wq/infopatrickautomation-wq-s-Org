import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servizi" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6">
            I Nostri Servizi
          </h2>
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="group cursor-default">
              <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <div className="h-[2px] w-full bg-blue-300 group-hover:bg-orange-500 transition-colors duration-300 relative">
                <div className="absolute left-0 top-0 h-full w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

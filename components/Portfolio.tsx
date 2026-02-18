
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';

const ALL_CATEGORIES = ['Tutti', 'Ristrutturazione', 'Manutenzione', 'Impermeabilizzazione', 'Linee Vita', 'Ispezioni'] as const;

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tutti');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'Tutti'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold font-heading mb-4">I Nostri Lavori</h2>
        <p className="text-gray-500">Interventi recenti realizzati con tecnica rope access</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {ALL_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${activeFilter === cat
                ? 'bg-black text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => openLightbox(index)}
            className="portfolio-card group relative overflow-hidden rounded-[30px] bg-gray-200 aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category} • {project.year}</span>
              <h4 className="text-white font-bold text-lg font-heading">{project.title}</h4>
              <p className="text-gray-300 text-sm mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={closeLightbox}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={filteredProjects[lightboxIndex].image}
            alt={filteredProjects[lightboxIndex].title}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h4 className="text-white font-bold text-xl">{filteredProjects[lightboxIndex].title}</h4>
            <p className="text-gray-400 text-sm">{filteredProjects[lightboxIndex].category} • {filteredProjects[lightboxIndex].year}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

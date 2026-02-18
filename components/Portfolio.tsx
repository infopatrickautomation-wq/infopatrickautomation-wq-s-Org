
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import Lightbox from './Lightbox';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tutti');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const categories = ['Tutti', 'Residenziale', 'Industriale', 'Bonifica', 'Restauro', 'Coibentazione'];

  const filteredProjects = filter === 'Tutti'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Prepare images for lightbox
  const lightboxImages = filteredProjects.map(project => ({
    src: project.image,
    title: project.title,
    description: `${project.description} - Anno: ${project.year}`
  }));

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading mb-6">I Nostri Lavori</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Ogni progetto è una sfida che affrontiamo con dedizione. Sfoglia la nostra gallery per vedere la qualità dei nostri interventi.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${filter === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover Overlay with Icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              {/* Expand Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>

              <span className="inline-block self-start px-3 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
                {project.category}
              </span>
              <h4 className="text-white text-xl font-bold font-heading mb-2">{project.title}</h4>
              <p className="text-blue-100 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs font-semibold">Anno: {project.year}</span>
                <span className="text-white text-xs font-bold">Clicca per ingrandire →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default Portfolio;


import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tutti');
  const categories = ['Tutti', 'Residenziale', 'Industriale', 'Bonifica', 'Restauro'];

  const filteredProjects = filter === 'Tutti' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

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
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-blue-900 text-white shadow-lg' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-[30px] bg-gray-200 aspect-[4/3] shadow-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="inline-block self-start px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
                {project.category}
              </span>
              <h4 className="text-white text-xl font-bold font-heading mb-2">{project.title}</h4>
              <p className="text-blue-100 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs font-semibold">Anno: {project.year}</span>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

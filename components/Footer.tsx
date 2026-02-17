
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white text-blue-950 flex items-center justify-center rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <div className="flex flex-col">
                 <span className="font-bold text-white text-lg leading-none font-heading uppercase tracking-tighter">Rossini</span>
                 <span className="text-[8px] font-bold text-orange-500 tracking-[0.2em] uppercase leading-none">Coperture</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed">
              Specialisti in coperture e isolamento termo-acustico per edilizia civile e industriale in tutta l'Emilia-Romagna dal 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest">Azienda</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#chi-siamo" className="hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="#servizi" className="hover:text-white transition-colors">I Nostri Servizi</a></li>
                <li><a href="#lavori" className="hover:text-white transition-colors">Progetti Realizzati</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest">Supporto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#preventivo" className="hover:text-white transition-colors">Richiedi Preventivo</a></li>
                <li><a href="#recensioni" className="hover:text-white transition-colors">Recensioni</a></li>
                <li><a href="#contatti" className="hover:text-white transition-colors">Dove Siamo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact info small */}
          <div className="space-y-4">
             <h4 className="text-white font-bold uppercase text-xs tracking-widest">Sede Legale</h4>
             <p className="text-sm">Via dell'Industria 42, <br /> 40012 Calderara di Reno (BO)</p>
             <p className="text-sm">P.IVA: 01234567890</p>
             <div className="pt-4 flex items-center space-x-2 text-white">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs font-bold uppercase">Siamo Aperti: Lun-Sab</span>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-xs">
           <p>© 2024 Rossini Coperture S.r.l. - Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

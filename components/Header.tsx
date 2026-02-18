
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servizi', href: '#servizi' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Lavori', href: '#lavori' },
    { name: 'Recensioni', href: '#recensioni' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none font-heading ${isScrolled ? 'text-gray-900' : 'text-white'}`}>ROSSINI</span>
            <span className={`text-xs font-semibold tracking-widest ${isScrolled ? 'text-orange-500' : 'text-orange-400'}`}>COPERTURE</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-orange-500 cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#preventivo"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            PREVENTIVO GRATIS
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-900 z-40 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-orange-400 transition-colors font-heading"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col items-center space-y-6 w-full max-w-xs">
            <a
              href="#preventivo"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-orange-500 text-white text-center py-4 rounded-xl text-lg font-bold cursor-pointer"
            >
              Richiedi Preventivo
            </a>
            <a
              href="tel:+390511234567"
              className="w-full border-2 border-white/20 text-white text-center py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              <span>Chiama Subito</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

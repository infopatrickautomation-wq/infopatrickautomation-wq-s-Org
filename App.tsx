
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="servizi" className="py-20 bg-white">
          <Services />
        </section>
        
        <section id="chi-siamo" className="py-20 bg-gray-50">
          <About />
        </section>
        
        <section id="lavori" className="py-20 bg-white">
          <Portfolio />
        </section>
        
        <section id="recensioni" className="py-20 bg-gray-50 overflow-hidden">
          <Reviews />
        </section>
        
        <section id="preventivo" className="py-20 bg-white">
          <QuoteForm />
        </section>
        
        <section id="contatti" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h2 className="text-3xl font-bold mb-6 font-heading">Contattaci</h2>
                  <p className="text-gray-400 mb-8">Siamo a tua disposizione dal lunedì al sabato, 8:00 - 18:00. Sopralluoghi gratuiti in tutta l'Emilia-Romagna.</p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-900/50 flex items-center justify-center rounded-full">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <span>Via dell'Industria 42, 40012 Calderara di Reno (BO)</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-900/50 flex items-center justify-center rounded-full">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <a href="tel:+390511234567" className="hover:text-blue-400 transition-colors">+39 051 123 4567</a>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-900/50 flex items-center justify-center rounded-full">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <a href="mailto:info@rossinicoperture.it" className="hover:text-blue-400 transition-colors">info@rossinicoperture.it</a>
                    </li>
                  </ul>
               </div>
               
               <div className="h-[400px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11379.37893121543!2d11.246411546738596!3d44.55831557002035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd6a8e80735e5%3A0x6a0537447d6e87f8!2s40012%20Calderara%20di%20Reno%20BO!5e0!3m2!1sit!2sit!4v1714412345678!5m2!1sit!2sit" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
               </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
      <AIConsultant />
    </div>
  );
};

export default App;

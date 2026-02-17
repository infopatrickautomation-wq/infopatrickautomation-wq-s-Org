
import React, { useState } from 'react';
import { REVIEWS_DATA } from '../constants';

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-bold font-heading mb-4">Cosa Dicono di Noi</h2>
          <p className="text-gray-500">La soddisfazione dei clienti è il nostro miglior biglietto da visita. Leggi le esperienze di chi ha già scelto Rossini Coperture.</p>
        </div>
        
        <div className="flex items-center space-x-12 bg-white px-8 py-6 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100">
           <div className="text-center">
              <span className="block text-4xl font-black text-blue-900 font-heading">4.9/5</span>
              <div className="flex text-yellow-400 mt-1">
                 {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-2 block">Rating Google</span>
           </div>
           <div className="w-[1px] h-12 bg-gray-100"></div>
           <div className="text-center">
              <span className="block text-4xl font-black text-blue-900 font-heading">100+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-2 block">Recensioni</span>
           </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {REVIEWS_DATA.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl shadow-blue-900/5 relative border border-gray-100">
                  <svg className="absolute top-10 right-10 w-20 h-20 text-gray-50 -z-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM3.017 21V18C3.017 16.8954 3.9124 16 5.017 16H8.017V14H6.017C4.36014 14 3.017 12.6569 3.017 11V8H9.017V14H11.017V21H3.017Z" /></svg>
                  
                  <div className="relative z-10">
                    <div className="flex text-yellow-400 mb-6">
                       {[...Array(review.rating)].map((_, i) => <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                      "{review.text}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">{review.name}</h5>
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-12 space-x-4">
          <button onClick={prev} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all shadow-lg active:scale-95 bg-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all shadow-lg active:scale-95 bg-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

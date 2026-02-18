
import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS_DATA } from '../constants';

const Reviews: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const manualPauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  // Duplicate reviews 3x for seamless infinite loop
  const duplicatedReviews = [...REVIEWS_DATA, ...REVIEWS_DATA, ...REVIEWS_DATA];

  // Auto-scroll speed (pixels per frame) - adjust for desired speed
  const SCROLL_SPEED = 0.5; // ~40 seconds for full cycle at 60fps
  const MANUAL_PAUSE_DURATION = 5000; // 5 seconds

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused && !isTransitioningRef.current) {
        scrollPositionRef.current += SCROLL_SPEED;

        // Get track width (total width of all cards)
        const trackWidth = track.scrollWidth;
        const singleSetWidth = trackWidth / 3; // Since we tripled the reviews

        // Reset position seamlessly when we've scrolled through one complete set
        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = 0;
        }

        // Apply transform
        track.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    // Only resume if no manual pause is active
    if (!manualPauseTimerRef.current) {
      setIsPaused(false);
    }
  };

  const scrollToPosition = (targetPosition: number) => {
    const track = trackRef.current;
    if (!track) return;

    isTransitioningRef.current = true;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${targetPosition}px)`;

    setTimeout(() => {
      scrollPositionRef.current = targetPosition;
      track.style.transition = '';
      isTransitioningRef.current = false;
    }, 500);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;

    // Pause auto-scroll
    setIsPaused(true);

    // Clear existing manual pause timer
    if (manualPauseTimerRef.current) {
      clearTimeout(manualPauseTimerRef.current);
    }

    // Calculate card width + gap
    const container = track.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const cardWidth = containerWidth / 3; // Show 3 cards on desktop
    const gap = 24; // 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    // Calculate new position
    let newPosition = scrollPositionRef.current;
    if (direction === 'next') {
      newPosition += scrollAmount;
    } else {
      newPosition -= scrollAmount;
      if (newPosition < 0) {
        newPosition = 0;
      }
    }

    // Handle seamless loop for next direction
    const trackWidth = track.scrollWidth;
    const singleSetWidth = trackWidth / 3;
    if (newPosition >= singleSetWidth) {
      newPosition = newPosition % singleSetWidth;
    }

    scrollToPosition(newPosition);

    // Resume auto-scroll after 5 seconds
    const timer = setTimeout(() => {
      setIsPaused(false);
      manualPauseTimerRef.current = null;
    }, MANUAL_PAUSE_DURATION);

    manualPauseTimerRef.current = timer;
  };

  useEffect(() => {
    return () => {
      if (manualPauseTimerRef.current) {
        clearTimeout(manualPauseTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-bold font-heading mb-4">Cosa Dicono di Noi</h2>
          <p className="text-gray-500">La soddisfazione dei clienti è il nostro miglior biglietto da visita. Leggi le esperienze di chi ha già scelto Rossini Coperture.</p>
        </div>

        <div className="flex items-center space-x-12 bg-white px-8 py-6 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100">
          <div className="text-center">
            <span className="block text-4xl font-black text-blue-600 font-heading">4.9/5</span>
            <div className="flex text-yellow-400 mt-1">
              {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase mt-2 block">Rating Google</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-100"></div>
          <div className="text-center">
            <span className="block text-4xl font-black text-blue-600 font-heading">100+</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase mt-2 block">Recensioni</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Arrow Controls */}
        <button
          onClick={() => handleArrowClick('prev')}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-200 items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg cursor-pointer"
          aria-label="Previous review"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          onClick={() => handleArrowClick('next')}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-200 items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg cursor-pointer"
          aria-label="Next review"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Carousel Container */}
        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-3rem)] lg:w-[calc(33.333vw-2.5rem)] flex-shrink-0"
              >
                <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-blue-900/5 relative border border-gray-100 h-full">
                  <svg className="absolute top-6 right-6 w-16 h-16 text-gray-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM3.017 21V18C3.017 16.8954 3.9124 16 5.017 16H8.017V14H6.017C4.36014 14 3.017 12.6569 3.017 11V8H9.017V14H11.017V21H3.017Z" /></svg>

                  <div className="relative z-10">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(review.rating)].map((_, i) => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                      "{review.text}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm">{review.name}</h5>
                        <span className="text-gray-400 text-xs">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">
          <button
            onClick={() => handleArrowClick('prev')}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg cursor-pointer"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={() => handleArrowClick('next')}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg cursor-pointer"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Project {
    id: number;
    title: string;
    category: string;
    year: number;
    image: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'RISTRUTTURAZIONE FACCIATA CONDOMINIO',
        category: 'Ristrutturazione',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop&q=80'
    },
    {
        id: 2,
        title: 'IMPERMEABILIZZAZIONE TETTO INDUSTRIALE',
        category: 'Impermeabilizzazione',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&h=900&fit=crop&q=80'
    },
    {
        id: 3,
        title: 'INSTALLAZIONE LINEE VITA',
        category: 'Sicurezza',
        year: 2023,
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop&q=80'
    },
    {
        id: 4,
        title: 'MANUTENZIONE FACCIATA CENTRO STORICO',
        category: 'Manutenzione',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&q=80'
    },
    {
        id: 5,
        title: 'PULIZIA GRONDAIE EDIFICIO ALTO',
        category: 'Manutenzione',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&q=80'
    },
    {
        id: 6,
        title: 'ISPEZIONE TECNICA CAPANNONE',
        category: 'Ispezioni',
        year: 2023,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop&q=80'
    }
];

const HeroProjects: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationState, setAnimationState] = useState<'sharp' | 'blurring' | 'blurred'>('sharp');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef<number | null>(null);

    const totalSlides = PROJECTS.length;

    const clearTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setAnimationState('sharp');

        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
            setIsTransitioning(false);
        }, 1000);
    }, [isTransitioning, totalSlides]);

    const goToSlide = useCallback((index: number) => {
        if (index === currentSlide || isTransitioning) return;

        clearTimer();
        setIsTransitioning(true);
        setAnimationState('sharp');

        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 1000);
    }, [currentSlide, isTransitioning, clearTimer]);

    useEffect(() => {
        if (isTransitioning) {
            clearTimer();
            return;
        }

        if (animationState === 'sharp') {
            timerRef.current = setTimeout(() => {
                setAnimationState('blurring');
            }, 3000) as unknown as number; // Slightly longer readable time for Hero
        } else if (animationState === 'blurring') {
            timerRef.current = setTimeout(() => {
                setAnimationState('blurred');
            }, 1500) as unknown as number;
        } else if (animationState === 'blurred') {
            timerRef.current = setTimeout(() => {
                nextSlide();
            }, 2000) as unknown as number;
        }

        return () => clearTimer();
    }, [currentSlide, animationState, isTransitioning, nextSlide, clearTimer]);

    const currentProject = PROJECTS[currentSlide];

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-gray-900" aria-live="polite">
            <style jsx>{`
          @keyframes blurWipe {
            0% {
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            }
            100% {
              clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
            }
          }

          @keyframes blurWipeMobile {
            0% {
              clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            }
            100% {
              clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
            }
          }

          @keyframes textFadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .blur-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: blur(12px) brightness(0.6);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }

          .blur-layer.animating {
            animation: blurWipe 2.5s ease-in-out forwards;
          }

          @media (max-width: 768px) {
            .blur-layer.animating {
              animation: blurWipeMobile 2.5s ease-in-out forwards;
            }
          }

          .text-overlay {
            opacity: 0;
          }

          .text-overlay.visible {
            animation: textFadeIn 1s ease-out 0.5s forwards;
          }

          .divider-line {
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }

          @media (min-width: 768px) {
            .divider-line {
              left: 50%;
              top: 0;
              bottom: 0;
              width: 2px;
            }
          }

          @media (max-width: 767px) {
            .divider-line {
              top: 50%;
              left: 0;
              right: 0;
              height: 2px;
            }
          }
        `}</style>

            {/* Dark global overlay for text readability on sharp images */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

            {/* Base Sharp Image */}
            <div className="absolute inset-0">
                <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                />
            </div>

            {/* Blur Layer */}
            <div
                className={`blur-layer z-10 ${animationState === 'blurring' || animationState === 'blurred' ? 'animating' : ''}`}
                style={{
                    backgroundImage: `url(${currentProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Center Divider & Text Overlay */}
            <div
                className={`text-overlay absolute inset-0 flex items-center justify-center z-20 ${animationState === 'blurring' || animationState === 'blurred' ? 'visible' : ''}`}
            >
                <div className="divider-line" />

                <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 font-heading"
                        style={{
                            color: '#F97316',
                            textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 0 30px rgba(249,115,22,0.3)'
                        }}
                    >
                        {currentProject.title}
                    </h1>
                    <div className="flex items-center justify-center mb-6">
                        <div className="h-[1px] w-24 md:w-32 bg-white/60"></div>
                    </div>
                    <p
                        className="text-white/90 text-lg md:text-xl lg:text-2xl uppercase tracking-widest font-light"
                        style={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                        }}
                    >
                        {currentProject.category} • {currentProject.year}
                    </p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => goToSlide((currentSlide - 1 + totalSlides) % totalSlides)}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center transition-all cursor-pointer z-30 group bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm border border-white/10"
                aria-label="Previous project"
            >
                <svg className="w-8 h-8 text-white/90 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center transition-all cursor-pointer z-30 group bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm border border-white/10"
                aria-label="Next project"
            >
                <svg className="w-8 h-8 text-white/90 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
                {PROJECTS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all cursor-pointer shadow-lg ${index === currentSlide
                            ? 'w-16 h-2 bg-orange-500 rounded-full'
                            : 'w-4 h-2 bg-white/50 hover:bg-white inset-ring inset-ring-black/20 rounded-full'
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-80 cursor-pointer z-20 animate-pulse" onClick={() => {
                const nextSection = document.getElementById('certificazioni'); // Next section
                if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}>
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroProjects;

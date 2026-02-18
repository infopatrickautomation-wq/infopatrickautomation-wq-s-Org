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
        title: 'VILLETTA MODERNA BOLOGNA',
        category: 'Copertura Civile',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&q=80'
    },
    {
        id: 2,
        title: 'CONDOMINIO RISTRUTTURATO',
        category: 'Impermeabilizzazione',
        year: 2023,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop&q=80'
    },
    {
        id: 3,
        title: 'CAPANNONE INDUSTRIALE',
        category: 'Copertura Metallica',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop&q=80'
    },
    {
        id: 4,
        title: 'COIBENTAZIONE TERMICA',
        category: 'Isolamento',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=600&fit=crop&q=80'
    },
    {
        id: 5,
        title: 'BONIFICA AMIANTO',
        category: 'Rimozione Eternit',
        year: 2023,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop&q=80'
    },
    {
        id: 6,
        title: 'TETTO VENTILATO',
        category: 'Legno Lamellare',
        year: 2024,
        image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&h=600&fit=crop&q=80'
    }
];

const FeaturedProjects: React.FC = () => {
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

        // Fade out current slide
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

        // Animation cycle (10 seconds total)
        // 0-1s: Fade-in (handled by transition)
        // 1-3s: Sharp image visible (2s)
        // 3-5s: Blur wipe animation (2s)
        // 5-9s: Maintain blurred state (4s)
        // 9-10s: Fade-out to next

        if (animationState === 'sharp') {
            // Wait 2s, then start blur animation
            timerRef.current = setTimeout(() => {
                setAnimationState('blurring');
            }, 2000) as unknown as number;
        } else if (animationState === 'blurring') {
            // Blur animation takes 1.5s, then maintain for 1s
            timerRef.current = setTimeout(() => {
                setAnimationState('blurred');
            }, 1500) as unknown as number;
        } else if (animationState === 'blurred') {
            // Hold for 1s, then next slide
            // Hold for 2s, then next slide
            timerRef.current = setTimeout(() => {
                nextSlide();
            }, 2000) as unknown as number;
        }

        return () => clearTimer();
    }, [currentSlide, animationState, isTransitioning, nextSlide, clearTimer]);

    const currentProject = PROJECTS[currentSlide];

    return (
        <section className="py-20 bg-gray-50" aria-live="polite">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold font-heading mb-4">Progetti in Evidenza</h2>
                    <p className="text-gray-500">Scopri alcuni dei nostri lavori più recenti</p>
                </div>
            </div>

            <div
                className="relative w-full max-w-[1400px] mx-auto h-[280px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-3xl"
            >
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

                {/* Base Sharp Image (always visible) */}
                <div className="absolute inset-0">
                    <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                            }`}
                    />
                </div>

                {/* Blur Layer (animates from left to right) */}
                <div
                    className={`blur-layer ${animationState === 'blurring' || animationState === 'blurred' ? 'animating' : ''}`}
                    style={{
                        backgroundImage: `url(${currentProject.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                {/* Center Divider & Text Overlay */}
                <div
                    className={`text-overlay absolute inset-0 flex items-center justify-center ${animationState === 'blurring' || animationState === 'blurred' ? 'visible' : ''}`}
                >
                    {/* Divider Line */}
                    <div className="divider-line" />

                    {/* Text Content */}
                    <div className="relative z-10 text-center px-8">
                        <h3
                            className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 font-heading"
                            style={{
                                color: '#F97316',
                                textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 0 30px rgba(249,115,22,0.3)'
                            }}
                        >
                            {currentProject.title}
                        </h3>
                        <div className="flex items-center justify-center mb-3">
                            <div className="h-[1px] w-16 md:w-32 bg-white/60"></div>
                        </div>
                        <p
                            className="text-white/90 text-sm md:text-base lg:text-lg uppercase tracking-widest"
                            style={{
                                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                            }}
                        >
                            {currentProject.category} • {currentProject.year}
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows - Minimal Style */}
                <button
                    onClick={() => goToSlide((currentSlide - 1 + totalSlides) % totalSlides)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center transition-all cursor-pointer z-20 group"
                    aria-label="Previous project"
                >
                    <svg className="w-8 h-8 text-white/70 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center transition-all cursor-pointer z-20 group"
                    aria-label="Next project"
                >
                    <svg className="w-8 h-8 text-white/70 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
                {PROJECTS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all cursor-pointer ${index === currentSlide
                            ? 'w-12 h-3 bg-blue-600 rounded-full'
                            : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;

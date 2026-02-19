
import React, { useEffect, useRef } from 'react';

const steps = [
    {
        number: 1,
        icon: '🔍',
        title: 'SOPRALLUOGO E VALUTAZIONE',
        bullets: [
            'Ispezione dettagliata della zona',
            'Valutazione difficoltà accesso',
            'Analisi sicurezza',
            'Preventivo preciso e trasparente',
        ],
        highlight: 'Tempo: 30-45 minuti',
        badge: 'GRATUITO e senza impegno',
    },
    {
        number: 2,
        icon: '📋',
        title: 'PIANIFICAZIONE INTERVENTO',
        bullets: [
            'Analisi rischi e piano sicurezza',
            'Selezione materiali e attrezzature',
            'Programmazione squadra operatori',
            'Comunicazione tempistiche precise',
        ],
        highlight: 'Documento: Piano Operativo Sicurezza (POS)',
        badge: null,
    },
    {
        number: 3,
        icon: '⚙️',
        title: 'ESECUZIONE SU FUNI',
        bullets: [
            'Accesso sicuro con doppia fune',
            'Lavorazione precisa e professionale',
            'Monitoraggio continuo sicurezza',
            'Rispetto tempi concordati',
        ],
        highlight: 'Durata: 50-70% più veloce vs ponteggi',
        badge: null,
    },
    {
        number: 4,
        icon: '✅',
        title: 'VERIFICA E CONSEGNA',
        bullets: [
            'Ispezione qualità completamento',
            'Pulizia area di lavoro',
            'Documentazione fotografica',
            'Certificati e garanzie',
        ],
        highlight: 'Garanzia: Su tutti i lavori eseguiti',
        badge: null,
    },
];

const HowWeWork: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animItems = section.querySelectorAll('.step-item');
                        animItems.forEach((item, index) => {
                            setTimeout(() => {
                                (item as HTMLElement).style.opacity = '1';
                                (item as HTMLElement).style.transform = 'translateY(0)';
                            }, index * 200);
                        });
                        // Animate the connecting line
                        const line = section.querySelector('.timeline-line') as HTMLElement;
                        if (line) {
                            setTimeout(() => {
                                line.style.transform = 'scaleX(1)';
                            }, 300);
                        }
                        const lineV = section.querySelector('.timeline-line-v') as HTMLElement;
                        if (lineV) {
                            setTimeout(() => {
                                lineV.style.transform = 'scaleY(1)';
                            }, 300);
                        }
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="come-lavoriamo" className="py-20 bg-gray-50" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Come Lavoriamo</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">Il Nostro Processo in 4 Step</h3>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 leading-relaxed">
                        Dalla richiesta alla consegna, seguiamo un processo collaudato che garantisce sicurezza, qualità e puntualità in ogni intervento.
                    </p>
                </div>

                {/* Desktop Timeline (hidden on mobile) */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {/* Connecting Line */}
                    <div
                        className="timeline-line absolute top-[60px] left-[12.5%] right-[12.5%] h-1 bg-orange-500 rounded-full z-0"
                        style={{ transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 1s ease-out 0.5s' }}
                    ></div>

                    <div className="grid grid-cols-4 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="step-item flex flex-col items-center text-center"
                                style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease-out` }}
                            >
                                {/* Step Number Circle */}
                                <div className="w-[120px] h-[120px] rounded-full bg-white border-4 border-orange-500 flex flex-col items-center justify-center shadow-xl mb-6">
                                    <span className="text-3xl">{step.icon}</span>
                                    <span className="text-xs font-bold text-orange-500 mt-1">STEP {step.number}</span>
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 w-full">
                                    <h4 className="font-bold text-sm mb-3 font-heading text-gray-900">{step.title}</h4>
                                    <ul className="text-left space-y-1.5 mb-4">
                                        {step.bullets.map((bullet, i) => (
                                            <li key={i} className="text-gray-600 text-xs flex items-start">
                                                <span className="text-orange-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs font-bold text-gray-800 border-t border-gray-100 pt-3">{step.highlight}</p>
                                    {step.badge && (
                                        <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                                            {step.badge}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet Timeline (hidden on desktop) */}
                <div className="lg:hidden relative max-w-lg mx-auto">
                    {/* Vertical Line */}
                    <div
                        className="timeline-line-v absolute left-8 top-0 bottom-0 w-1 bg-orange-500 rounded-full"
                        style={{ transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform 1s ease-out 0.5s' }}
                    ></div>

                    <div className="space-y-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="step-item flex items-start"
                                style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease-out` }}
                            >
                                {/* Step Circle */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex flex-col items-center justify-center shadow-lg mr-4 z-10">
                                    <span className="text-xl">{step.icon}</span>
                                    <span className="text-[8px] font-bold text-orange-500">STEP {step.number}</span>
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex-grow">
                                    <h4 className="font-bold text-sm mb-2 font-heading text-gray-900">{step.title}</h4>
                                    <ul className="space-y-1 mb-3">
                                        {step.bullets.map((bullet, i) => (
                                            <li key={i} className="text-gray-600 text-xs flex items-start">
                                                <span className="text-orange-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs font-bold text-gray-800 border-t border-gray-100 pt-2">{step.highlight}</p>
                                    {step.badge && (
                                        <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                                            {step.badge}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Users, CheckCircle } from 'lucide-react';

interface StatItem {
    id: number;
    value: number;
    suffix: string;
    label: string;
    icon: React.ReactNode;
}

const STATS: StatItem[] = [
    {
        id: 1,
        value: 500,
        suffix: '+',
        label: 'Progetti Completati',
        icon: <Briefcase className="w-8 h-8 text-orange-500" />
    },
    {
        id: 2,
        value: 15,
        suffix: '+',
        label: 'Anni di Esperienza',
        icon: <Award className="w-8 h-8 text-orange-500" />
    },
    {
        id: 3,
        value: 100,
        suffix: '%',
        label: 'Clienti Soddisfatti',
        icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
        id: 4,
        value: 50,
        suffix: '+',
        label: 'Tecniche Certificate',
        icon: <CheckCircle className="w-8 h-8 text-orange-500" />
    }
];

const IntroStats: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState(STATS.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const intervalTime = duration / steps;

        const timers = STATS.map((stat, index) => {
            let currentStep = 0;
            return setInterval(() => {
                currentStep++;
                if (currentStep <= steps) {
                    setCounts(prev => {
                        const newCounts = [...prev];
                        // Easing function for smooth animation
                        const progress = currentStep / steps;
                        const easeOutQuad = (t: number) => t * (2 - t);

                        newCounts[index] = Math.floor(stat.value * easeOutQuad(progress));
                        return newCounts;
                    });
                } else {
                    // Ensure final value is exact
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = stat.value;
                        return newCounts;
                    });
                    clearInterval(timers[index]);
                }
            }, intervalTime);
        });

        return () => timers.forEach(clearInterval);
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-white text-gray-900 relative overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Header Content */}
                <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-block bg-orange-50 border border-orange-100 px-4 py-1 rounded-full mb-6">
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-orange-600 font-heading">
                                Specialisti Rope Access Emilia-Romagna
                            </span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-heading uppercase leading-tight mb-6 text-gray-900">
                        Lavori Edili in Quota <br />
                        <span className="text-orange-500">Tecnica su Funi</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                        La nostra specializzazione in <strong>edilizia acrobatica</strong> ci permette di offrire interventi rapidi ed efficaci senza l'uso di ponteggi.
                        Garantiamo la massima sicurezza e un notevole risparmio sui costi di occupazione suolo pubblico.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#preventivo"
                            className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 uppercase tracking-wide"
                        >
                            Prenota il tuo preventivo
                        </a>
                        <a
                            href="#servizi"
                            className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-200 font-bold rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors uppercase tracking-wide"
                        >
                            Scopri i nostri servizi
                        </a>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STATS.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`
                relative group p-8 rounded-2xl border border-gray-200 hover:border-orange-500 
                transition-all duration-500 transform hover:-translate-y-2
                ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                shadow-sm hover:shadow-xl
              `}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                                {stat.icon}
                            </div>

                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div className="mb-4">
                                    <span className="inline-block p-3 rounded-lg bg-orange-100 text-orange-500 mb-4">
                                        {stat.icon}
                                    </span>
                                </div>

                                <div>
                                    <div className="flex items-baseline space-x-1 mb-2">
                                        <span className="text-5xl font-bold font-heading text-gray-900">
                                            {counts[index]}
                                        </span>
                                        <span className="text-3xl font-bold text-orange-500">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-br-xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntroStats;


import React, { useEffect, useRef } from 'react';

const badges = [
    {
        icon: '🏅',
        title: 'IRATA',
        subtitle: 'CERTIFICATI',
        description: 'Operatori con certificazione internazionale IRATA Rope Access',
    },
    {
        icon: '🛡️',
        title: 'FISAT',
        subtitle: 'FORMAZIONE',
        description: 'Attestati Federazione Italiana Accesso e Lavori su Funi',
    },
    {
        icon: '⚖️',
        title: 'D.LGS 81/08',
        subtitle: 'CONFORMITÀ',
        description: 'Rispetto normativa D.Lgs 81/08 Sicurezza sul Lavoro',
    },
    {
        icon: '🔒',
        title: 'RC 2M€',
        subtitle: 'ASSICURAZIONE',
        description: 'Responsabilità Civile 2.000.000€ — Tutti i lavori coperti',
    },
];

const safetyColumns = [
    {
        icon: '🧰',
        title: 'ATTREZZATURA CERTIFICATA',
        items: [
            'Funi omologate EN 1891',
            'Imbracature professionali',
            'Moschettoni certificati CE',
            'Dispositivi anticaduta',
            'Controlli periodici obbligatori',
        ],
    },
    {
        icon: '📚',
        title: 'FORMAZIONE CONTINUA',
        items: [
            'Corsi IRATA/FISAT regolari',
            'Aggiornamenti normativi',
            'Training interno mensile',
            'Simulazioni emergenze',
            'Certificati sempre validi',
        ],
    },
    {
        icon: '✓',
        title: 'PROCEDURE RIGOROSE',
        items: [
            'Piano sicurezza per ogni lavoro',
            'Doppia verifica attrezzature',
            'Comunicazione radio costante',
            'Soccorso e primo soccorso',
            'Documentazione completa',
        ],
    },
];

const Certifications: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animItems = section.querySelectorAll('.cert-anim');
                        animItems.forEach((item, index) => {
                            setTimeout(() => {
                                (item as HTMLElement).style.opacity = '1';
                                (item as HTMLElement).style.transform = 'translateY(0)';
                            }, index * 100);
                        });
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
        <section id="certificazioni" className="py-24 bg-pattern-dots relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 cert-anim" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Certificazioni e Sicurezza</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">La Tua Garanzia di Professionalità</h3>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 leading-relaxed">
                        Operiamo secondo le più rigide normative di sicurezza. Ogni nostro operatore è certificato e ogni intervento è coperto da assicurazione.
                    </p>
                </div>

                {/* Certification Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="cert-anim bg-white rounded-2xl p-6 border-2 border-gray-900 text-center hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 group cursor-default"
                            style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease-out ${0.1 + index * 0.1}s` }}
                        >
                            <span className="text-5xl block mb-3">{badge.icon}</span>
                            <h4 className="font-bold text-lg font-heading text-gray-900 mb-1">{badge.title}</h4>
                            <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-3">{badge.subtitle}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{badge.description}</p>
                        </div>
                    ))}
                </div>

                {/* Safety Section */}
                <div className="max-w-5xl mx-auto">
                    <h4 className="text-center text-2xl font-bold font-heading mb-10 cert-anim" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out 0.5s' }}>
                        Il Nostro Impegno per la Sicurezza
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {safetyColumns.map((col, index) => (
                            <div
                                key={index}
                                className="cert-anim bg-gray-50 rounded-2xl p-6"
                                style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease-out ${0.6 + index * 0.1}s` }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{col.icon}</span>
                                    <h5 className="font-bold text-sm font-heading text-gray-900">{col.title}</h5>
                                </div>
                                <ul className="space-y-2">
                                    {col.items.map((item, i) => (
                                        <li key={i} className="text-gray-600 text-sm flex items-start">
                                            <span className="text-orange-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

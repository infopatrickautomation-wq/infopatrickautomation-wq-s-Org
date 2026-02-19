import React, { useEffect, useRef } from 'react';

const certifications = [
    {
        icon: '🏗️',
        title: 'CQOP SOA',
        subtitle: 'QUALIFICAZIONE',
        description: 'Costruttori Qualificati Opere Pubbliche',
        color: 'border-blue-200'
    },
    {
        icon: '🔄',
        title: 'ISO 9001:2015',
        subtitle: 'QUALITÀ',
        description: 'Quality Management System',
        color: 'border-blue-400'
    },
    {
        icon: '🌿',
        title: 'ISO 14001:2015',
        subtitle: 'AMBIENTE',
        description: 'Environmental Management System',
        color: 'border-green-400'
    },
    {
        icon: '👷',
        title: 'ISO 45001:2018',
        subtitle: 'SICUREZZA',
        description: 'Occupational Health and Safety',
        color: 'border-orange-400'
    },
    {
        icon: '🏆',
        title: 'CASSA EDILE',
        subtitle: 'AWARDS 2023',
        description: 'Riconoscimento operosità e correttezza',
        color: 'border-yellow-500'
    },
    {
        icon: '🥇',
        title: 'CASSA EDILE',
        subtitle: 'AWARDS 2024',
        description: 'Eccellenza nel settore edile',
        color: 'border-red-500'
    }
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
    return (
        <section id="certificazioni" className="py-24 bg-white relative overflow-hidden">

            {/* CSS for Marquee Animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-250px * 6 - 3rem * 6)); } /* Adjust based on card width + gap * count */
                } 
                /* To scroll continuously, we likely need to duplicate items and simple translate */
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 30s linear infinite;
                }
                .pause-on-hover:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto px-4 mb-20">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Le Nostre Certificazioni</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Eccellenza e Sicurezza Certificate</h3>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
                </div>

                {/* Infinite Scroll Marquee */}
                <div className="relative w-full overflow-hidden pause-on-hover bg-white/50 backdrop-blur-sm py-10">
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                    <div className="animate-marquee flex gap-12 items-center">
                        {/* First Set */}
                        {certifications.map((cert, index) => (
                            <CertificationCard key={`c1-${index}`} cert={cert} />
                        ))}
                        {/* Duplicate Set for Loop */}
                        {certifications.map((cert, index) => (
                            <CertificationCard key={`c2-${index}`} cert={cert} />
                        ))}
                        {/* Triplicate Set for smooth wide screens */}
                        {certifications.map((cert, index) => (
                            <CertificationCard key={`c3-${index}`} cert={cert} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Safety Section (Kept as requested context) */}
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h4 className="text-center text-2xl font-bold font-heading mb-10 text-gray-900">
                        Il Nostro Impegno per la Sicurezza
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {safetyColumns.map((col, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
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

const CertificationCard = ({ cert }: { cert: any }) => (
    <div className={`
        flex-shrink-0 w-[280px] h-[320px] 
        bg-white/80 backdrop-blur-md 
        border border-gray-200 ${cert.color} border-t-4
        rounded-xl shadow-lg hover:shadow-2xl 
        flex flex-col items-center justify-center text-center p-6 
        transition-all duration-300 transform hover:-translate-y-2
        group
    `}>
        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100">
            {cert.icon}
        </div>
        <h4 className="font-bold text-xl font-heading text-gray-800 mb-1">{cert.title}</h4>
        <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-4">{cert.subtitle}</p>
        <p className="text-gray-500 text-sm leading-relaxed">{cert.description}</p>
    </div>
);

export default Certifications;

import React from 'react';
import { Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

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
        icon: <Briefcase className="w-10 h-10" />,
        title: 'ATTREZZATURA CERTIFICATA',
        items: [
            'Funi omologate <strong class="text-orange-500">EN 1891</strong>',
            'Imbracature professionali',
            'Moschettoni certificati <strong class="text-orange-500">CE</strong>',
            'Dispositivi anticaduta',
            'Controlli periodici obbligatori',
        ],
    },
    {
        icon: <GraduationCap className="w-10 h-10" />,
        title: 'FORMAZIONE CONTINUA',
        isMain: true,
        items: [
            'Corsi <strong class="text-orange-500">IRATA/FISAT</strong> regolari',
            'Aggiornamenti normativi',
            'Training interno mensile',
            'Simulazioni emergenze',
            'Certificati sempre validi',
        ],
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: 'PROCEDURE RIGOROSE',
        items: [
            'Piano sicurezza per ogni lavoro',
            'Doppia verifica attrezzature',
            'Comunicazione radio costante',
            'Soccorso e primo soccorso',
            '<strong class="text-orange-500">Documentazione completa</strong>',
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
                    100% { transform: translateX(calc(-250px * 6 - 3rem * 6)); }
                } 
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 30s linear infinite;
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
                <div className="relative w-full overflow-hidden bg-white/50 backdrop-blur-sm py-10">
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

            {/* Safety Section - High-Tech Industrial Redesign */}
            <div className="bg-[#1C1F26] py-24 mt-20 -mx-4 px-4 w-full">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <h4 className="text-center text-3xl font-bold font-heading mb-16 text-white tracking-widest uppercase">
                            Il Nostro Impegno per la Sicurezza
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {safetyColumns.map((col, index) => (
                                <div
                                    key={index}
                                    className={`
                                        group relative p-8 rounded-lg transition-all duration-300
                                        bg-[#252830] border
                                        ${col.isMain
                                            ? 'border-orange-500 border-2 shadow-[0_0_20px_rgba(255,107,0,0.15)] bg-gradient-to-b from-black/40 to-[#252830]'
                                            : 'border-gray-700 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]'
                                        }
                                    `}
                                >
                                    <div className="flex items-center mb-6">
                                        <span className={`text-orange-500 transition-transform duration-300 group-hover:scale-110`}>
                                            {col.icon}
                                        </span>
                                        <h5 className="font-bold text-xl font-heading text-white tracking-wide ml-4">{col.title}</h5>
                                    </div>
                                    <ul className="space-y-4">
                                        {col.items.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-start leading-relaxed">
                                                <span className="text-orange-500 mr-3 mt-1.5 flex-shrink-0 text-[10px]">■</span>
                                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
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

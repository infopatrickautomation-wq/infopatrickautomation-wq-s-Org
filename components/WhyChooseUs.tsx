
import React, { useEffect, useRef } from 'react';

const comparisonData = [
    {
        category: '💰 COSTI',
        ropeAccess: 'Risparmio 40-60%',
        traditional: 'Costi standard + extra noleggio',
    },
    {
        category: '⏱️ TEMPI',
        ropeAccess: 'Setup: 1-2 ore — Intervento rapido',
        traditional: 'Setup: 2-5 giorni — Intervento lungo',
    },
    {
        category: '📦 INGOMBRO',
        ropeAccess: 'Zero impatto visivo. Niente occupazione suolo pubblico',
        traditional: 'Strutture ingombranti, blocca strade/marciapiedi. Permessi comunali necessari',
    },
    {
        category: '🎯 ACCESSO',
        ropeAccess: 'Qualsiasi punto, anche angoli difficili',
        traditional: 'Limitato a dove arriva il ponteggio',
    },
    {
        category: '🔒 SICUREZZA',
        ropeAccess: 'Doppia fune sempre. Operatori certificati IRATA/FISAT',
        traditional: 'Rischio cadute da ponteggio. Standard variabili',
    },
    {
        category: '🌱 AMBIENTE',
        ropeAccess: 'Zero emissioni aggiuntive. Ecosostenibile',
        traditional: 'Trasporti pesanti inquinanti. Impatto ambientale alto',
    },
    {
        category: '📋 BUROCRAZIA',
        ropeAccess: 'Minima. Procedure snelle',
        traditional: 'Permessi, notifiche, SCIA. Iter complessi',
    },
];

const benefitCards = [
    {
        icon: '💰',
        title: 'RISPARMIO GARANTITO',
        description: 'Riduci i costi fino al 60% rispetto ai ponteggi tradizionali. Niente noleggio strutture, niente trasporti, niente permessi.',
    },
    {
        icon: '⚡',
        title: 'VELOCITÀ ESTREMA',
        description: 'Setup in 1-2 ore invece di giorni. Lavori completati in metà tempo. Zero interruzioni per te e i tuoi vicini.',
    },
    {
        icon: '🎯',
        title: 'MASSIMA FLESSIBILITÀ',
        description: 'Raggiungiamo qualsiasi punto, anche angoli impossibili. Lavoriamo su edifici di qualsiasi altezza.',
    },
];

const WhyChooseUs: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animItems = section.querySelectorAll('.anim-item');
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
        <section id="perche-sceglierci" className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 anim-item" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Perché Sceglierci</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">Perché Scegliere Vertical System</h3>
                    <p className="text-lg text-gray-500 mb-2 font-semibold">Rope Access: La Soluzione Moderna per Lavori in Quota</p>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 leading-relaxed">
                        La tecnica su funi (rope access) è il metodo più sicuro, veloce ed economico per interventi in altezza. Niente ponteggi, niente piattaforme aeree, niente complicazioni.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="anim-item max-w-5xl mx-auto mb-16" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out 0.1s' }}>
                    {/* Table Header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-t-3xl overflow-hidden">
                        <div className="bg-green-800 text-white p-5 text-center">
                            <span className="text-2xl mr-2">🎯</span>
                            <span className="font-bold text-lg font-heading">ROPE ACCESS</span>
                            <p className="text-green-200 text-sm mt-1">La Nostra Tecnica</p>
                        </div>
                        <div className="bg-gray-600 text-white p-5 text-center">
                            <span className="text-2xl mr-2">🏗️</span>
                            <span className="font-bold text-lg font-heading">PONTEGGI TRADIZIONALI</span>
                            <p className="text-gray-300 text-sm mt-1">Metodo Vecchio</p>
                        </div>
                    </div>

                    {/* Table Rows */}
                    {comparisonData.map((row, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-gray-200 last:rounded-b-3xl overflow-hidden">
                            <div className="bg-green-50 p-5 border-r border-gray-200">
                                <p className="font-bold text-sm text-green-800 mb-1">{row.category}</p>
                                <p className="text-gray-800 text-sm leading-relaxed">{row.ropeAccess}</p>
                            </div>
                            <div className="bg-gray-50 p-5">
                                <p className="font-bold text-sm text-gray-500 mb-1 md:hidden">{row.category}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{row.traditional}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {benefitCards.map((card, index) => (
                        <div
                            key={index}
                            className="anim-item bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                            style={{
                                opacity: 0,
                                transform: 'translateY(30px)',
                                transition: `all 0.6s ease-out ${0.2 + index * 0.1}s`,
                                borderTop: '4px solid #FF8C00',
                            }}
                        >
                            <span className="text-5xl block mb-4">{card.icon}</span>
                            <h4 className="font-bold text-lg mb-3 font-heading text-gray-900">{card.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

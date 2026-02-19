
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
                        const animItems = section.querySelectorAll('.anim-item, .fade-in, .fade-in-delay-1, .fade-in-delay-2');
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
        <section id="why-choose-us" className="py-24 bg-[#1C1F26] text-white relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Perché Scegliere <span className="text-brand">Vertical System</span></h2>
                    <p className="text-xl text-gray-300 font-light">
                        Il metodo Rope Access offre vantaggi impareggiabili rispetto ai ponteggi tradizionali.
                        Efficienza, risparmio e sicurezza senza compromessi.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-[#2D3748] rounded-3xl p-8 md:p-12 shadow-2xl mb-20 fade-in-delay-1 border border-gray-700" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out 0.2s' }}>
                    <h3 className="text-2xl font-bold mb-8 text-center font-heading">Confronto Diretto</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-600">
                                    <th className="py-4 px-6 text-gray-400 font-medium uppercase tracking-wider w-1/3">Caratteristica</th>
                                    <th className="py-4 px-6 text-brand font-bold text-lg w-1/3">Rope Access</th>
                                    <th className="py-4 px-6 text-gray-500 font-medium w-1/3">Ponteggi Tradizionali</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-6 font-medium">Costi di Allestimento</td>
                                    <td className="py-6 px-6 text-green-400 font-bold">Zero (Nessun ponteggio)</td>
                                    <td className="py-6 px-6 text-gray-400">Elevati (Montaggio/Smontaggio)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-6 font-medium">Tempi di Intervento</td>
                                    <td className="py-6 px-6 text-green-400 font-bold">Immediati (Operativi in 1h)</td>
                                    <td className="py-6 px-6 text-gray-400">Lunghi (Giorni di preparazione)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-6 font-medium">Impatto Visivo</td>
                                    <td className="py-6 px-6 text-green-400 font-bold">Invisibile</td>
                                    <td className="py-6 px-6 text-gray-400">Ingombrante e antiestetico</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-6 font-medium">Sicurezza Furti</td>
                                    <td className="py-6 px-6 text-green-400 font-bold">Massima (Nessun accesso)</td>
                                    <td className="py-6 px-6 text-gray-400">Rischio (Facilita l'accesso)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-6 font-medium">Permessi Suolo Pubblico</td>
                                    <td className="py-6 px-6 text-green-400 font-bold">Non Necessari</td>
                                    <td className="py-6 px-6 text-gray-400">Obbligatori e Costosi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8 fade-in-delay-2" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out 0.4s' }}>
                    <div className="bg-[#2D3748] p-8 rounded-3xl border border-gray-700 hover:border-brand/50 transition-all duration-300 group hover:-translate-y-2">
                        <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Risparmio al 40%</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Abbattiamo i costi fissi del cantiere. Paghi solo per il lavoro effettivo, non per le strutture di supporto.
                        </p>
                    </div>

                    <div className="bg-[#2D3748] p-8 rounded-3xl border border-gray-700 hover:border-brand/50 transition-all duration-300 group hover:-translate-y-2">
                        <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Intervento Rapido</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Nessun tempo perso per montaggio ponteggi. Arriviamo, ci caliamo, lavoriamo. Ideale per urgenze.
                        </p>
                    </div>

                    <div className="bg-[#2D3748] p-8 rounded-3xl border border-gray-700 hover:border-brand/50 transition-all duration-300 group hover:-translate-y-2">
                        <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Zero Intrusioni</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Nessuna impalcatura davanti alle finestre. Privacy garantita e nessun rischio di furti agevolati dai ponteggi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyChooseUs;

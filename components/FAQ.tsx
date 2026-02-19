
import React, { useState, useEffect, useRef } from 'react';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: 'I lavori su funi sono sicuri?',
        answer: (
            <div>
                <p className="mb-2">
                    Assolutamente sì! La tecnica rope access è <strong>MOLTO PIÙ SICURA</strong> dei ponteggi tradizionali.
                </p>
                <ul className="space-y-1">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Ogni operatore usa doppia fune di sicurezza indipendente</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Operatori certificati IRATA/FISAT</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Procedure rigorose e standardizzate</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Statisticamente meno incidenti rispetto ai ponteggi</li>
                </ul>
            </div>
        ),
    },
    {
        question: 'Quanto costano i lavori su funi rispetto ai ponteggi?',
        answer: (
            <div>
                <p className="mb-2">
                    I lavori su funi costano <strong>40-60% IN MENO</strong> rispetto ai metodi tradizionali. Il risparmio deriva da:
                </p>
                <ul className="space-y-1">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Niente noleggio ponteggi (700-2000€/mese)</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Setup rapidissimo (ore invece di giorni)</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Meno manodopera necessaria</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Niente permessi comunali</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Niente trasporti pesanti</li>
                </ul>
            </div>
        ),
    },
    {
        question: 'Quanto tempo serve per completare un lavoro?',
        answer: (
            <div>
                <p className="mb-2">
                    I tempi sono ridotti del <strong>50-70%</strong> rispetto ai ponteggi! Esempi:
                </p>
                <ul className="space-y-1 mb-2">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Tinteggiatura facciata 3 piani: 2-3 giorni</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Riparazione grondaie: Mezza giornata</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Impermeabilizzazione balcone: 1 giorno</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Installazione linea vita: 3-4 ore</li>
                </ul>
                <p className="text-sm font-bold text-gray-800">Setup: 1-2 ore invece di 2-5 giorni per ponteggi.</p>
            </div>
        ),
    },
    {
        question: 'Servono permessi o autorizzazioni?',
        answer: (
            <div>
                <p className="mb-2">
                    Molto <strong>MENO burocrazia</strong> rispetto ai ponteggi! Con rope access:
                </p>
                <ul className="space-y-1 mb-2">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Niente occupazione suolo pubblico</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Niente permessi comunali nella maggior parte dei casi</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Niente notifiche preventive complesse</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Procedure amministrative semplificate</li>
                </ul>
                <p className="text-sm text-gray-600">Ci occupiamo noi di tutta la documentazione necessaria.</p>
            </div>
        ),
    },
    {
        question: 'Quali altezze riuscite a raggiungere?',
        answer: (
            <div>
                <p className="mb-2">
                    <strong>QUALSIASI altezza!</strong> Non ci sono limiti.
                </p>
                <ul className="space-y-1 mb-2">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Villette 1-2 piani</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Condomini 3-10 piani</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Edifici alti 10-20 piani</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Grattacieli oltre 50 metri</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Torri, ciminiere, campanili</li>
                </ul>
                <p className="text-sm text-gray-600">La tecnica rope access è usata anche su ponti, dighe e strutture industriali oltre i 200 metri.</p>
            </div>
        ),
    },
    {
        question: 'Lavorate con qualsiasi condizione meteo?',
        answer: (
            <div>
                <p className="mb-2">
                    Lavoriamo con condizioni meteo normali.
                </p>
                <p className="font-bold text-sm mb-1 text-green-700">Interveniamo con:</p>
                <ul className="space-y-1 mb-3">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Cielo sereno o nuvoloso</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Vento leggero-moderato</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Temperature da -5°C a +40°C</li>
                </ul>
                <p className="font-bold text-sm mb-1 text-red-600">NON lavoriamo con:</p>
                <ul className="space-y-1 mb-2">
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Pioggia intensa</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Vento forte (oltre 40 km/h)</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Ghiaccio/neve</li>
                </ul>
                <p className="text-sm font-bold text-gray-800">Sicurezza prima di tutto!</p>
            </div>
        ),
    },
    {
        question: 'Quali zone coprite?',
        answer: (
            <div>
                <p className="mb-2">Operiamo principalmente in:</p>
                <ul className="space-y-1 mb-2">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> <strong>Emilia-Romagna</strong> (tutte le province)</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> <strong>Ferrara e provincia</strong> (sede ad Altedo)</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Bologna, Modena, Ravenna, Reggio Emilia</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Zone limitrofe Veneto e Lombardia</li>
                </ul>
                <p className="text-sm text-gray-800 font-bold mb-1">📍 Sede operativa: Altedo (FE)</p>
                <p className="text-sm text-gray-600">Per interventi fuori zona, contattaci: valutiamo caso per caso.</p>
            </div>
        ),
    },
    {
        question: 'Offrite garanzia sui lavori?',
        answer: (
            <div>
                <p className="mb-2">
                    <strong>SÌ!</strong> Tutti i nostri lavori sono garantiti.
                </p>
                <ul className="space-y-1 mb-2">
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Garanzia sui materiali (secondo produttore)</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Garanzia sulla manodopera (1-2 anni)</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Assicurazione RC 2.000.000€</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Documentazione fotografica pre/post</li>
                    <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span> Certificati di conformità</li>
                </ul>
                <p className="text-sm text-gray-600">Dopo il lavoro, rimaniamo disponibili per qualsiasi esigenza.</p>
            </div>
        ),
    },
];

const FAQAccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<string>(isOpen ? '1000px' : '0px');

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight + 40}px`);
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                className="w-full text-left p-5 md:p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={onToggle}
            >
                <span className="flex items-center font-bold text-gray-900 text-sm md:text-base pr-4">
                    <span className="text-orange-500 mr-3 text-lg">❓</span>
                    {item.question}
                </span>
                <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                style={{ maxHeight, transition: 'max-height 0.4s ease-out' }}
                className="overflow-hidden"
            >
                <div ref={contentRef} className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animItems = section.querySelectorAll('.faq-anim');
                        animItems.forEach((item, index) => {
                            setTimeout(() => {
                                (item as HTMLElement).style.opacity = '1';
                                (item as HTMLElement).style.transform = 'translateY(0)';
                            }, index * 80);
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
        <section id="faq" className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 faq-anim" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">FAQ</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">Domande Frequenti</h3>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 leading-relaxed">
                        Tutto quello che devi sapere sui lavori su funi
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="faq-anim"
                            style={{ opacity: 0, transform: 'translateY(20px)', transition: `all 0.5s ease-out ${0.1 + index * 0.05}s` }}
                        >
                            <FAQAccordionItem
                                item={item}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        </div>
                    ))}
                </div>

                {/* CTA under FAQ */}
                <div className="text-center mt-12 faq-anim" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out 0.8s' }}>
                    <p className="text-gray-600 mb-4">Hai altre domande? Contattaci direttamente!</p>
                    <a
                        href="#preventivo"
                        className="inline-block bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all transform active:scale-95 shadow-xl shadow-orange-500/20 cursor-pointer"
                    >
                        CHIEDI UN PREVENTIVO GRATUITO
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

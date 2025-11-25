import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden bg-white mb-4">
            <button 
                className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={onClick}
            >
                <span className="font-bold text-slate-800 pr-4 text-sm md:text-base">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-rose-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 md:p-5 pt-0 text-slate-600 border-t border-slate-100 mt-2 text-sm md:text-base leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "E se eu errar alguma etapa do processo?",
            a: "O curso foi pensado exatamente para isso. Cada etapa tem checklist, modelos prontos e instruções claras para evitar erros. E se ainda assim você tiver dúvida, o suporte no WhatsApp está disponível para te orientar."
        },
        {
            q: "Já estou casada há um tempo. Ainda faz sentido pra mim?",
            a: "Sim! Mesmo que você já tenha se casado, o processo pode ser iniciado. O conteúdo é válido para quem está em qualquer fase — do início ao envio e entrevista."
        },
        {
            q: "É seguro fazer o processo sem advogado?",
            a: "Com o conhecimento certo, sim. O método ensinado aqui é o mesmo usado na assessoria da Gleice, com 100% de aprovação. A ideia é te dar autonomia com segurança."
        },
        {
            q: "Tenho medo de montar tudo sozinha e ser negada.",
            a: "Esse medo é comum, mas é justamente por isso que o curso existe. Ele transforma um processo confuso em algo didático, passo a passo. Com clareza, o medo diminui e a confiança aumenta."
        }
    ];

    const handleBuy = () => {
        window.open('https://pay.hotmart.com/B102826055T?checkoutMode=10', '_blank');
    };

    const handleWhatsapp = () => {
        window.open('https://wa.me/15106305617?text=Quero%20tirar%20duvida%20sobre%20o%20green%20card%20por%20casamento', '_blank');
    };

    return (
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900">FAQ — Perguntas Frequentes</h2>
                </div>

                <div className="mb-10 md:mb-12">
                    {faqs.map((faq, idx) => (
                        <FAQItem 
                            key={idx} 
                            question={faq.q} 
                            answer={faq.a} 
                            isOpen={openIndex === idx} 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <Button onClick={handleBuy} className="w-full md:w-auto px-10">Quero aplicar agora com clareza e segurança</Button>
                    <Button 
                        onClick={handleWhatsapp} 
                        variant="outline" 
                        className="w-full md:w-auto px-10"
                    >
                        Quero tirar dúvida pelo whatsapp
                    </Button>
                </div>
            </div>
        </section>
    );
};
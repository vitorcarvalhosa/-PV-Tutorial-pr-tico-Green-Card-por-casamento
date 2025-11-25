import React from 'react';
import { Button } from './Button';
import { PaymentIcons } from './PaymentIcons';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
    const handleWhatsapp = () => {
        window.open('https://wa.me/15106305617?text=Quero%20tirar%20duvida%20sobre%20o%20green%20card%20por%20casamento', '_blank');
    };

    const handleBuy = () => {
        window.open('https://pay.hotmart.com/B102826055T?checkoutMode=10', '_blank');
    }

  return (
    <section id="pricing" className="py-12 md:py-20 bg-rose-50">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-rose-100 transform transition-all hover:scale-[1.01] duration-500">
            <div className="bg-rose-900 text-white p-4 md:p-6 text-center">
                <h2 className="text-xl md:text-2xl font-bold">Acesso Total Green Card Simplificado</h2>
                <p className="text-rose-200 text-xs md:text-sm mt-1">Oferta por tempo limitado</p>
            </div>
            
            <div className="p-6 md:p-12 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                
                {/* Left Side: Summary */}
                <div className="space-y-4">
                    <div className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wide">Você vai levar:</div>
                    <ul className="space-y-3">
                        {[
                            { name: "Curso Etapa 1: Documentação", price: "$97" },
                            { name: "Curso Etapa 2: Montagem/Envio", price: "$297" },
                            { name: "Curso Etapa 3: Entrevista", price: "$197" },
                            { name: "Sessão de Consultoria", price: "$197" },
                            { name: "Suporte por WhatsApp", price: "$47" },
                        ].map((item, idx) => (
                            <li key={idx} className="flex justify-between items-center text-xs md:text-sm border-b border-dashed border-slate-100 pb-2 last:border-0">
                                <span className="text-slate-600 flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500 shrink-0" /> {item.name}</span>
                                <span className="text-slate-400 line-through shrink-0">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center pt-4 font-bold text-slate-800 text-sm md:text-base">
                        <span>Valor total:</span>
                        <span className="text-lg line-through text-red-400">$835</span>
                    </div>
                </div>

                {/* Right Side: Price */}
                <div className="text-center bg-rose-50/50 p-6 rounded-xl border border-rose-100">
                    <p className="text-slate-500 mb-2 font-medium text-sm md:text-base">Hoje você garante tudo por apenas:</p>
                    <div className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-2 tracking-tight">
                        $47
                    </div>
                    <p className="text-slate-600 text-sm mb-6">ou 12x de $4,70</p>
                    
                    <Button onClick={handleBuy} fullWidth className="shadow-emerald-500/30 text-base md:text-lg mb-4 py-3 md:py-4">
                        Quero aplicar agora!
                    </Button>
                    
                    <PaymentIcons />
                </div>
            </div>

            <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                 <Button 
                    variant="outline"
                    onClick={handleWhatsapp} 
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-base"
                 >
                    Ainda tenho dúvidas, quero falar no WhatsApp
                 </Button>
            </div>
        </div>

      </div>
    </section>
  );
};
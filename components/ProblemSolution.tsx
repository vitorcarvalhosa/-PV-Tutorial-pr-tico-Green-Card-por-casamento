import React from 'react';
import { FileCheck, AlertCircle, CheckSquare, Layers } from 'lucide-react';
import { Button } from './Button';
import { PaymentIcons } from './PaymentIcons';

export const ProblemSolution: React.FC = () => {
   const handleBuy = () => {
    window.open('https://pay.hotmart.com/B102826055T?checkoutMode=10', '_blank');
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/15106305617?text=Quero%20tirar%20duvida%20sobre%20o%20green%20card%20por%20casamento', '_blank');
  };

  return (
    <section className="py-8 md:py-20 bg-white text-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 relative z-20 order-2 md:order-1 pt-6 md:pt-0">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                Sinta o alívio de saber <br className="hidden md:block"/>
                <span className="text-rose-900">exatamente o que fazer</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Chega de dúvidas e informações soltas. Com nossos checklists e arquivos prontos, você organiza todo o seu processo de Green Card com confiança, evita esquecimentos e envia tudo do jeito certo para a imigração (USCIS).
                </p>
            </div>

            <ul className="space-y-3 md:space-y-4">
                <li className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-rose-200 transition-colors">
                    <div className="bg-rose-100 p-2 rounded-full h-fit shrink-0">
                        <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-rose-800" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm md:text-base">Checklists prontos e editáveis</h3>
                        <p className="text-xs md:text-sm text-slate-600">Para cada etapa do processo, garantindo que nenhum formulário ou evidência fique para trás.</p>
                    </div>
                </li>
                <li className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-rose-200 transition-colors">
                    <div className="bg-rose-100 p-2 rounded-full h-fit shrink-0">
                        <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-rose-800" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm md:text-base">Modelos atualizados</h3>
                        <p className="text-xs md:text-sm text-slate-600">Documentos conforme os padrões mais recentes da imigração americana (USCIS).</p>
                    </div>
                </li>
                <li className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-rose-200 transition-colors">
                    <div className="bg-rose-100 p-2 rounded-full h-fit shrink-0">
                        <Layers className="w-5 h-5 md:w-6 md:h-6 text-rose-800" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm md:text-base">Organização clara</h3>
                        <p className="text-xs md:text-sm text-slate-600">Veja visualmente o que falta e o que já está pronto no seu processo de ajuste de status.</p>
                    </div>
                </li>
            </ul>

            <div className="pt-4 flex flex-col gap-3">
                <Button onClick={handleBuy} fullWidth className="md:w-auto shadow-emerald-500/20 text-base py-4">
                    Quero aplicar com Clareza e Segurança!
                </Button>
                
                <Button 
                    onClick={handleWhatsapp} 
                    variant="outline"
                    fullWidth 
                    className="md:w-auto text-base py-4"
                >
                    Quero tirar dúvida pelo whatsapp
                </Button>

                <div className="mt-2 flex justify-center md:justify-start">
                    <PaymentIcons />
                </div>
            </div>
          </div>

          {/* Visual Mockup Side */}
          <div className="relative flex justify-center items-center order-1 md:order-2 mb-0 md:mb-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-slate-100 rounded-2xl transform rotate-3 scale-110 md:scale-150 -z-10 opacity-50"></div>
             <img 
                src="https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Mockup-arquivos.webp"
                alt="Kit completo de documentos e checklists para Green Card por Casamento"
                title="Materiais do Green Card Simplificado"
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full scale-[1.35] md:scale-[1.8] max-w-none h-auto object-contain drop-shadow-2xl hover:scale-[1.05] md:hover:scale-[1.85] transition-transform duration-500 origin-center"
             />
          </div>

        </div>
      </div>
    </section>
  );
};
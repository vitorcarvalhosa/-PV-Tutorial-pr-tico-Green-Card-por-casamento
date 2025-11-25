import React from 'react';
import { Button } from './Button';
import { CheckCircle, ShieldCheck, PlayCircle, MessageCircle } from 'lucide-react';
import { PaymentIcons } from './PaymentIcons';

export const Hero: React.FC = () => {
  const handleBuy = () => {
    window.open('https://pay.hotmart.com/B102826055T?checkoutMode=10', '_blank');
  };
  
  const handleWhatsapp = () => {
    window.open('https://wa.me/15106305617?text=Quero%20tirar%20duvida%20sobre%20o%20green%20card%20por%20casamento', '_blank');
  };

  return (
    <section className="relative bg-rose-950 text-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Headline */}
        <div className="text-center mb-8 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-900/50 text-rose-200 text-xs md:text-sm font-semibold tracking-wide border border-rose-500/30 mb-2">
            MÉTODO VALIDADO
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Seu Green Card por casamento, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-white">
              do jeito certo e simples.
            </span>
          </h1>
          <p className="text-base md:text-xl text-rose-100/80 max-w-3xl mx-auto font-light leading-relaxed">
            Você não precisa mais depender de advogado nem de vídeos soltos na internet. 
            Descubra como aplicar seu green card por casamento com um método validado, simples e acessível.
          </p>
        </div>

        {/* Video Bullets (Moved above video, vertical list) */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3 mb-8 text-sm md:text-lg text-rose-100/90">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 mt-0.5" />
            <p>Por que o green card por casamento é uma das formas mais acessíveis (e mal aproveitadas) de conseguir o documento</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 mt-0.5" />
            <p>O erro mais comum que atrasa ou faz processos voltarem — e como evitar isso</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 mt-0.5" />
            <p>Como aplicar com segurança, mesmo sem ter experiência e mesmo fazendo tudo sozinha</p>
          </div>
        </div>

        {/* Video Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-rose-900 mb-10 aspect-video">
           <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/nkpXAkHCN9c?si=s5qLibIbp6ivHrK7" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full md:w-auto">
            <Button onClick={handleBuy} className="text-lg md:text-xl px-6 py-4 md:px-10 md:py-5 w-full md:w-auto shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-shadow">
                Quero aplicar com Clareza e Segurança!
            </Button>
          </div>
          
          <PaymentIcons />

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-sm text-white mt-2 px-2 font-medium">
            <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3 md:w-4 md:h-4" /> <span className="text-white">Aulas completas</span></span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 md:w-4 md:h-4" /> <span className="text-white">Checklists exclusivos</span></span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3 md:w-4 md:h-4" /> <span className="text-white">Consultoria individual</span></span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">⚡ <span className="text-white">Acesso imediato</span></span>
          </div>

           {/* WhatsApp Button (Moved below features) */}
          <div className="mt-4 w-full md:w-auto">
             <Button 
                onClick={handleWhatsapp} 
                variant="outline"
                className="text-lg md:text-xl px-6 py-4 md:px-10 md:py-5 w-full md:w-auto border-emerald-400 text-emerald-400 hover:bg-emerald-900/20 hover:text-emerald-300 hover:border-emerald-300"
            >
                Quero tirar dúvida no WhatsApp
            </Button>
          </div>
        </div>

      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-800/20 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};
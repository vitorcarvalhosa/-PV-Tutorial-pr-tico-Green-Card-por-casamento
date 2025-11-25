import React from 'react';
import { Search, Send, MessageSquare } from 'lucide-react';
import { PaymentIcons } from './PaymentIcons';

export const Steps: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Veja como aplicar para o seu Green Card <br/>
            <span className="text-rose-900">com mais segurança e menos confusão</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Um passo a passo validado com mais de 100 mulheres que te leva do zero à aprovação, sem complicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-rose-100 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:border-rose-500 transition-colors duration-300">
                <Search className="w-8 h-8 md:w-10 md:h-10 text-rose-800" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">1. Entenda o que precisa</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Descubra quais formulários, documentos e evidências são exigidos para comprovar o relacionamento.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-rose-100 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:border-rose-500 transition-colors duration-300">
                <Send className="w-8 h-8 md:w-10 md:h-10 text-rose-800" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">2. Monte e envie</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Siga o passo a passo para organizar, revisar e enviar tudo de forma correta e dentro dos padrões da imigração.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-rose-100 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:border-rose-500 transition-colors duration-300">
                <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-rose-800" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">3. Prepare-se para a entrevista</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Aprenda como responder com clareza, o que levar e como mostrar que seu relacionamento é real.
            </p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 flex justify-center">
            <PaymentIcons />
        </div>
      </div>
    </section>
  );
};
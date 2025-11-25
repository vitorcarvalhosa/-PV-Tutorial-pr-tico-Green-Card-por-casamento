import React from 'react';
import { Check, FileText, Send, UserCheck, MessageCircle, HelpCircle } from 'lucide-react';

export const OfferStack: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
             <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                Tudo o que você precisa para aplicar com segurança <br/>
                <span className="text-rose-900">— sem depender de ninguém</span>
             </h2>
             <p className="text-sm md:text-base text-slate-600">
                Veja o que você vai receber ao se inscrever no Green Card Simplificado.
             </p>
        </div>

        <div className="space-y-4 md:space-y-6">
            
            {/* Item 1 */}
            <div className="border border-slate-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow bg-slate-50">
                <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-rose-800" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                             <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">Curso Completo - Etapa 1: Checklist e Documentação</h3>
                             <span className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded font-mono w-fit">Valor: $97</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">Descubra quais documentos enviar, como comprovar seu relacionamento e baixe checklists prontos.</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Checklist editável para organizar seu processo</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Explicações claras sobre cada formulário</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Modelos prontos de documentos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Item 2 */}
            <div className="border border-slate-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow bg-slate-50">
                <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Send className="w-5 h-5 md:w-6 md:h-6 text-rose-800" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                             <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">Curso Completo - Etapa 2: Montagem e Envio</h3>
                             <span className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded font-mono w-fit">Valor: $297</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">Aprenda como montar e enviar seu processo como uma profissional.</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>A ordem exata dos documentos</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Modelos prontos de Cover Letter</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* Item 3 */}
             <div className="border border-slate-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow bg-slate-50">
                <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-rose-800" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                             <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">Curso Completo - Etapa 3: Preparação para Entrevista</h3>
                             <span className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded font-mono w-fit">Valor: $197</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">Prepare-se com confiança para a última etapa.</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Lista com mais de 80 perguntas reais</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Roteiro para treinar com seu parceiro</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bonuses */}
             <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-rose-200 bg-rose-50 rounded-xl p-4 md:p-6">
                    <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm md:text-base"><MessageCircle className="w-5 h-5 text-rose-600"/> Consultoria (30 min)</h3>
                         <span className="bg-white text-rose-700 text-[10px] md:text-xs px-2 py-1 rounded font-mono border border-rose-100 shrink-0 ml-2">Valor: $197</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">Tire dúvidas e revise seu processo com a Gleice.</p>
                </div>
                 <div className="border border-rose-200 bg-rose-50 rounded-xl p-4 md:p-6">
                    <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm md:text-base"><HelpCircle className="w-5 h-5 text-rose-600"/> Suporte WhatsApp</h3>
                         <span className="bg-white text-rose-700 text-[10px] md:text-xs px-2 py-1 rounded font-mono border border-rose-100 shrink-0 ml-2">Valor: $47</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">Equipe preparada para responder e orientar.</p>
                </div>
             </div>

        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Button } from './Button';
import { PaymentIcons } from './PaymentIcons';

export const ComparisonTable: React.FC = () => {
  const handleBuy = () => {
    window.open('https://pay.hotmart.com/B102826055T?checkoutMode=10', '_blank');
  };

  const rows = [
    { label: "Clareza no passo a passo", youtube: "❌ Confuso", lawyer: "✅", us: "✅ Completo e didático" },
    { label: "Custo", youtube: "✅ Grátis (mas arriscado)", lawyer: "❌ Muito caro ($5k+)", us: "✅ Acessível: só $47" },
    { label: "Risco de erro", youtube: "❌ Alto", lawyer: "✅ Baixo", us: "✅ Baixo (com suporte)" },
    { label: "Material pronto", youtube: "❌ Não", lawyer: "✅ Sim", us: "✅ Checklists + modelos" },
    { label: "Suporte", youtube: "❌ Nenhum", lawyer: "✅ Sim", us: "✅ WhatsApp exclusivo" },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                Compare e entenda por que o nosso método <span className="text-rose-900">faz mais sentido</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Evite decisões que podem te custar tempo, dinheiro e até a sua aprovação.
            </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200">
            <div className="grid grid-cols-4 bg-slate-900 text-white p-4 items-center text-base">
                <div className="font-bold pl-4">Critério</div>
                <div className="text-center px-2 opacity-80">Sozinha com YouTube</div>
                <div className="text-center px-2 opacity-80">Advogado</div>
                <div className="text-center px-2 font-bold text-rose-200 bg-slate-800 py-2 rounded-t-lg -mb-6 pb-6 z-10 relative shadow-sm">Green Card Simplificado</div>
            </div>

            {/* Rows */}
            {rows.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-4 p-4 items-center text-sm border-b border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <div className="font-semibold text-slate-700 pl-4">{row.label}</div>
                    <div className="text-center text-slate-500 px-2">{row.youtube}</div>
                    <div className="text-center text-slate-500 px-2">{row.lawyer}</div>
                    <div className="text-center font-bold text-emerald-700 px-2 bg-rose-50/50 -my-4 py-6 border-x border-rose-100">{row.us}</div>
                </div>
            ))}
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-6">
            {rows.map((row, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                    <div className="bg-slate-900 text-white p-3 text-center font-bold text-lg">
                        {row.label}
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex justify-between items-center text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <span className="text-slate-500 font-semibold text-xs uppercase tracking-wide">YouTube</span>
                            <span className="text-slate-700 font-medium text-right ml-2 flex-1">{row.youtube}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                             <span className="text-slate-500 font-semibold text-xs uppercase tracking-wide">Advogado</span>
                             <span className="text-slate-700 font-medium text-right ml-2 flex-1">{row.lawyer}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-rose-50 p-4 rounded-lg border border-rose-200 shadow-sm relative overflow-hidden">
                             <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                             <span className="text-rose-900 font-bold text-xs uppercase tracking-wide">Green Card Simplificado</span>
                             <span className="text-emerald-700 font-bold text-right ml-2 flex-1">{row.us}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8 text-center text-slate-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
             <p>Com o <strong>Green Card Simplificado</strong> você tem autonomia, suporte e segurança para aplicar com confiança.</p>
        </div>

        <div className="flex flex-col items-center gap-3">
            <Button onClick={handleBuy} className="shadow-xl w-full md:w-auto py-4">Quero aplicar com Clareza e Segurança!</Button>
            <PaymentIcons />
        </div>
      </div>
    </section>
  );
};

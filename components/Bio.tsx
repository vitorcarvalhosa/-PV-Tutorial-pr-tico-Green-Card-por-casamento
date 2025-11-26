import React from 'react';

export const Bio: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative group max-w-sm mx-auto md:max-w-none">
                    {/* Specific image requested by user */}
                    <img 
                        src="https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Gleice-Perfil.webp" 
                        alt="Gleice Oliveira Especialista em Green Card por Casamento" 
                        title="Gleice Oliveira - Fundadora da RG Forms"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20">
                        <h3 className="text-white font-bold text-xl">Gleice Oliveira</h3>
                        <p className="text-rose-300 text-sm">Fundadora da RG Forms</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">A missão da Gleice</h2>
                <div className="w-20 h-1 bg-rose-700 rounded mx-auto md:mx-0"></div>
                <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                    <p>
                        Gleice Oliveira é fundadora da RG Forms e especialista em processos de <strong className="text-rose-900">green card por casamento</strong>. Com mais de 5 anos de experiência e <strong className="text-rose-700">100% de aprovação</strong> em seus acompanhamentos.
                    </p>
                    <p>
                        Apesar de não ser advogada, sua atuação prática, empática e extremamente organizada tornou seu método referência entre imigrantes brasileiras que querem fazer o processo por conta própria.
                    </p>
                    <p>
                        Sua missão é descomplicar o processo de imigração e empoderar outras mulheres a viverem legalmente nos EUA, com dignidade, tranquilidade e orgulho da própria conquista.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
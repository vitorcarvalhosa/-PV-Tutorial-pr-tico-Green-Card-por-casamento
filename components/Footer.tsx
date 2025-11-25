import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-2">© {new Date().getFullYear()} Green Card Simplificado - RG Forms. Todos os direitos reservados.</p>
        <p className="text-xs text-slate-600">
            Aviso Legal: Este produto não substitui o conselho profissional. Resultados podem variar.
        </p>
      </div>
    </footer>
  );
};
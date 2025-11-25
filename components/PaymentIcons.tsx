import React from 'react';

export const PaymentIcons: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-4 opacity-80">
      <div className="flex items-center gap-3 text-gray-500">
         {/* Simulated Icons for visual representation */}
         <div className="flex gap-2">
            <span className="bg-gray-200 rounded px-2 py-1 text-xs font-bold text-gray-600">VISA</span>
            <span className="bg-gray-200 rounded px-2 py-1 text-xs font-bold text-gray-600">Mastercard</span>
            <span className="bg-gray-200 rounded px-2 py-1 text-xs font-bold text-gray-600">Hotmart</span>
         </div>
      </div>
      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Pagamento 100% Seguro</p>
    </div>
  );
};
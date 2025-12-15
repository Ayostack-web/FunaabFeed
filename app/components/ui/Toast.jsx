import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 bg-slate-900 dark:bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-[60] animate-in slide-in-from-bottom-5 fade-in duration-300">
     <div className="bg-emerald-500 rounded-full p-1">
        <CheckCircle2 size={14} className="text-white" />
     </div>
     <span className="font-medium text-sm">{message}</span>
  </div>
);

export default Toast;
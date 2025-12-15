import React from 'react';
import { Link2, MoreHorizontal } from 'lucide-react';
import Button from './Button'; // Correctly import your local Button component

const ShareSheet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center sm:p-4">
       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
       <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-2xl md:rounded-2xl p-6 z-10 animate-in slide-in-from-bottom duration-300 space-y-4">
          <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2" />
          <h3 className="font-bold text-lg text-center dark:text-white">Share Post</h3>
          <div className="grid grid-cols-4 gap-4 py-4">
             {['WhatsApp', 'Twitter', 'Copy', 'More'].map((app, i) => (
               <div key={app} className="flex flex-col items-center gap-2 cursor-pointer group">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-sm group-hover:scale-110 transition-transform ${
                    i === 0 ? 'bg-green-500' : i === 1 ? 'bg-black dark:bg-white dark:text-black' : i === 2 ? 'bg-slate-500' : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {i === 2 ? <Link2 size={24} /> : i === 3 ? <MoreHorizontal size={24} /> : app[0]}
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{app}</span>
               </div>
             ))}
          </div>
          <Button variant="outline" className="w-full" onClick={onClose}>Cancel</Button>
       </div>
    </div>
  );
};

export default ShareSheet;
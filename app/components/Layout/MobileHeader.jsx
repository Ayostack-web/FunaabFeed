"use client";
import React from 'react';
import { Sparkles } from 'lucide-react';

const MobileHeader = ({ onOpenDrawer }) => (
  <div className="md:hidden sticky top-0 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 p-4 flex justify-between items-center transition-colors duration-300">
    <div className="h-8 w-8 bg-linear-to-tr from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center shadow-md shadow-emerald-100 dark:shadow-none cursor-pointer active:scale-95 transition-transform" onClick={onOpenDrawer}>
       <span className="text-white font-bold text-sm">☰</span>
    </div>
    <span className="font-black text-lg text-emerald-950 dark:text-slate-100 tracking-tight">FunaabFeed</span>
    <div className="w-8 flex justify-end">
        <Sparkles size={20} className="text-emerald-600" />
    </div>
  </div>
);

export default MobileHeader;
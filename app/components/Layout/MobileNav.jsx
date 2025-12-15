"use client";
import React from 'react';
import { Home, Hash, Bell, Mail } from 'lucide-react';

const MobileNav = ({ activeTab, onTabChange, onOpenCompose }) => {
  const navItems = [
    { id: 'home', icon: Home },
    { id: 'explore', icon: Hash },
    { id: 'notifications', icon: Bell },
    { id: 'messages', icon: Mail },
  ];

  return (
      <div className="md:hidden fixed bottom-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-1 flex justify-between z-40 h-[60px] items-center pb-safe shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] transition-colors duration-300">
           {navItems.map((item) => (
            <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`transition-all p-2 rounded-full active:scale-95 ${activeTab === item.id ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' : 'text-slate-400 dark:text-slate-500'}`}
            >
                <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} fill={activeTab === item.id ? "currentColor" : "none"} />
            </button>
        ))}
         <button 
           onClick={onOpenCompose}
           className="bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-full h-12 w-12 flex items-center justify-center text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50 absolute left-1/2 -translate-x-1/2 -top-6 border-4 border-white dark:border-slate-950 active:scale-95 transition-transform"
         >
             <span className="text-2xl font-bold leading-none mb-1">+</span>
         </button>
      </div>
  );
};

export default MobileNav;
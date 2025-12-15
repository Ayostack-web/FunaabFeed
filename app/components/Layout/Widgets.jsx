"use client";
import React from 'react';
// 1. Import ICONS from lucide-react
import { Search, MoreHorizontal } from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

// 3. Import Data
import { TRENDS } from '../../data/mockData';

const Widgets = () => (
  <div className="hidden xl:block w-[350px] p-4 pl-8 sticky top-0 h-screen overflow-y-auto no-scrollbar bg-white dark:bg-slate-950 transition-colors duration-300">
    <div className="bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full py-2.5 px-5 flex items-center space-x-3 mb-6 focus-within:bg-white dark:focus-within:bg-slate-900 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 border border-transparent transition-all shadow-sm">
      <Search size={18} className="text-slate-400" />
      <input 
        type="text" 
        placeholder="Search FunaabFeed" 
        className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 text-slate-800 dark:text-slate-200"
      />
    </div>

    <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden mb-6 shadow-sm">
      <h2 className="font-bold text-xl px-4 py-3 text-slate-800 dark:text-slate-100 border-b border-slate-100/50 dark:border-slate-800">Trends for you</h2>
      {TRENDS.map((trend) => (
        <div key={trend.id} className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer relative group">
          <p className="text-xs text-slate-500 flex justify-between mb-0.5">
            <span className="font-medium text-slate-400">{trend.category}</span>
            <MoreHorizontal size={14} className="text-slate-300 dark:text-slate-600 group-hover:text-emerald-600 transition-colors" />
          </p>
          <p className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">{trend.topic}</p>
          <p className="text-xs text-slate-500 mt-0.5">{trend.posts} posts</p>
        </div>
      ))}
      <div className="px-4 py-3.5 text-emerald-600 dark:text-emerald-400 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
        Show more
      </div>
    </div>

    <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
      <h2 className="font-bold text-xl px-4 py-3 text-slate-800 dark:text-slate-100 border-b border-slate-100/50 dark:border-slate-800">Who to follow</h2>
      {[1, 2].map((i) => (
         <div key={i} className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <Avatar initials={`U${i}`} className="h-10 w-10 text-sm bg-slate-200 border-none" />
               <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:underline decoration-emerald-500">User {i}</span>
                  <span className="text-slate-500 text-xs">@user_{i}</span>
               </div>
            </div>
            <Button variant="secondary" size="sm" className="rounded-full h-8 px-4 text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-transform active:scale-95">Follow</Button>
         </div>
      ))}
    </div>
    
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 px-4 text-xs text-slate-400 dark:text-slate-600">
        <span className="hover:underline cursor-pointer">Terms of Service</span>
        <span className="hover:underline cursor-pointer">Privacy Policy</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
        <span>© 2024 FunaabFeed</span>
    </div>
  </div>
);

export default Widgets;
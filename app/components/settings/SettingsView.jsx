"use client";
import React from 'react';
import { ChevronRight, Bell, Shield, CircleHelp, Info, LogOut, Moon, Lock, Flag, Mail } from 'lucide-react';

const SettingsView = ({ darkMode, toggleTheme }) => {
  return (
    <div className="pb-20 animate-in fade-in duration-500">
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-10">
        <h2 className="font-bold text-xl text-slate-900 dark:text-white">Settings</h2>
      </div>

      <div className="p-4 space-y-6">
        
        {/* 1. Account Section (ADDED THIS) */}
        <section>
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 px-2 uppercase tracking-wider">Account</h3>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
             
             {/* Change Password */}
             <div className="flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <Lock size={20} />
                   </div>
                   <span className="font-bold text-slate-900 dark:text-white text-[15px]">Change Password</span>
                </div>
                <ChevronRight size={18} className="text-slate-400" />
             </div>

             {/* Email Settings */}
             <div className="flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                      <Mail size={20} />
                   </div>
                   <span className="font-bold text-slate-900 dark:text-white text-[15px]">Email Preferences</span>
                </div>
                <ChevronRight size={18} className="text-slate-400" />
             </div>

          </div>
        </section>

        {/* 2. Appearance Section */}
        <section>
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 px-2 uppercase tracking-wider">Appearance</h3>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer" onClick={toggleTheme}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                   <Moon size={20} />
                </div>
                <div>
                   <p className="font-bold text-slate-900 dark:text-white text-[15px]">Dark Mode</p>
                   <p className="text-xs text-slate-500">Adjust the appearance of FunaabFeed</p>
                </div>
              </div>
              
              <div className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${darkMode ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} />
              </div>
            </div>
            
          </div>
        </section>

        {/* 3. General Section */}
        <section>
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 px-2 uppercase tracking-wider">General</h3>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { icon: Bell, label: 'Notifications', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
              { icon: Shield, label: 'Privacy and safety', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
              { icon: Flag, label: 'Report a Bug', color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30' }, // Added Report Bug
              { icon: CircleHelp, label: 'Help Center', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
              { icon: Info, label: 'About FunaabFeed', color: 'text-slate-500', bg: 'bg-slate-200 dark:bg-slate-800' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                   <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                      <item.icon size={20} />
                   </div>
                   <span className="font-bold text-slate-900 dark:text-white text-[15px]">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-slate-400" />
              </div>
            ))}
          </div>
        </section>
        
        {/* Logout */}
        <div className="pt-4">
             <button className="w-full py-3 rounded-xl border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2">
                <LogOut size={18} />
                Log out
             </button>
             <p className="text-center text-xs text-slate-400 mt-4">Version 0.1.0 (Beta)</p>
        </div>
        
      </div>
    </div>
  );
};

export default SettingsView;
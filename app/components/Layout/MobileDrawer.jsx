"use client";
import React from 'react';
// 1. Import Icons
import { Home, Hash, Bell, Mail, User, Settings, X, Sun, Moon, LogOut } from 'lucide-react';

// 2. Import Custom UI
import Avatar from '../ui/Avatar';

// 3. Import Data
import { CURRENT_USER } from '../../data/mockData';

const MobileDrawer = ({ isOpen, onClose, activeTab, onTabChange, darkMode, toggleTheme }) => {
  if (!isOpen) return null;
  
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Hash, label: 'Explore' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'messages', icon: Mail, label: 'Messages' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white dark:bg-slate-950 p-5 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300 transition-colors">
        <div className="flex justify-between items-center mb-8">
           <h2 className="font-bold text-xl text-slate-800 dark:text-slate-100">Account Info</h2>
           <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400"><X size={20} /></button>
        </div>
        <div className="flex flex-col space-y-1 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
           <Avatar initials={CURRENT_USER.avatar} size="lg" className="mb-2" />
           <span className="font-bold text-lg text-slate-900 dark:text-white mt-2">{CURRENT_USER.name}</span>
           <span className="text-slate-500 dark:text-slate-400 text-sm">{CURRENT_USER.handle}</span>
           <div className="flex gap-4 mt-3 text-sm dark:text-slate-400">
             <span><b className="text-slate-900 dark:text-white">420</b> Following</span>
             <span><b className="text-slate-900 dark:text-white">10.5k</b> Followers</span>
           </div>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
             <button
                key={item.id}
                onClick={() => { onTabChange(item.id); onClose(); }}
                className={`flex items-center space-x-4 p-3.5 rounded-xl w-full text-lg transition-colors ${activeTab === item.id ? 'font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-100' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'}`}
              >
                <item.icon size={24} />
                <span>{item.label}</span>
              </button>
          ))}
        </nav>
        
        <div className="mt-auto border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
           <button onClick={toggleTheme} className="flex items-center space-x-4 p-3 w-full text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors">
             {darkMode ? <Sun size={22} /> : <Moon size={22} />}
             <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
           </button>
           <button className="flex items-center space-x-4 p-3 w-full text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors">
             <LogOut size={22} />
             <span>Log out</span>
           </button>
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;

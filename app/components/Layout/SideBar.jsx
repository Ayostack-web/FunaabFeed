/*  
"use client";
import React from 'react';
import { Home, Hash, Bell, Mail, User, Settings, Sun, Moon, Feather, MoreHorizontal } from 'lucide-react';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { CURRENT_USER } from '../../data/mockData';

const Sidebar = ({ activeTab, onTabChange, darkMode, toggleTheme, onOpenCompose }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Hash, label: 'Explore' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'messages', icon: Mail, label: 'Messages' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="hidden md:flex flex-col h-screen sticky top-0 px-4 py-4 w-[80px] lg:w-[280px] border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 z-10 transition-colors duration-300">
      <div className="mb-2 lg:px-4 py-2 flex justify-between items-center">
        <div 
          onClick={() => onTabChange('home')}
          className="h-10 w-10 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="text-white font-extrabold text-xl">F</span>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden lg:block"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex items-center lg:space-x-4 p-3 rounded-full w-full transition-all duration-200 group ${
              activeTab === item.id 
                ? 'font-bold text-emerald-900 dark:text-emerald-100 bg-emerald-50 dark:bg-emerald-900/20 shadow-sm dark:shadow-none' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
            }`}
          >
            <item.icon 
                size={26} 
                strokeWidth={activeTab === item.id ? 2.5 : 2} 
                className={`transition-colors ${activeTab === item.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}
            />
            <span className="hidden lg:inline text-lg">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pb-4">
        <Button onClick={onOpenCompose} className="w-full hidden lg:flex items-center justify-center gap-2 h-12 text-lg font-bold shadow-emerald-300 hover:shadow-emerald-400 bg-gradient-to-r from-emerald-600 to-teal-600 border-none hover:scale-[1.02] transition-transform">
          <Feather size={20} />
          <span>Post</span>
        </Button>
        
        <div className="flex items-center space-x-3 mt-6 lg:p-3 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
          <Avatar initials={CURRENT_USER.avatar} />
          <div className="hidden lg:block flex-1 min-w-0 text-left">
            <p className="font-bold text-sm truncate text-slate-900 dark:text-slate-100">{CURRENT_USER.name}</p>
            <p className="text-slate-500 dark:text-slate-500 text-xs truncate">{CURRENT_USER.handle}</p>
          </div>
          <MoreHorizontal size={16} className="hidden lg:block text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



 */







































"use client";
import React from 'react';
import { Home, Hash, Bell, Mail, User, Settings, Feather, MoreHorizontal } from 'lucide-react';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { CURRENT_USER } from '../../data/mockData';

const Sidebar = ({ activeTab, onTabChange, onOpenCompose }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Hash, label: 'Explore' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'messages', icon: Mail, label: 'Messages' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="hidden md:flex flex-col h-screen sticky top-0 px-4 py-4 w-[280px] border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 z-10 transition-colors duration-300">
      
      {/* HEADER: Removed Toggle Button */}
      <div className="mb-2 px-4 py-2 flex items-center">
        <div 
          onClick={() => onTabChange('home')}
          className="h-10 w-10 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="text-white font-extrabold text-xl">F</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex items-center space-x-4 p-3 rounded-full w-full transition-all duration-200 group ${
              activeTab === item.id 
                ? 'font-bold text-emerald-900 dark:text-emerald-100 bg-emerald-50 dark:bg-emerald-900/20 shadow-sm dark:shadow-none' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
            }`}
          >
            <item.icon 
                size={26} 
                strokeWidth={activeTab === item.id ? 2.5 : 2} 
                className={`transition-colors ${activeTab === item.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}
            />
            <span className="inline text-lg">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pb-4">
        <Button onClick={onOpenCompose} className="w-full flex items-center justify-center gap-2 h-12 text-lg font-bold shadow-emerald-300 hover:shadow-emerald-400 bg-gradient-to-r from-emerald-600 to-teal-600 border-none hover:scale-[1.02] transition-transform">
          <Feather size={20} />
          <span>Post</span>
        </Button>
        
        <div className="flex items-center space-x-3 mt-6 p-3 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
          <Avatar initials={CURRENT_USER.avatar} />
          <div className="block flex-1 min-w-0 text-left">
            <p className="font-bold text-sm truncate text-slate-900 dark:text-slate-100">{CURRENT_USER.name}</p>
            <p className="text-slate-500 dark:text-slate-500 text-xs truncate">{CURRENT_USER.handle}</p>
          </div>
          <MoreHorizontal size={16} className="block text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
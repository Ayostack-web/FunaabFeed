"use client";
import React from 'react';
import { Home, Hash, Bell, Mail, User, Settings, X, LogOut } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { CURRENT_USER } from '../../data/mockData';

const MobileDrawer = ({ isOpen, onClose, activeTab, onTabChange }) => {
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
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="relative bg-white dark:bg-slate-950 w-[80%] max-w-[300px] h-full shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
        
        {/* Header Section: Icon Removed */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
                 <Avatar initials={CURRENT_USER.avatar} className="w-10 h-10" />
                 <div>
                     <p className="font-bold text-slate-900 dark:text-white">{CURRENT_USER.name}</p>
                     <p className="text-xs text-slate-500">@{CURRENT_USER.handle}</p>
                 </div>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => {
                        onTabChange(item.id);
                        onClose();
                    }}
                    className={`flex items-center space-x-4 p-3 rounded-xl w-full transition-all duration-200 ${
                    activeTab === item.id 
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100 font-bold' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                >
                    <item.icon 
                        size={22} 
                        className={activeTab === item.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'} 
                    />
                    <span className="text-[15px]">{item.label}</span>
                </button>
            ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button className="flex items-center space-x-3 text-red-600 dark:text-red-400 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors font-medium">
                <LogOut size={20} />
                <span>Log out</span>
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">FunaabFeed v0.1.0</p>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
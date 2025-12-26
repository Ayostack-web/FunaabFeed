// File: app/components/Layout/MobileHeader.jsx
"use client";
import React from 'react';
import { ArrowLeft } from 'lucide-react'; // Import Arrow icon
import Avatar from '../ui/Avatar'; 
import { CURRENT_USER } from '../../data/mockData';

const MobileHeader = ({ onOpenDrawer, activeTab, onBack }) => {
  return (
    <div className="md:hidden sticky top-0 z-20 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 h-[53px] flex items-center justify-between transition-colors duration-300">
      
      {/* Left Side: Logic to switch between Avatar and Back Arrow */}
      {activeTab === 'home' ? (
          // Show Avatar if on Home
          <div onClick={onOpenDrawer} className="cursor-pointer">
            <Avatar initials={CURRENT_USER.avatar} size="sm" />
          </div>
      ) : (
          // Show Back Arrow if on other tabs (Settings, Profile, etc.)
          <button 
            onClick={onBack} 
            className="p-1 -ml-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
      )}

      {/* Center: Logo (Solid Green Box) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
         <div className="h-8 w-auto px-3 text-teal-700 font-extrabold rounded-lg flex items-center justify-center shadow-sm">
          FunaabFeed
         </div>
      </div>

      {/* Right: Empty */}
      <div className="w-8"></div> 
    </div>
  );
};

export default MobileHeader;
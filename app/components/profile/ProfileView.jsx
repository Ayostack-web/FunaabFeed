"use client";
import React from 'react';

// 1. Import ICONS only
import { CheckCircle2 } from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

// 3. Import Data
import { CURRENT_USER } from '../../data/mockData';

const ProfileView = ({ onEditProfile }) => (
  <div className="animate-in fade-in duration-500">
    <div className="h-40 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    </div>
    <div className="px-4 relative mb-4">
      <div className="absolute -top-16 p-1 bg-white dark:bg-slate-950 rounded-full transition-colors">
         <Avatar initials={CURRENT_USER.avatar} size="xxl" className="border-4 border-white dark:border-slate-950 transition-colors" />
      </div>
      <div className="flex justify-end pt-4">
         <Button variant="outline" onClick={onEditProfile} className="rounded-full font-bold border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-slate-800 dark:hover:border-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-transparent">Edit Profile</Button>
      </div>
      <div className="mt-6">
        <h2 className="font-black text-2xl leading-none text-slate-900 dark:text-white flex items-center gap-1">
            {CURRENT_USER.name} 
            <CheckCircle2 size={20} className="fill-blue-500 text-white" />
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-[15px]">{CURRENT_USER.handle}</p>
        
        <p className="mt-4 text-slate-800 dark:text-slate-300 leading-relaxed text-[15px]">
            <span className="font-medium">400L</span> • <span className="text-emerald-700 dark:text-emerald-400 font-medium">{CURRENT_USER.college}</span><br/>
            {CURRENT_USER.bio}
        </p>
        
        <div className="flex gap-4 mt-4 text-sm text-slate-500 dark:text-slate-400">
           <span className="hover:underline cursor-pointer"><b className="text-slate-900 dark:text-white">420</b> Following</span>
           <span className="hover:underline cursor-pointer"><b className="text-slate-900 dark:text-white">10.5k</b> Followers</span>
        </div>
      </div>
    </div>
    
    <div className="border-b border-slate-100 dark:border-slate-800 mt-2 sticky top-[53px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-10 transition-colors">
       <div className="flex">
          <div className="flex-1 text-center py-4 font-bold border-b-[3px] border-emerald-500 text-emerald-900 dark:text-emerald-100 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors">Posts</div>
          <div className="flex-1 text-center py-4 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Media</div>
          <div className="flex-1 text-center py-4 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Likes</div>
       </div>
    </div>
    <div className="p-12 text-center">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 inline-block max-w-sm transition-colors">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">No posts yet</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">When you post, it will show up here.</p>
        </div>
    </div>
  </div>
);

export default ProfileView;
"use client";
import React, { useState } from 'react';

// 1. Import ICONS from lucide-react
import { ImageIcon, Smile, Calendar, BarChart2 } from 'lucide-react';

// 2. Import YOUR CUSTOM COMPONENTS from the local ui folder
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

// 3. Import Data
import { CURRENT_USER } from '../../data/mockData';

const MobileComposeModal = ({ isOpen, onClose, onPost }) => {
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!content.trim()) return;
    onPost(content);
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-white dark:bg-slate-950 animate-in slide-in-from-bottom duration-300">
       <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
          <button onClick={onClose} className="text-slate-600 dark:text-slate-400">Cancel</button>
          <Button size="sm" onClick={handleSubmit} disabled={!content.trim()} className="bg-emerald-600 rounded-full px-6">Post</Button>
       </div>
       <div className="p-4 flex gap-3">
          <Avatar initials={CURRENT_USER.avatar} />
          <textarea
            className="w-full border-none focus:ring-0 text-xl text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none h-60 bg-transparent"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          />
       </div>
       <div className="fixed bottom-0 w-full p-4 border-t border-slate-100 dark:border-slate-800 flex gap-4 text-emerald-600 bg-white dark:bg-slate-950 pb-8">
          <ImageIcon size={24} />
          <Smile size={24} />
          <Calendar size={24} />
          <BarChart2 size={24} />
       </div>
    </div>
  )
}

export default MobileComposeModal;
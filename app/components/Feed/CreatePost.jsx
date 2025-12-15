"use client";
import React, { useState } from 'react';

// 1. Import ICONS from lucide-react
import { ImageIcon, BarChart2, Calendar } from 'lucide-react';

// 2. Import YOUR CUSTOM COMPONENTS from the local ui folder
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// 3. Import Data
import { CURRENT_USER } from '../../data/mockData';

const CreatePost = ({ onPost }) => {
  const [content, setContent] = useState("");
  const MAX_CHARS = 280;
  const percentage = (content.length / MAX_CHARS) * 100;
  const isOverLimit = content.length > MAX_CHARS;

  const handleSubmit = () => {
    if (!content.trim() || isOverLimit) return;
    onPost(content);
    setContent("");
  };

  return (
    <div className="border-b border-slate-100 dark:border-slate-800 p-4 hidden md:block bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="flex space-x-4">
        <Avatar initials={CURRENT_USER.avatar} />
        <div className="flex-1 space-y-4">
          <textarea
            className="w-full border-none focus:ring-0 text-xl text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none h-20 p-2 bg-transparent"
            placeholder="What's happening on campus?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between items-center pt-2 border-t border-slate-50 dark:border-slate-800">
            <div className="flex space-x-0">
              <IconButton icon={ImageIcon} color="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600" />
              <IconButton icon={BarChart2} color="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600" />
              <IconButton icon={Calendar} color="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600" />
            </div>
            <div className="flex items-center gap-4">
                {content.length > 0 && (
                     <div className="relative w-6 h-6 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-slate-200 dark:text-slate-700" />
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={62.8} strokeDashoffset={62.8 - (62.8 * percentage) / 100} className={isOverLimit ? "text-red-500" : "text-emerald-500"} />
                        </svg>
                        {isOverLimit && <span className="absolute text-[10px] text-red-500 font-bold">{MAX_CHARS - content.length}</span>}
                    </div>
                )}
                <Button size="sm" onClick={handleSubmit} disabled={!content.trim() || isOverLimit} className="bg-emerald-600 rounded-full px-6 hover:scale-105 transition-transform">
                Post
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

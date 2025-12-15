import React from 'react';
// 1. Import ICONS only
import { Plus } from 'lucide-react';

// 2. Import your Custom Component
import Avatar from '../ui/Avatar';

// 3. Import Data
import { STORIES } from '../../data/mockData';

const StoryTray = () => (
    <div className="flex space-x-4 overflow-x-auto p-4 border-b border-slate-100 dark:border-slate-800 no-scrollbar bg-white dark:bg-slate-950">
        {STORIES.map(story => (
            <div key={story.id} className="flex flex-col items-center space-y-1 cursor-pointer min-w-[70px] group">
                <div className={`p-[3px] rounded-full transition-transform duration-200 group-hover:scale-105 ${story.isUser ? '' : (story.viewed ? 'bg-slate-200 dark:bg-slate-800' : 'bg-linear-to-tr from-yellow-400 via-orange-500 to-fuchsia-600')}`}>
                    <div className="p-0.5 bg-white dark:bg-slate-950 rounded-full relative">
                        <Avatar initials={story.avatar} size="lg" className="h-16 w-16 border-none" />
                        {story.isUser && (
                            <div className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-1 border-2 border-white dark:border-slate-950">
                                <Plus size={10} className="text-white" />
                            </div>
                        )}
                    </div>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400 truncate w-16 text-center">{story.user}</span>
            </div>
        ))}
    </div>
);

export default StoryTray;
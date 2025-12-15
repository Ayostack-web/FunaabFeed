"use client";
import React, { useState } from 'react';

// 1. Import ICONS only
import { Mail, CheckCircle2 } from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';

// 3. Import Data
import { MOCK_CHATS } from '../../data/mockData';

const MessagesView = ({ onSelectChat }) => {
    const [filter, setFilter] = useState('all'); // all, groups, channels

    const filteredChats = MOCK_CHATS.filter(chat => {
        if (filter === 'all') return true;
        if (filter === 'groups') return chat.type === 'group';
        if (filter === 'channels') return chat.type === 'channel';
        return true;
    });

    return (
        <div className="divide-y divide-slate-100 dark:divide-slate-800 animate-in fade-in duration-500">
            <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800">
                <div className="p-4 flex justify-between items-center">
                    <span className="font-bold text-xl text-slate-900 dark:text-white">Messages</span>
                    <Mail className="text-emerald-600" />
                </div>
                
                {/* Tabs */}
                <div className="flex px-4 pb-2 gap-4 text-sm font-medium text-slate-500 overflow-x-auto no-scrollbar">
                    <button 
                        onClick={() => setFilter('all')}
                        className={`pb-2 border-b-2 transition-colors whitespace-nowrap ${filter === 'all' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800 dark:hover:text-slate-300'}`}
                    >
                        All Chats
                    </button>
                    <button 
                        onClick={() => setFilter('groups')}
                        className={`pb-2 border-b-2 transition-colors whitespace-nowrap ${filter === 'groups' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800 dark:hover:text-slate-300'}`}
                    >
                        Groups
                    </button>
                    <button 
                        onClick={() => setFilter('channels')}
                        className={`pb-2 border-b-2 transition-colors whitespace-nowrap ${filter === 'channels' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800 dark:hover:text-slate-300'}`}
                    >
                        Channels
                    </button>
                </div>
            </div>

            {filteredChats.map(chat => (
                <div 
                    key={chat.id} 
                    onClick={() => onSelectChat(chat)}
                    className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-900 flex space-x-4 cursor-pointer transition-colors ${chat.unread ? 'bg-emerald-50/30 dark:bg-emerald-900/10' : ''}`}
                >
                <Avatar initials={chat.avatar} size="md" isGroup={chat.type === 'group'} isChannel={chat.type === 'channel'} />
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className={`text-[15px] truncate flex items-center gap-1 ${chat.unread ? 'font-bold text-slate-900 dark:text-white' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                            {chat.name}
                            {chat.type === 'channel' && <CheckCircle2 size={12} className="fill-blue-500 text-white" />}
                        </span>
                        <span className={`text-xs ${chat.unread ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>{chat.time}</span>
                    </div>
                    <p className={`text-sm truncate ${chat.unread ? 'text-slate-900 dark:text-slate-200 font-medium' : 'text-slate-500'}`}>{chat.lastMessage}</p>
                </div>
                </div>
            ))}
            {filteredChats.length === 0 && (
                <div className="p-8 text-center text-slate-500 text-sm">
                    No {filter} found
                </div>
            )}
        </div>
    );
}

export default MessagesView;
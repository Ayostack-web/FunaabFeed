"use client";
import React, { useState, useEffect, useRef } from 'react';

// 1. Import ICONS from lucide-react
import { ArrowLeft, CheckCircle2, UserPlus, MoreHorizontal, ImageIcon, Smile, Send } from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';
import IconButton from '../ui/IconButton';

// 3. Import Data
import { GROUP_CHAT_HISTORY, CHAT_HISTORY } from '../../data/mockData';

const ChatRoom = ({ chat, onBack }) => {
    // --- HOOKS MUST COME FIRST (Before any return statements) ---
    
    // We use optional chaining (chat?.type) to prevent errors if chat is null during hook initialization
    const [messages, setMessages] = useState(
        chat?.type === 'group' ? GROUP_CHAT_HISTORY : CHAT_HISTORY
    );
    const [inputText, setInputText] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // --- SAFETY CHECK (Must be AFTER hooks) ---
    if (!chat) return null; 

    const handleSend = () => {
        if (!inputText.trim()) return;
        setMessages([...messages, {
            id: Date.now(),
            sender: 'me',
            senderId: 'me',
            text: inputText,
            time: 'Now'
        }]);
        setInputText("");
    };

    return (
        <div className="flex flex-col h-screen md:h-[calc(100vh-20px)] animate-in slide-in-from-right duration-300 bg-white dark:bg-slate-950">
             {/* Chat Header */}
             <div className="sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl z-20 border-b border-slate-100 dark:border-slate-800 px-4 h-[60px] flex items-center gap-4">
                <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft size={20} className="text-slate-900 dark:text-white" />
                </button>
                <Avatar initials={chat.avatar} isGroup={chat.type === 'group'} isChannel={chat.type === 'channel'} />
                <div className="flex-1">
                    <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1">
                        {chat.name}
                        {chat.type === 'channel' && <CheckCircle2 size={12} className="fill-blue-500 text-white" />}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                        {chat.type === 'group' ? `${chat.members} members` : chat.type === 'channel' ? `${chat.subscribers} subscribers` : (chat.online ? 'Online' : 'Offline')}
                    </div>
                </div>
                 <div className="ml-auto flex items-center gap-2">
                    {chat.type === 'group' && <UserPlus size={20} className="text-slate-400 hover:text-emerald-600" />}
                    <MoreHorizontal className="text-slate-400" />
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => {
                    const isMe = msg.sender === 'me';
                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                            {!isMe && chat.type === 'group' && (
                                <div className="mr-2 self-end">
                                    <Avatar initials={msg.sender[0]} size="sm" className="w-6 h-6 text-[10px]" />
                                </div>
                            )}
                            <div className={`max-w-[75%] px-4 py-2 rounded-2xl text-[15px] relative ${
                                isMe 
                                ? 'bg-emerald-600 text-white rounded-br-none' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none'
                            }`}>
                                {!isMe && chat.type === 'group' && (
                                    <p className={`text-[10px] font-bold mb-0.5 ${
                                        msg.senderId === 'other1' ? 'text-orange-500' : 'text-blue-500'
                                    }`}>
                                        {msg.sender}
                                    </p>
                                )}
                                {msg.text}
                                <div className={`text-[10px] mt-1 opacity-70 ${isMe ? 'text-emerald-100 text-right' : 'text-slate-500 dark:text-slate-400'}`}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div ref={bottomRef} />
            </div>

            {/* Input Area - Hide for channels if not admin (simulated) */}
            {chat.type !== 'channel' ? (
                <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center gap-2 sticky bottom-0">
                    <IconButton icon={ImageIcon} />
                    <div className="flex-1 relative">
                        <input 
                            type="text" 
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2.5 px-4 focus:ring-1 focus:ring-emerald-500 text-sm dark:text-white placeholder:text-slate-400"
                            placeholder={chat.type === 'group' ? "Message group..." : "Start a message..."}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600">
                            <Smile size={18} />
                        </button>
                    </div>
                    <button 
                        onClick={handleSend}
                        disabled={!inputText.trim()}
                        className="p-2.5 bg-emerald-600 rounded-full text-white disabled:opacity-50 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95"
                    >
                        <Send size={18} className={inputText.trim() ? "ml-0.5" : ""} />
                    </button>
                </div>
            ) : (
                <div className="p-4 text-center text-sm text-slate-500 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    Only admins can send messages in this channel
                </div>
            )}
        </div>
    )
}

export default ChatRoom;
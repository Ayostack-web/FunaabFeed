"use client";
import React, { useState } from 'react';

// 1. Import ICONS only
import { 
  Heart, MessageCircle, Repeat2, Share, MoreHorizontal, 
  ImageIcon, Flag, EyeOff, Maximize2, ArrowBigUp, 
  ArrowBigDown, CheckCircle2, Users, Bookmark 
} from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';
import IconButton from '../ui/IconButton';

// 3. Import Feature Components
import Poll from './Poll'; 

const Post = ({ post, onLike, onImageClick, onClick, onShare }) => {
    const [showHeart, setShowHeart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleDoubleTap = (e) => {
        e.stopPropagation();
        setShowHeart(true);
        if (!post.liked) onLike(post.id);
        setTimeout(() => setShowHeart(false), 800);
    };

    return (
        <div 
            onClick={onClick}
            className="border-b border-slate-100 dark:border-slate-800 p-4 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-all cursor-pointer bg-white dark:bg-slate-950 group/post relative"
        >
            {/* Community & Type Header */}
            {post.community && (
                <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 dark:text-slate-400 pl-14">
                    <Users size={12} className="text-slate-400" />
                    <span>Posted in <span className="font-bold text-slate-700 dark:text-slate-300 hover:underline">c/{post.community}</span></span>
                    {post.type === 'question' && <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-1.5 rounded text-[10px] font-bold uppercase tracking-wide">Question</span>}
                </div>
            )}

            <div className="flex space-x-3">
            <div className="flex-shrink-0">
                <Avatar initials={post.avatar} />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1.5 flex-wrap mb-1 relative">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-[15px] hover:underline decoration-emerald-500/50" onClick={(e) => e.stopPropagation()}>{post.name}</span>
                    {post.verified && <CheckCircle2 size={16} className="fill-blue-500 text-white" />}
                    <span className="text-slate-500 dark:text-slate-500 text-sm">{post.handle}</span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-slate-500 dark:text-slate-500 text-sm hover:underline hover:text-emerald-600">{post.time}</span>
                    <div className="ml-auto relative">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
                            className="text-slate-400 hover:text-emerald-600 p-1 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                        >
                            <MoreHorizontal size={16} />
                        </button>
                        {showMenu && (
                            <div className="absolute right-0 top-6 w-40 bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-100 dark:border-slate-800 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2">
                                    <Flag size={14} /> Report Post
                                </button>
                                <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2">
                                    <EyeOff size={14} /> Not Interested
                                </button>
                            </div>
                        )}
                        {/* Backdrop for menu */}
                        {showMenu && <div className="fixed inset-0 z-0" onClick={(e) => { e.stopPropagation(); setShowMenu(false); }} />}
                    </div>
                </div>
                
                {/* Quora-style Title for Questions */}
                {post.title && <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 leading-tight">{post.title}</h3>}

                <p className="text-slate-800 dark:text-slate-200 text-[15px] leading-relaxed whitespace-pre-wrap">{post.content}</p>
                
                {post.image && (
                <div 
                    onClick={(e) => { e.stopPropagation(); onImageClick(); }}
                    onDoubleClick={handleDoubleTap}
                    className="mt-3 rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-800 aspect-video flex items-center justify-center text-slate-400 relative group shadow-sm hover:border-emerald-500/30 transition-colors select-none"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                    
                    {/* Double Tap Heart */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${showHeart ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <Heart size={80} className="fill-white text-white drop-shadow-2xl" />
                    </div>

                    <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={16} className="text-white" />
                    </div>
                    <ImageIcon size={48} className="text-slate-300 dark:text-slate-700 drop-shadow-lg" />
                </div>
                )}
                
                {post.poll && <Poll poll={post.poll} />}

                <div className="flex justify-between mt-3 max-w-md pr-4">
                    <IconButton icon={MessageCircle} label={post.comments} color="group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" />
                    <IconButton icon={Repeat2} label={post.retweets} color="group-hover:text-green-500 group-hover:bg-green-50 dark:group-hover:bg-green-900/20" />
                    
                    {/* Reddit/Quora style Voting for Questions/Polls */}
                    {post.type === 'question' ? (
                        <div className="flex items-center space-x-1 group">
                            <button onClick={(e) => {e.stopPropagation(); onLike(post.id)}} className={`p-1.5 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 ${post.liked ? 'text-orange-500' : 'text-slate-500 dark:text-slate-400'}`}>
                                <ArrowBigUp size={22} className={post.liked ? 'fill-current' : ''} />
                            </button>
                            <span className={`text-sm font-bold ${post.liked ? 'text-orange-500' : 'text-slate-500 dark:text-slate-400'}`}>{post.votes}</span>
                            <button className="p-1.5 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/20 text-slate-500 dark:text-slate-400 hover:text-indigo-500">
                                <ArrowBigDown size={22} />
                            </button>
                        </div>
                    ) : (
                        <IconButton 
                            icon={Heart} 
                            label={post.votes} 
                            active={post.liked} 
                            activeColor="text-pink-600 dark:text-pink-500"
                            color="group-hover:text-pink-600 group-hover:bg-pink-50 dark:group-hover:bg-pink-900/20" 
                            onClick={() => onLike(post.id)}
                        />
                    )}

                    <IconButton icon={Bookmark} color="group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" />
                    <IconButton icon={Share} color="group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" onClick={onShare} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Post;
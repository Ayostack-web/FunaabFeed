import React from 'react';

// 1. Import ICONS only
import { 
  ArrowLeft, Users, CheckCircle2, MoreHorizontal, 
  ImageIcon, MessageCircle, Repeat2, ArrowBigUp, 
  ArrowBigDown, Heart, Bookmark, Share 
} from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// 3. Import Feature Components
import Poll from './Poll';

// 4. Import Data
import { CURRENT_USER, MOCK_COMMENTS } from '../../data/mockData';

const ThreadView = ({ post, onBack, onLike, onShare }) => (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen pb-20">
        <div className="sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl z-20 border-b border-slate-100 dark:border-slate-800 px-4 h-[53px] flex items-center gap-6">
            <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <ArrowLeft size={20} className="text-slate-900 dark:text-white" />
            </button>
            <h2 className="font-bold text-lg text-slate-900 dark:text-white">Post</h2>
        </div>

        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
            {post.community && (
                <div className="flex items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <Users size={14} />
                    <span>In <span className="font-bold text-slate-900 dark:text-white">c/{post.community}</span></span>
                </div>
            )}

            <div className="flex items-center gap-3 mb-4">
                <Avatar initials={post.avatar} />
                <div>
                    <div className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-1">
                        {post.name}
                        {post.verified && <CheckCircle2 size={16} className="fill-blue-500 text-white" />}
                    </div>
                    <div className="text-slate-500 text-sm">{post.handle}</div>
                </div>
                <div className="ml-auto">
                    <MoreHorizontal className="text-slate-400" />
                </div>
            </div>
            
            {post.title && <h2 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{post.title}</h2>}
            
            <p className="text-xl text-slate-900 dark:text-white leading-relaxed whitespace-pre-wrap mb-4">
                {post.content}
            </p>

            {post.image && (
                <div className="rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-800 aspect-video flex items-center justify-center text-slate-400 mb-4">
                     <ImageIcon size={48} className="text-slate-300 dark:text-slate-700" />
                </div>
            )}
            
            {post.poll && <Poll poll={post.poll} />}

            <div className="text-slate-500 text-sm py-4 border-b border-slate-100 dark:border-slate-800">
                <span className="hover:underline cursor-pointer">10:32 AM · Nov 24, 2024</span> · <span className="font-bold text-slate-900 dark:text-white">FunaabFeed Web</span>
            </div>

            <div className="flex justify-between py-3 border-b border-slate-100 dark:border-slate-800 px-4">
                 <IconButton icon={MessageCircle} color="group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" />
                 <IconButton icon={Repeat2} color="group-hover:text-green-500 group-hover:bg-green-50 dark:group-hover:bg-green-900/20" />
                 {post.type === 'question' ? (
                        <div className="flex items-center space-x-2">
                            <button onClick={() => onLike(post.id)} className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${post.liked ? 'text-orange-500' : 'text-slate-500'}`}>
                                <ArrowBigUp size={24} className={post.liked ? 'fill-current' : ''} />
                            </button>
                            <span className="font-bold text-slate-700 dark:text-slate-300">{post.votes}</span>
                            <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                                <ArrowBigDown size={24} />
                            </button>
                        </div>
                 ) : (
                    <IconButton 
                        icon={Heart} 
                        active={post.liked} 
                        activeColor="text-pink-600 dark:text-pink-500"
                        color="group-hover:text-pink-600 group-hover:bg-pink-50 dark:group-hover:bg-pink-900/20" 
                        onClick={() => onLike(post.id)}
                    />
                 )}
                 <IconButton icon={Bookmark} color="group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" />
                 <IconButton icon={Share} color="group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" onClick={onShare} />
            </div>

            {/* Compose Reply */}
            <div className="py-4 flex gap-4">
                 <Avatar initials={CURRENT_USER.avatar} />
                 <div className="flex-1">
                     <input type="text" placeholder="Post your reply" className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-slate-500 text-slate-900 dark:text-white" />
                 </div>
                 <Button disabled size="sm" className="opacity-50">Reply</Button>
            </div>
        </div>

        {/* Comments */}
        {MOCK_COMMENTS.map(comment => (
            <div key={comment.id} className="p-4 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                <div className="flex gap-3">
                    <Avatar initials={comment.avatar} />
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                             <div className="flex gap-2 items-center">
                                 <span className="font-bold text-slate-900 dark:text-white">{comment.name}</span>
                                 <span className="text-slate-500 text-sm">{comment.handle}</span>
                                 <span className="text-slate-400 text-xs">•</span>
                                 <span className="text-slate-500 text-sm">{comment.time}</span>
                             </div>
                             <MoreHorizontal size={16} className="text-slate-400" />
                        </div>
                        <p className="text-slate-800 dark:text-slate-200 mt-1">{comment.content}</p>
                        <div className="flex justify-between mt-3 max-w-xs">
                             <IconButton icon={MessageCircle} size={16} />
                             <IconButton icon={Repeat2} size={16} />
                             <div className="flex items-center gap-1 text-slate-500">
                                <ArrowBigUp size={16} />
                                <span className="text-xs">{comment.likes}</span>
                             </div>
                             <IconButton icon={Share} size={16} />
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default ThreadView;
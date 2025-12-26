// File: app/page.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { Sparkles, Search, Heart, MessageCircle, User, ArrowLeft } from 'lucide-react'; // Added ArrowLeft

// --- Data Imports ---
import { 
  INITIAL_POSTS, 
  CURRENT_USER, 
  NOTIFICATIONS, 
  TRENDS,
  MOCK_COMMENTS
}  from '../app/data/mockData';

// --- UI Components ---
import Toast from './components/ui/Toast'; 
import SkeletonPost from './components/ui/SkeletonPost';
import ShareSheet from './components/ui/ShareSheet';
import ImageModal from './components/ui/ImageModal';

// --- Layout Components ---
import Sidebar from './components/Layout/SideBar';
import MobileHeader from './components/Layout/MobileHeader'; 
import MobileNav from './components/Layout/MobileNav'; 
import MobileDrawer from './components/Layout/MobileDrawer';
import Widgets from './components/Layout/Widgets';

// --- Feed Components ---
import StoryTray from './components/Feed/StoryTray';
import CreatePost from './components/Feed/CreatePost';
import Post from './components/Feed/Post';
import ThreadView from './components/Feed/ThreadView';
import MobileComposeModal from './components/Feed/MobileComposeModal';

// --- Feature Views ---
import LoginScreen from './components/auth/LoginScreen';
import MessagesView from './components/messages/MessageView';
import ChatRoom from './components/messages/ChatRoom';
import ProfileView from './components/profile/ProfileView';
import EditProfileModal from './components/profile/EditProfileModal';
import SettingsView from './components/settings/SettingsView';

export default function Home() { 
  // State Management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Modal States
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [shareSheetOpen, setShareSheetOpen] = useState(false);
  const [mobileComposeOpen, setMobileComposeOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  
  // Selection States
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [feedType, setFeedType] = useState('for-you');

  // Initial Load Simulation
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        setPosts(INITIAL_POSTS);
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoggedIn]);

  // Toast Timer
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleScroll = (e) => {
    setScrolled(e.target.scrollTop > 10);
  };

  const handlePost = (content) => {
    const newPost = {
      id: Date.now(),
      name: CURRENT_USER.name,
      handle: CURRENT_USER.handle,
      avatar: CURRENT_USER.avatar,
      content: content,
      time: "Just now",
      likes: 0,
      comments: 0,
      retweets: 0,
      liked: false,
      verified: false,
      community: 'General',
      type: 'post'
    };
    setPosts([newPost, ...posts]);
    setToastMessage("Post Sent Successfully!");
  };

  const toggleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const isLiked = !post.liked;
        if(isLiked) setToastMessage(post.type === 'question' ? "Upvoted" : "Post Liked");
        const newVotes = post.votes ? (isLiked ? post.votes + 1 : post.votes - 1) : (isLiked ? post.likes + 1 : post.likes - 1);
        return {
          ...post,
          liked: isLiked,
          votes: post.votes ? newVotes : undefined,
          likes: post.likes ? newVotes : undefined
        };
      }
      return post;
    }));
  };

  const handleTabChange = (id) => {
      setActiveTab(id);
      setSelectedPost(null);
      setSelectedChat(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleLogin = () => {
    setIsLoading(true);
    setIsLoggedIn(true);
  };
  
  // NEW: Simple Back Handler
  const handleBackToHome = () => {
      handleTabChange('home');
  };

  // Auth Guard
  if (!isLoggedIn) {
    return <div className={darkMode ? 'dark' : ''}><LoginScreen onLogin={handleLogin} /></div>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex min-h-screen bg-white dark:bg-slate-950 justify-center font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-200 selection:text-emerald-900 transition-colors duration-300">
        
        {/* Overlays */}
        {toastMessage && <Toast message={toastMessage} />}
        <ImageModal isOpen={imageModalOpen} onClose={() => setImageModalOpen(false)} />
        <EditProfileModal isOpen={editProfileOpen} onClose={() => setEditProfileOpen(false)} />
        <ShareSheet isOpen={shareSheetOpen} onClose={() => setShareSheetOpen(false)} />
        <MobileComposeModal 
            isOpen={mobileComposeOpen} 
            onClose={() => setMobileComposeOpen(false)} 
            onPost={handlePost} 
        />
        
        {/* Navigation */}
        <Sidebar 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
            onOpenCompose={() => setMobileComposeOpen(true)}
        />
        
        <MobileDrawer 
          isOpen={drawerOpen} 
          onClose={() => setDrawerOpen(false)}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* Main Content Area */}
        <main className="w-full max-w-[600px] border-r border-slate-100 dark:border-slate-800 md:min-h-screen pb-20 md:pb-0 relative transition-colors duration-300" onScroll={handleScroll}>
          
          {/* FIX: Passed activeTab and onBack to MobileHeader */}
          <MobileHeader 
            onOpenDrawer={() => setDrawerOpen(true)} 
            activeTab={activeTab}
            onBack={handleBackToHome}
          />
          
          {selectedChat ? (
             <ChatRoom 
                chat={selectedChat} 
                onBack={() => setSelectedChat(null)} 
             />
          ) : selectedPost ? (
              <ThreadView 
                post={selectedPost} 
                onBack={() => setSelectedPost(null)}
                onLike={toggleLike}
                onShare={() => setShareSheetOpen(true)}
               />
          ) : (
             <>
                {/* Header Logic (Desktop) */}
                <div className={`hidden md:flex sticky top-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl z-20 border-b border-slate-100 dark:border-slate-800 px-4 h-[53px] items-center cursor-pointer transition-all duration-300 ${scrolled ? 'shadow-sm dark:shadow-slate-900' : ''}`}>
                    {activeTab === 'home' ? (
                        <div className="flex w-full h-full">
                            <div 
                                onClick={() => setFeedType('for-you')}
                                className={`flex-1 flex items-center justify-center font-bold text-[15px] hover:bg-slate-50 dark:hover:bg-slate-900 relative ${feedType === 'for-you' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
                            >
                                <span>For you</span>
                                {feedType === 'for-you' && <div className="absolute bottom-0 w-14 h-1 rounded-full bg-emerald-500"></div>}
                            </div>
                            <div 
                                onClick={() => setFeedType('following')}
                                className={`flex-1 flex items-center justify-center font-bold text-[15px] hover:bg-slate-50 dark:hover:bg-slate-900 relative ${feedType === 'following' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
                            >
                                <span>Following</span>
                                {feedType === 'following' && <div className="absolute bottom-0 w-16 h-1 rounded-full bg-emerald-500"></div>}
                            </div>
                            <div className="ml-auto flex items-center pl-4">
                                <Sparkles size={18} className="text-emerald-600" />
                            </div>
                        </div>
                    ) : (
                         <div className="flex items-center gap-3">
                            {/* FIX: Added Back Button for Desktop too */}
                            <button 
                                onClick={handleBackToHome}
                                className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                <ArrowLeft size={20} className="text-slate-700 dark:text-slate-200" />
                            </button>
                            <h1 className="font-bold text-xl text-emerald-950 dark:text-emerald-100 tracking-tight capitalize">{activeTab}</h1>
                        </div>
                    )}
                </div>

                {/* Tab Views */}
                {activeTab === 'home' && (
                    <>
                    <StoryTray />
                    <CreatePost onPost={handlePost} />
                    
                    {isLoading ? (
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            <SkeletonPost />
                            <SkeletonPost />
                            <SkeletonPost />
                        </div>
                    ) : (
                        <div className="divide-y divide-slate-100 dark:divide-slate-800 animate-in fade-in duration-500">
                            {posts.map(post => (
                            <Post 
                                key={post.id} 
                                post={post} 
                                onLike={toggleLike} 
                                onImageClick={() => setImageModalOpen(true)}
                                onClick={() => setSelectedPost(post)}
                                onShare={() => setShareSheetOpen(true)}
                            />
                            ))}
                        </div>
                    )}
                    <div className="h-40"></div>
                    </>
                )}

                {activeTab === 'notifications' && (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 animate-in fade-in duration-500">
                        {NOTIFICATIONS.map(notif => (
                            <div key={notif.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900 flex space-x-3 transition-colors cursor-pointer group">
                                <div className="pt-1">
                                    {notif.type === 'like' && <Heart size={20} className="text-pink-600 fill-current" />}
                                    {notif.type === 'mention' && <MessageCircle size={20} className="text-blue-500 fill-current" />}
                                    {notif.type === 'follow' && <User size={20} className="text-emerald-600 fill-current" />}
                                </div>
                                <div className="flex-1">
                                    <div className="h-8 w-8 rounded-full bg-slate-200 mb-2"></div> 
                                    <p className="text-[15px] text-slate-800 dark:text-slate-200">
                                    {notif.user && <span className="font-bold text-slate-900 dark:text-white group-hover:underline">{notif.user} </span>}
                                    {notif.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'explore' && (
                    <div className="p-4 animate-in fade-in duration-500">
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-full py-2 px-4 flex items-center space-x-3 mb-4 md:hidden">
                            <Search size={18} className="text-slate-500" />
                            <input type="text" placeholder="Search FunaabFeed" className="bg-transparent border-none focus:ring-0 text-sm w-full dark:text-white" />
                        </div>
                        <h2 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Explore Campus</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-orange-500 h-32 rounded-2xl flex items-end p-4 font-bold text-white relative overflow-hidden group cursor-pointer shadow-md transform transition hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span className="relative z-10 text-lg">Events</span>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && <MessagesView onSelectChat={setSelectedChat} />}
                {activeTab === 'profile' && <ProfileView onEditProfile={() => setEditProfileOpen(true)} />}
                
                {activeTab === 'settings' && <SettingsView darkMode={darkMode} toggleTheme={toggleTheme} />}
             </>
          )}

        </main>

        <Widgets />

        <MobileNav 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
            onOpenCompose={() => setMobileComposeOpen(true)}
        />
        
      </div>
    </div>
  );
}
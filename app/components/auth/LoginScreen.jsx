"use client";
import React, { useState } from 'react';

// 1. Import ICONS only
import { Loader2 } from 'lucide-react';

// 2. Import Custom UI Components
import Button from '../ui/Button';

const LoginScreen = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        onLogin();
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
        <div className="w-20 h-20 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-200 dark:shadow-emerald-900/20 mb-6 rotate-3 hover:rotate-6 transition-transform duration-500">
        <span className="text-white font-extrabold text-4xl">F</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">FunaabFeed</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-center max-w-xs">Connect, gist, and vibe with thousands of Funaabites.</p>
        
        <div className="w-full max-w-sm bg-slate-50 dark:bg-slate-900 p-1 rounded-xl flex mb-6">
            <button 
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setIsLogin(true)}
            >
                Login
            </button>
            <button 
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setIsLogin(false)}
            >
                Register
            </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Matric Number</label>
                <input 
                    type="text" 
                    placeholder="e.g., 2021/2847"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white"
                    required
                />
            </div>
            {!isLogin && (
                 <div className="space-y-2 animate-in slide-in-from-top-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">College</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white">
                        <option>COLPHYS</option>
                        <option>COLBIOS</option>
                        <option>COLENG</option>
                        <option>COLPLANT</option>
                    </select>
                </div>
            )}
            
            <Button className="w-full h-12 text-lg mt-4" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : (isLogin ? "Log In" : "Create Account")}
            </Button>
        </form>
        
        <div className="mt-8 text-xs text-slate-400 text-center">
            By continuing, you agree to our Terms & Privacy Policy.
        </div>
    </div>
  )
}

export default LoginScreen;
"use client";
import React from 'react';

// 1. Import ICONS only
import { Settings, Lock, Shield, Bell, Smartphone, Flag } from 'lucide-react';

// 2. Import Custom UI Components
import Button from '../ui/Button';

const SettingsView = () => (
    <div className="animate-in fade-in duration-500 pb-20">
        <div className="p-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <span className="font-bold text-xl text-slate-900 dark:text-white">Settings</span>
            <Settings className="text-emerald-600" />
        </div>
        
        <div className="p-4 space-y-6">
            <section>
                <h3 className="text-sm font-bold text-slate-500 uppercase mb-3 px-2">Account</h3>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                    <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <Lock size={20} className="text-slate-400" />
                            <span className="font-medium dark:text-white">Change Password</span>
                        </div>
                        <div className="text-slate-400">›</div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <Shield size={20} className="text-slate-400" />
                            <span className="font-medium dark:text-white">Privacy & Safety</span>
                        </div>
                        <div className="text-slate-400">›</div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <Bell size={20} className="text-slate-400" />
                            <span className="font-medium dark:text-white">Notifications</span>
                        </div>
                        <div className="text-slate-400">›</div>
                    </button>
                </div>
            </section>

            <section>
                <h3 className="text-sm font-bold text-slate-500 uppercase mb-3 px-2">App</h3>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                    <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <Smartphone size={20} className="text-slate-400" />
                            <span className="font-medium dark:text-white">Display</span>
                        </div>
                        <div className="text-slate-400">›</div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <Flag size={20} className="text-slate-400" />
                            <span className="font-medium dark:text-white">Report a Bug</span>
                        </div>
                        <div className="text-slate-400">›</div>
                    </button>
                </div>
            </section>

            <div className="pt-4">
                <Button variant="danger" className="w-full bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 border-none shadow-none">
                    Log Out
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">FunaabFeed v1.0.0</p>
            </div>
        </div>
    </div>
);

export default SettingsView;
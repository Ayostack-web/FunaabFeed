"use client";
import React from 'react';

// 1. Import ICONS only
import { Camera, X } from 'lucide-react';

// 2. Import Custom UI Components
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

// 3. Import Data
import { CURRENT_USER } from '../../data/mockData';

const EditProfileModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
            <div className="bg-white dark:bg-slate-950 w-full max-w-lg rounded-2xl p-6 z-10 animate-in zoom-in-95 duration-200 relative overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl dark:text-white">Edit Profile</h3>
                    <button onClick={onClose}><X className="text-slate-500" /></button>
                </div>
                
                <div className="relative w-24 h-24 mx-auto mb-6 group cursor-pointer">
                    <Avatar initials={CURRENT_USER.avatar} size="xl" className="w-24 h-24 text-3xl" />
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="text-white" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Display Name</label>
                        <input type="text" defaultValue={CURRENT_USER.name} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Bio</label>
                        <textarea defaultValue={CURRENT_USER.bio} className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white h-24 resize-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Level</label>
                            <select className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white">
                                <option>100L</option>
                                <option>200L</option>
                                <option defaultValue>300L</option>
                                <option>400L</option>
                                <option>500L</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">College</label>
                            <select className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white">
                                <option defaultValue>COLPHYS</option>
                                <option>COLBIOS</option>
                                <option>COLENG</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose}>Save Changes</Button>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal;
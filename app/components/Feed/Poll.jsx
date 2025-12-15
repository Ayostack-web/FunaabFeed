"use client";
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Poll = ({ poll }) => {
    const [votedOption, setVotedOption] = useState(null);

    return (
        <div className="mt-3 space-y-2 max-w-md">
            {poll.options.map(option => {
                const percentage = Math.round((option.votes / poll.totalVotes) * 100);
                const isSelected = votedOption === option.id;

                return (
                    <div 
                        key={option.id}
                        onClick={(e) => { e.stopPropagation(); setVotedOption(option.id); }}
                        className="relative h-10 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer group hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        {/* Background Bar */}
                        {votedOption && (
                            <div 
                                className="absolute inset-y-0 left-0 bg-emerald-200 dark:bg-emerald-900/50 transition-all duration-500 ease-out"
                                style={{ width: `${percentage}%` }}
                            />
                        )}
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                            <span className={`font-medium text-sm ${isSelected ? 'text-emerald-800 dark:text-emerald-400 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                                {option.text} {isSelected && <CheckCircle2 size={14} className="inline ml-1" />}
                            </span>
                            {votedOption && (
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    {percentage}%
                                </span>
                            )}
                        </div>
                    </div>
                )
            })}
            <div className="text-xs text-slate-500 pt-1">
                {poll.totalVotes.toLocaleString()} votes · 2 days left
            </div>
        </div>
    )
}

export default Poll;
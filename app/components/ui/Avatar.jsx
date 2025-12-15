import React from 'react';
import { Megaphone, Users } from 'lucide-react';

const Avatar = ({ initials, className = "", size = "md", isGroup, isChannel }) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-20 w-20 text-2xl",
    xxl: "h-32 w-32 text-4xl"
  };
  
  let bgClass = "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 text-emerald-800 dark:text-emerald-200";
  if (isGroup) bgClass = "bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900 text-orange-800 dark:text-orange-200";
  if (isChannel) bgClass = "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200";

  return (
    <div className={`${sizeClasses[size] || sizeClasses.md} flex-shrink-0 rounded-full ${bgClass} flex items-center justify-center font-bold border-2 border-white dark:border-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 ${className}`}>
      {isChannel ? <Megaphone size={size === 'sm' ? 14 : 18} /> : isGroup ? <Users size={size === 'sm' ? 14 : 18} /> : initials}
    </div>
  );
};

export default Avatar;
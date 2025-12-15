import React from 'react';

const SkeletonPost = () => (
  <div className="p-4 border-b border-slate-100 dark:border-slate-800 animate-pulse bg-white dark:bg-slate-950">
    <div className="flex space-x-3">
      <div className="bg-slate-200 dark:bg-slate-800 h-10 w-10 rounded-full"></div>
      <div className="flex-1 space-y-3 py-1">
        <div className="flex gap-2">
           <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
           <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/6"></div>
        </div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
        <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-xl w-full mt-2"></div>
      </div>
    </div>
  </div>
);

export default SkeletonPost;
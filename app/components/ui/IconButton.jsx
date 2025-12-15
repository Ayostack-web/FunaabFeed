import React from 'react';

const IconButton = ({ icon: Icon, label, color = "group-hover:text-emerald-600 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30", active, activeColor = "text-red-500", onClick }) => (
  <button 
    className={`group flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 transition-colors ${active ? activeColor : "hover:text-emerald-600 dark:hover:text-emerald-400"}`}
    onClick={(e) => { e.stopPropagation(); onClick && onClick(); }}
    title={label}
  >
    <div className={`p-2 rounded-full transition-all duration-200 ${active ? "" : color}`}>
      <Icon size={19} className={active ? "fill-current scale-110" : "group-hover:scale-110 transition-transform"} />
    </div>
    {label && <span className={`text-xs font-medium ${active ? "" : "group-hover:text-emerald-600 dark:group-hover:text-emerald-400"}`}>{label}</span>}
  </button>
);

export default IconButton;
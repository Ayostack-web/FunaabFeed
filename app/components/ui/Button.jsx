import React from 'react';

const Button = ({ children, variant = "primary", className = "", size = "default", onClick, disabled }) => {
  const base = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 dark:shadow-none",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md dark:bg-slate-700 dark:hover:bg-slate-600",
    outline: "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
    ghost: "hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizes = {
    default: "h-10 px-5 py-2 text-sm",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
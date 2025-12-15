import React from 'react';
import { X, ImageIcon } from 'lucide-react';

const ImageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={onClose}>
        <X size={32} />
      </button>
      <div className="max-w-4xl w-full max-h-[90vh] relative group">
         <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
             <ImageIcon size={64} />
             <span className="ml-4 text-lg">Full Resolution Image</span>
         </div>
      </div>
    </div>
  );
};

export default ImageModal;
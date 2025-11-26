import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title?: string;
  className?: string;
}

export const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ videoId, title = "Video Player", className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative w-full h-full bg-slate-900 overflow-hidden ${className}`}>
      {!isLoaded ? (
        <button 
          onClick={handlePlay}
          className="group absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer focus:outline-none"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail Image - WebP format for better performance if available, fallback to jpg */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            loading="eager" // Load this immediately as it's LCP candidate in Hero
            width="1280"
            height="720"
          />
          
          {/* Play Button Overlay */}
          <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-rose-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-rose-500 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
          </div>
          
          {/* Pulse Effect */}
          <div className="absolute z-0 w-16 h-16 md:w-20 md:h-20 bg-rose-600/50 rounded-full animate-ping pointer-events-none"></div>
        </button>
      ) : (
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      )}
    </div>
  );
};
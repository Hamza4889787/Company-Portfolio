
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const progress = (currentScroll / scrollHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-2">
        {/* Progress Container */}
        <div className="relative">
          {/* Background track */}
          <div className="w-1 h-40 bg-gray-200/40 rounded-full backdrop-blur-sm"></div>
          
          {/* Progress fill */}
          <div 
            className="absolute top-0 left-0 w-1 bg-gradient-to-b from-primary via-primary to-accent rounded-full transition-all duration-300 ease-out shadow-sm"
            style={{ height: `${(scrollProgress / 100) * 160}px` }}
          ></div>
          
          {/* Progress indicator dot */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg transition-all duration-300 ease-out border-2 border-white"
            style={{ top: `${(scrollProgress / 100) * 160 - 6}px` }}
          ></div>
        </div>
        
        {/* Percentage indicator */}
        <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-gray-200/50">
          <span className="text-xs font-medium text-primary">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

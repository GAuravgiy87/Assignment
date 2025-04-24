import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface InfoIconProps {
  tooltip: string;
}

export const InfoIcon: React.FC<InfoIconProps> = ({ tooltip }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative inline-block">
      <HelpCircle 
        className="h-3.5 w-3.5 text-slate-400 cursor-help"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      
      {isVisible && (
        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 px-3 py-2 bg-slate-900 text-slate-200 text-xs rounded shadow-lg">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
        </div>
      )}
    </div>
  );
};
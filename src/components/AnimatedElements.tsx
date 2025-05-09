import React from 'react';
import { Plane, Map, MapPin, Wind } from 'lucide-react';

const AnimatedElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated plane */}
      <div className="absolute animate-plane z-10">
        <Plane className="text-white/60 w-10 h-10 md:w-16 md:h-16" />
      </div>
      
      {/* Floating map pin */}
      <div className="absolute top-1/4 right-1/4 animate-float-slow">
        <MapPin className="text-orange-400/70 w-8 h-8 md:w-12 md:h-12" />
      </div>
      
      {/* Floating map */}
      <div className="absolute bottom-1/4 left-1/3 animate-float">
        <Map className="text-blue-300/40 w-12 h-12 md:w-20 md:h-20" />
      </div>
      
      {/* Wind elements */}
      <div className="absolute top-2/3 right-1/3 animate-float-fast">
        <Wind className="text-white/30 w-8 h-8 md:w-14 md:h-14" />
      </div>
      
      {/* Route lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <path 
            d="M0,100 Q300,200 600,150 T1000,300" 
            className="text-white/10 stroke-current animate-draw"
            fill="none" 
            strokeWidth="2"
            strokeDasharray="10,5"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedElements;
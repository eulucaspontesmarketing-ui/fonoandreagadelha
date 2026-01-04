
import React from 'react';

interface SectionDividerProps {
  color: string;
  position: 'top' | 'bottom';
  type?: 'wave' | 'curve' | 'organic' | 'torn';
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ color, position, type = 'wave', flip = false }) => {
  const isTop = position === 'top';
  
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden leading-0 z-20 ${isTop ? 'top-0' : 'bottom-0'} ${flip ? 'scale-x-[-1]' : ''} ${isTop ? '' : 'rotate-180'}`}
      style={{ height: '70px' }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        fill={color}
      >
        {type === 'wave' && (
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        )}
        {type === 'curve' && (
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.4,38.26,100.59,30.35,210,47.85,314.8,27.31,100.23-19.64,204.4-74.8,302-120.25V0Z"></path>
        )}
        {type === 'organic' && (
          <path d="M0,0v120h1200V0c-113.8,42-230.1,65.6-348.6,65.6C731.3,65.6,613.9,43,500,0C386.1,43,268.7,65.6,148.6,65.6C103.4,65.6,58.3,61,13.2,52L0,49.4V0z"></path>
        )}
        {type === 'torn' && (
          <path d="M0,0v105.7c15.1,3.4,30,8.1,44.7,11.1c16.3,3.3,32.7,2.8,49,1.1c16.3-1.7,32.5-4.8,48.7-7.4c16.2-2.6,32.4-4.8,48.8-4.5c16.3,0.3,32.7,3.1,49.1,4.7c16.4,1.6,32.9,2.1,49.3,0.3c16.4-1.8,32.6-6,48.7-9.5c16.1-3.5,32-6.3,48.1-6.1c16.1,0.2,32.3,3.3,48.5,5.6c16.2,2.3,32.4,3.7,48.7,3.4c16.3-0.3,32.5-2.2,48.6-4.5c16.1-2.3,32-5.1,48.1-6c16.1-0.9,32.3,0.2,48.5,1.7c16.2,1.5,32.3,3.3,48.6,3c16.3-0.3,32.5-2.6,48.6-5.2c16.1-2.6,32-5.7,48.1-6.8c16.1-1.1,32.3-0.2,48.5,1.3c16.2,1.5,32.4,3.5,48.7,3.6c16.3,0.1,32.6-1.7,48.7-4c16.1-2.3,32.1-5,48.2-6.4V0H0z"></path>
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;

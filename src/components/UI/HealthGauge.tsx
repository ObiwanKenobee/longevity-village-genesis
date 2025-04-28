
import React from 'react';
import { cn } from '@/lib/utils';

interface HealthGaugeProps {
  value: number;
  maxValue: number;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HealthGauge: React.FC<HealthGaugeProps> = ({
  value,
  maxValue,
  label,
  size = 'md',
  className,
}) => {
  const percentage = (value / maxValue) * 100;
  const angle = (percentage * 180) / 100;
  
  // Determine color based on percentage
  const getColor = () => {
    if (percentage >= 80) return 'text-health-green';
    if (percentage >= 60) return 'text-health-blue';
    if (percentage >= 40) return 'text-health-primary';
    if (percentage >= 20) return 'text-health-warning';
    return 'text-destructive';
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'w-24 h-12',
    md: 'w-32 h-16',
    lg: 'w-48 h-24',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };
  
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Gauge background */}
        <div className="absolute w-full h-full rounded-t-full overflow-hidden bg-gray-100">
          <div 
            className={cn("absolute bottom-0 w-full rounded-t-full", getColor())}
            style={{ 
              height: '100%',
              transform: `rotate(${angle - 180}deg)`,
              transformOrigin: 'bottom center',
              backgroundColor: 'currentColor',
              opacity: 0.2
            }}
          />
        </div>
        
        {/* Gauge indicator */}
        <div 
          className="absolute bottom-0 left-1/2 w-1 bg-black origin-bottom"
          style={{ 
            height: '95%',
            transform: `translateX(-50%) rotate(${angle - 90}deg)`,
            transformOrigin: 'bottom center'
          }}
        />
        
        {/* Value display */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <span className={cn("font-bold", textSizes[size], getColor())}>
            {value.toFixed(1)}
          </span>
        </div>
      </div>
      
      <span className="mt-2 text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

export default HealthGauge;

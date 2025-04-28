
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children,
  className,
}) => {
  return (
    <div className={cn(
      "min-h-screen w-full bg-background text-foreground antialiased",
      className
    )}>
      <header className="sticky top-0 z-30 w-full backdrop-blur flex items-center h-16 border-b bg-background/90">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-health-primary flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl">LongevityVillage</span>
            <div className="text-xs px-2 py-0.5 bg-health-soft-green text-health-green rounded-full ml-2">
              Genesis
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Digital Twin v1.0
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-health-green animate-pulse"></div>
              <span className="text-xs text-health-green">Live</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container py-6">
        {children}
      </main>
      
      <footer className="border-t py-4">
        <div className="container flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            &copy; 2025 Longevity Village Genesis - Digital Twin Platform
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Projection Accuracy: 92%</span>
            <span>|</span>
            <span>Last Updated: Today</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { villageLayoutOptions } from '@/data/mockData';

const VillageVisualization: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState('clustered');
  
  // Simple representation of different village layouts
  const renderVillageLayout = (layoutId: string) => {
    switch (layoutId) {
      case 'radial':
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full border-2 border-health-primary opacity-50"></div>
              <div className="absolute w-36 h-36 rounded-full border-2 border-health-primary opacity-70"></div>
              <div className="absolute w-24 h-24 rounded-full border-2 border-health-primary opacity-90"></div>
              <div className="w-12 h-12 rounded-full bg-health-primary"></div>
              {/* Elements representing buildings */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-4 h-4 bg-health-secondary rounded-sm"
                  style={{ 
                    transform: `rotate(${i * 45}deg) translateY(-20px) rotate(-${i * 45}deg)`,
                    top: `calc(50% - 20px * ${Math.sin(i * Math.PI / 4)})`,
                    left: `calc(50% - 20px * ${Math.cos(i * Math.PI / 4)})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      case 'linear':
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-full max-w-xs h-16">
              <div className="absolute w-full h-2 bg-health-primary top-7"></div>
              {/* Buildings along the path */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-4 h-4 bg-health-secondary rounded-sm top-2"
                  style={{ left: `${i * 14 + 2}%` }}
                ></div>
              ))}
              {/* Community spaces */}
              <div className="absolute w-8 h-8 rounded-full bg-health-accent opacity-60 left-1/4 top-8"></div>
              <div className="absolute w-8 h-8 rounded-full bg-health-accent opacity-60 left-2/4 top-8"></div>
              <div className="absolute w-8 h-8 rounded-full bg-health-accent opacity-60 left-3/4 top-8"></div>
            </div>
          </div>
        );
      case 'clustered':
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="relative grid grid-cols-3 gap-4 w-48 h-48">
              {/* Clusters/Pods */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-center rounded-lg bg-health-soft-blue border border-health-primary p-2"
                  style={{ 
                    gridColumn: i % 2 === 0 ? 1 : 3,
                    gridRow: i < 2 ? 1 : 3
                  }}
                >
                  <div className="w-full h-full bg-health-primary rounded-md opacity-70"></div>
                </div>
              ))}
              {/* Central community space */}
              <div className="flex items-center justify-center col-start-2 row-start-2">
                <div className="w-full h-full rounded-full bg-health-accent opacity-80 animate-pulse-health"></div>
              </div>
              {/* Connecting paths */}
              <div className="absolute w-full h-full">
                <div className="absolute w-1 h-1/3 bg-health-primary opacity-40 top-1/3 left-1/6"></div>
                <div className="absolute w-1/3 h-1 bg-health-primary opacity-40 top-1/6 left-1/3"></div>
                <div className="absolute w-1 h-1/3 bg-health-primary opacity-40 top-1/3 right-1/6"></div>
                <div className="absolute w-1/3 h-1 bg-health-primary opacity-40 bottom-1/6 left-1/3"></div>
              </div>
            </div>
          </div>
        );
      case 'garden':
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Garden areas */}
              <div className="absolute w-full h-full bg-health-soft-green rounded-lg opacity-40"></div>
              
              {/* Circular paths */}
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-health-primary opacity-60"></div>
              
              {/* Buildings */}
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm top-6 left-16"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm top-16 left-6"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm top-16 right-6"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm bottom-16 left-6"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm bottom-16 right-6"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm bottom-6 left-16"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm bottom-6 right-16"></div>
              <div className="absolute w-4 h-4 bg-health-secondary rounded-sm top-6 right-16"></div>
              
              {/* Community center */}
              <div className="absolute w-8 h-8 bg-health-accent rounded-full animate-float"></div>
              
              {/* Garden elements */}
              {Array.from({ length: 16 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-health-green rounded-full"
                  style={{ 
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                    opacity: 0.6 + Math.random() * 0.4,
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="text-muted-foreground">Select a layout</div>
          </div>
        );
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Village Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="clustered" value={activeLayout} onValueChange={setActiveLayout}>
          <TabsList className="grid grid-cols-4 mb-4">
            {villageLayoutOptions.map((layout) => (
              <TabsTrigger key={layout.id} value={layout.id}>{layout.name}</TabsTrigger>
            ))}
          </TabsList>
          <div className="bg-slate-50 rounded-md p-4">
            {renderVillageLayout(activeLayout)}
            
            <div className="mt-4 text-center">
              <div className="font-semibold text-sm mb-1">
                {villageLayoutOptions.find(l => l.id === activeLayout)?.name}
              </div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <span>Health Bonus:</span>
                <span className="text-health-green font-medium">
                  +{villageLayoutOptions.find(l => l.id === activeLayout)?.healthBonus.toFixed(1)}x
                </span>
              </div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default VillageVisualization;

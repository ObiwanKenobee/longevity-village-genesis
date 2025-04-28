
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { villageConfig, interventionStrategies } from '@/data/mockData';
import { Check, Save } from 'lucide-react';

const ConfigPanel: React.FC = () => {
  const [config, setConfig] = useState({
    population: villageConfig.population,
    greenSpace: villageConfig.greenSpacePercent,
    walkability: villageConfig.walkabilityScore,
    communitySpaces: villageConfig.communitySpaces,
  });

  const handleSliderChange = (key: keyof typeof config, value: number[]) => {
    setConfig({
      ...config,
      [key]: value[0],
    });
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Village Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Population</span>
              <span className="text-sm">{config.population} residents</span>
            </div>
            <Slider
              value={[config.population]}
              min={50}
              max={500}
              step={10}
              onValueChange={(value) => handleSliderChange('population', value)}
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Green Space</span>
              <span className="text-sm">{config.greenSpace}%</span>
            </div>
            <Slider
              value={[config.greenSpace]}
              min={10}
              max={70}
              step={5}
              onValueChange={(value) => handleSliderChange('greenSpace', value)}
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Walkability</span>
              <span className="text-sm">{config.walkability}/100</span>
            </div>
            <Slider
              value={[config.walkability]}
              min={40}
              max={100}
              step={5}
              onValueChange={(value) => handleSliderChange('walkability', value)}
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Community Spaces</span>
              <span className="text-sm">{config.communitySpaces}</span>
            </div>
            <Slider
              value={[config.communitySpaces]}
              min={4}
              max={20}
              step={1}
              onValueChange={(value) => handleSliderChange('communitySpaces', value)}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Health Interventions</h3>
          <div className="space-y-2">
            {interventionStrategies.map((strategy) => (
              <div key={strategy.id} className="flex items-center justify-between text-sm p-2 rounded-md bg-slate-50 hover:bg-slate-100">
                <span>{strategy.name}</span>
                <div className="flex items-center">
                  <span className={`px-2 py-0.5 text-xs rounded ${
                    strategy.impact === 'High' 
                      ? 'bg-health-soft-green text-health-green'
                      : 'bg-health-soft-blue text-health-blue'
                  }`}>
                    {strategy.impact}
                  </span>
                  <Check className="h-4 w-4 ml-2 text-health-green" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-health-secondary hover:bg-opacity-90">
          <Save className="w-4 h-4 mr-2" />
          Save Configuration
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ConfigPanel;

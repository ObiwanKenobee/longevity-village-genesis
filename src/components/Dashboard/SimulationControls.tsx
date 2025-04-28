
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Play, Pause, RefreshCcw, Database } from 'lucide-react';

interface SimulationControlsProps {
  onSimulate?: () => void;
}

const SimulationControls: React.FC<SimulationControlsProps> = ({ onSimulate }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState([50]);
  const [enabledFeatures, setEnabledFeatures] = useState({
    environmentalFactors: true,
    socialDynamics: true,
    healthcareSystems: true,
    nudgingMechanisms: false,
  });

  const handleToggleSimulation = () => {
    setIsRunning(!isRunning);
    if (onSimulate) onSimulate();
  };

  const handleFeatureToggle = (feature: keyof typeof enabledFeatures) => {
    setEnabledFeatures({
      ...enabledFeatures,
      [feature]: !enabledFeatures[feature],
    });
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Simulation Controls</span>
          <div className="flex items-center text-xs px-2 py-1 rounded bg-health-soft-blue text-health-primary">
            <Database className="h-3 w-3 mr-1" />
            <span>Digital Twin Core</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Simulation Speed</span>
          <div className="flex items-center w-1/2">
            <Slider
              value={speed}
              min={10}
              max={100}
              step={10}
              onValueChange={setSpeed}
              className="w-full"
            />
            <span className="ml-2 text-xs w-8">{speed}%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium mb-2">Active Components</div>
          
          {Object.entries(enabledFeatures).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={key} className="text-sm cursor-pointer">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </Label>
              <Switch 
                id={key} 
                checked={value} 
                onCheckedChange={() => handleFeatureToggle(key as keyof typeof enabledFeatures)}
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button 
          onClick={handleToggleSimulation}
          className={isRunning ? "bg-amber-500 hover:bg-amber-600" : "simulation-button-primary w-full"}
          size="lg"
        >
          {isRunning ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pause Simulation
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Run Simulation
            </>
          )}
        </Button>
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            <RefreshCcw className="mr-1 h-3 w-3" />
            Reset
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Save State
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SimulationControls;

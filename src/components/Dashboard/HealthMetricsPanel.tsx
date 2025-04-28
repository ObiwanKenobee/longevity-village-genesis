
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { healthMetrics } from '@/data/mockData';
import MetricCard from '../UI/MetricCard';
import HealthGauge from '../UI/HealthGauge';

const HealthMetricsPanel: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Health Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {healthMetrics.map((metric) => (
                <MetricCard
                  key={metric.id}
                  title={metric.name}
                  value={metric.value}
                  unit={metric.unit}
                  trend={metric.trend}
                  status={metric.status}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="summary" className="mt-4">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <HealthGauge 
                  value={12.4} 
                  maxValue={15} 
                  label="Healthy Years Gained" 
                  size="lg" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto">
                <HealthGauge 
                  value={87} 
                  maxValue={100} 
                  label="Wellbeing Score" 
                />
                <HealthGauge 
                  value={92} 
                  maxValue={100} 
                  label="Social Cohesion" 
                />
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-xs text-muted-foreground mb-1">Overall Assessment</div>
                <div className="text-lg font-semibold text-health-primary">
                  Excellent Health Outcomes Projected
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Exceeds urban baseline by 10+ years
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HealthMetricsPanel;

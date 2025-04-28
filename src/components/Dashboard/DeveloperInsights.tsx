
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectionChart from '../UI/ProjectionChart';
import { historicalData, simulationResults } from '@/data/mockData';
import MetricCard from '../UI/MetricCard';

const DeveloperInsights: React.FC = () => {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Developer Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="projections">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projections">Projections</TabsTrigger>
            <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projections" className="space-y-4 mt-4">
            <ProjectionChart 
              data={historicalData}
              lines={[
                { key: 'healthyYearsProjection', color: '#9b87f5', name: 'Healthy Years Projection' },
              ]}
              title="Healthy Years Gained Over Time"
              xAxisLabel="Optimization Timeline"
              yAxisLabel="Years"
              height={220}
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <ProjectionChart 
                data={historicalData}
                lines={[
                  { key: 'wellbeingScore', color: '#33C3F0', name: 'Wellbeing' },
                ]}
                title="Wellbeing Score"
                height={150}
              />
              <ProjectionChart 
                data={historicalData}
                lines={[
                  { key: 'communityEngagement', color: '#8B5CF6', name: 'Community' },
                ]}
                title="Community Engagement"
                height={150}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="roi" className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                title="Estimated Cost Savings"
                value={formatCurrency(simulationResults.costSavings)}
                description="Total healthcare cost reduction over 10 years"
                className="bg-health-soft-blue border-health-blue"
              />
              <MetricCard
                title="ROI Multiple"
                value="4.2x"
                description="Return on investment from health infrastructure"
                className="bg-health-soft-green border-health-green"
              />
            </div>
            <Card className="p-4 bg-slate-50">
              <h3 className="text-sm font-medium mb-2">Investment Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Initial Infrastructure</span>
                  <span className="font-medium">42%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Ongoing Programs</span>
                  <span className="font-medium">31%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Technology Integration</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Research & Optimization</span>
                  <span className="font-medium">9%</span>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="recommendations" className="mt-4 space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-health-soft-green rounded-md border-l-4 border-health-green">
                <h4 className="font-medium text-health-green">High Priority</h4>
                <p className="text-sm mt-1">Increase communal green spaces by 15% to optimize physical activity patterns</p>
              </div>
              
              <div className="p-3 bg-health-soft-blue rounded-md border-l-4 border-health-blue">
                <h4 className="font-medium text-health-blue">Medium Priority</h4>
                <p className="text-sm mt-1">Implement centralized wellness center with nutrition education facilities</p>
              </div>
              
              <div className="p-3 bg-health-soft-peach rounded-md border-l-4 border-health-warning">
                <h4 className="font-medium text-health-warning">Consider</h4>
                <p className="text-sm mt-1">Integrate health monitoring technologies within community spaces</p>
              </div>
            </div>
            
            <div className="text-sm text-center text-muted-foreground mt-2">
              Recommendations based on data from 142 similar developments
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DeveloperInsights;

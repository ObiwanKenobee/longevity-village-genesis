
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import VillageVisualization from '@/components/Dashboard/VillageVisualization';
import HealthMetricsPanel from '@/components/Dashboard/HealthMetricsPanel';
import SimulationControls from '@/components/Dashboard/SimulationControls';
import DeveloperInsights from '@/components/Dashboard/DeveloperInsights';
import ConfigPanel from '@/components/Dashboard/ConfigPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { simulationResults } from '@/data/mockData';

const Index = () => {
  return (
    <DashboardLayout>
      {/* Hero Section */}
      <section className="mb-8 text-center animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Micro-Community Digital Twin Platform
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Design villages that heal you — before you build them.
        </p>
      </section>
      
      {/* Key Metrics Summary */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-health-soft-blue border-health-blue animate-scale-in">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Healthy Years Gained</div>
              <div className="text-3xl font-bold text-health-primary">
                +{simulationResults.healthyYearsGained}
                <span className="text-lg ml-1">years</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">vs. urban baseline</div>
            </CardContent>
          </Card>
          
          <Card className="bg-health-soft-green border-health-green animate-scale-in [animation-delay:100ms]">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Wellbeing Score</div>
              <div className="text-3xl font-bold text-health-green">
                {simulationResults.wellbeingScore}
                <span className="text-lg ml-1">/100</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">resident satisfaction</div>
            </CardContent>
          </Card>
          
          <Card className="bg-health-soft-peach border-health-warning animate-scale-in [animation-delay:200ms]">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Cost Savings</div>
              <div className="text-3xl font-bold text-health-warning">
                ${(simulationResults.costSavings / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs text-muted-foreground mt-1">healthcare reduction</div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:300ms]">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Social Cohesion</div>
              <div className="text-3xl font-bold text-health-accent">
                {simulationResults.socialCohesion}
                <span className="text-lg ml-1">%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">strong community bonds</div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Main Dashboard */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-1">
          <SimulationControls />
          <ConfigPanel />
        </div>
        
        {/* Middle Column - Village Visualization */}
        <div className="lg:col-span-1">
          <VillageVisualization />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6 lg:col-span-1">
          <HealthMetricsPanel />
          <DeveloperInsights />
        </div>
      </section>
      
      {/* Feature Overview */}
      <section className="mt-8 pt-6 border-t">
        <h2 className="text-2xl font-bold mb-4 text-center">Platform Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Digital Twin Engine</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Real-time simulation of health, environment and behavior interactions
            </p>
            <div className="text-xs text-health-primary">Active</div>
          </div>
          
          <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">10x Optimization System</h3>
            <p className="text-sm text-muted-foreground mb-2">
              AI-driven healthspan outcome improvements through iterative modeling
            </p>
            <div className="text-xs text-health-primary">Active</div>
          </div>
          
          <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Micro-Prototype Mode</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Test on 100-unit scale with fast iteration and predictive analytics
            </p>
            <div className="text-xs text-health-primary">Active</div>
          </div>
          
          <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Data Privacy Layer</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Blockchain anonymization and resident data ownership controls
            </p>
            <div className="text-xs text-health-neutral">Coming Soon</div>
          </div>
          
          <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Nudging App Interface</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Gamified health incentives tied to village design features
            </p>
            <div className="text-xs text-health-neutral">Coming Soon</div>
          </div>
          
          <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Ethical AI Governance</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Monthly bias audits and resident council oversight integration
            </p>
            <div className="text-xs text-health-neutral">Coming Soon</div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Index;

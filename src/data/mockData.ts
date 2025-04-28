
// Health Metrics Types
export type HealthMetric = {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: number;
  status: 'positive' | 'negative' | 'neutral';
};

export type VillageConfig = {
  name: string;
  population: number;
  units: number;
  area: number;
  greenSpacePercent: number;
  walkabilityScore: number;
  communitySpaces: number;
  healthServices: number;
};

export type SimulationResult = {
  healthyYearsGained: number;
  costSavings: number;
  wellbeingScore: number;
  environmentalImpact: number;
  socialCohesion: number;
};

export type HistoricalData = {
  month: string;
  healthyYearsProjection: number;
  wellbeingScore: number;
  communityEngagement: number;
};

// Mock Health Metrics
export const healthMetrics: HealthMetric[] = [
  {
    id: 'physical_activity',
    name: 'Physical Activity',
    value: 68,
    unit: '%',
    trend: 12,
    status: 'positive',
  },
  {
    id: 'mental_wellbeing',
    name: 'Mental Wellbeing',
    value: 74,
    unit: 'score',
    trend: 8,
    status: 'positive',
  },
  {
    id: 'social_connection',
    name: 'Social Connection',
    value: 82,
    unit: 'index',
    trend: 15,
    status: 'positive',
  },
  {
    id: 'nutrition_quality',
    name: 'Nutrition Quality',
    value: 65,
    unit: 'score',
    trend: 5,
    status: 'neutral',
  },
  {
    id: 'environmental_quality',
    name: 'Air Quality',
    value: 92,
    unit: 'aqi',
    trend: 7,
    status: 'positive',
  },
  {
    id: 'sleep_quality',
    name: 'Sleep Quality',
    value: 71,
    unit: 'score',
    trend: 9,
    status: 'positive',
  },
];

// Mock Village Configuration
export const villageConfig: VillageConfig = {
  name: 'Genesis Longevity Village',
  population: 250,
  units: 100,
  area: 15, // acres
  greenSpacePercent: 45,
  walkabilityScore: 88,
  communitySpaces: 12,
  healthServices: 8,
};

// Mock Simulation Results
export const simulationResults: SimulationResult = {
  healthyYearsGained: 12.4,
  costSavings: 1450000,
  wellbeingScore: 87,
  environmentalImpact: 78,
  socialCohesion: 92,
};

// Mock Historical Data for Charts
export const historicalData: HistoricalData[] = [
  { month: 'Jan', healthyYearsProjection: 7.2, wellbeingScore: 72, communityEngagement: 68 },
  { month: 'Feb', healthyYearsProjection: 7.8, wellbeingScore: 73, communityEngagement: 70 },
  { month: 'Mar', healthyYearsProjection: 8.5, wellbeingScore: 75, communityEngagement: 73 },
  { month: 'Apr', healthyYearsProjection: 9.2, wellbeingScore: 78, communityEngagement: 75 },
  { month: 'May', healthyYearsProjection: 9.8, wellbeingScore: 80, communityEngagement: 79 },
  { month: 'Jun', healthyYearsProjection: 10.5, wellbeingScore: 82, communityEngagement: 81 },
  { month: 'Jul', healthyYearsProjection: 11.2, wellbeingScore: 84, communityEngagement: 85 },
  { month: 'Aug', healthyYearsProjection: 11.8, wellbeingScore: 85, communityEngagement: 88 },
  { month: 'Sep', healthyYearsProjection: 12.4, wellbeingScore: 87, communityEngagement: 92 },
];

// Village Layout Options
export const villageLayoutOptions = [
  { id: 'radial', name: 'Radial Community', healthBonus: 1.2 },
  { id: 'linear', name: 'Linear Pathway', healthBonus: 0.8 },
  { id: 'clustered', name: 'Clustered Pods', healthBonus: 1.5 },
  { id: 'garden', name: 'Garden Integration', healthBonus: 1.8 },
];

// Intervention Strategies
export const interventionStrategies = [
  { id: 'physical', name: 'Physical Design', impact: 'High', timeframe: 'Long-term' },
  { id: 'social', name: 'Social Programs', impact: 'Medium', timeframe: 'Medium-term' },
  { id: 'nutrition', name: 'Nutrition Access', impact: 'Medium', timeframe: 'Short-term' },
  { id: 'tech', name: 'Health Tech', impact: 'High', timeframe: 'Medium-term' },
  { id: 'environment', name: 'Environmental', impact: 'High', timeframe: 'Long-term' },
];

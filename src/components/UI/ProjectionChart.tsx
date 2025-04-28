
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ChartData {
  month?: string;
  date?: string;
  [key: string]: string | number | undefined;
}

interface ProjectionChartProps {
  data: ChartData[];
  lines: Array<{
    key: string;
    color: string;
    name: string;
  }>;
  title: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  height?: number;
}

const ProjectionChart: React.FC<ProjectionChartProps> = ({
  data,
  lines,
  title,
  yAxisLabel,
  xAxisLabel,
  height = 300,
}) => {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            dataKey="month" 
            name="Month" 
            label={{ 
              value: xAxisLabel, 
              position: 'insideBottomRight', 
              offset: -15,
              style: { textAnchor: 'middle' }
            }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            label={{
              value: yAxisLabel,
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Legend align="center" verticalAlign="bottom" />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.name}
              stroke={line.color}
              strokeWidth={2}
              activeDot={{ r: 6 }}
              dot={{ r: 3 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ProjectionChart;

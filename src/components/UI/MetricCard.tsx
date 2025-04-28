
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number | string;
  unit?: string;
  trend?: number;
  status?: 'positive' | 'negative' | 'neutral';
  description?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  trend,
  status = 'neutral',
  description,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden h-full", className)}>
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-medium text-muted-foreground line-clamp-1">{title}</h3>
          <div className="mt-2 flex items-baseline flex-wrap gap-1">
            <p className="text-xl md:text-2xl font-semibold">{value}</p>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
          
          {trend !== undefined && (
            <div className="mt-2 flex items-center">
              {status === 'positive' && (
                <div className="flex items-center text-health-green">
                  <ArrowUp className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm font-medium">{trend}%</span>
                </div>
              )}
              {status === 'negative' && (
                <div className="flex items-center text-destructive">
                  <ArrowDown className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm font-medium">{Math.abs(trend)}%</span>
                </div>
              )}
              {status === 'neutral' && (
                <span className="text-sm text-muted-foreground">No change</span>
              )}
            </div>
          )}
          
          {description && (
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;

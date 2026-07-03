import React from 'react';
import MetricCard from './MetricCard';

interface Metric {
  value: string;
  label: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

interface MetricGridProps {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
}

export default function MetricGrid({ metrics, columns = 4 }: MetricGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: '1rem',
      margin: '2rem 0',
    }}
    className={`mlami-metric-grid mlami-metric-grid--${columns}col`}
    >
      {metrics.map((m, i) => (
        <MetricCard key={i} {...m} />
      ))}
    </div>
  );
}

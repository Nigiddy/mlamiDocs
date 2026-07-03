import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon?: string;
  title: string;
  description: string;
  variant?: 'default' | 'highlighted';
  badge?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: '1rem',
      margin: '2rem 0',
    }}
    className={`mlami-feature-grid mlami-feature-grid--${columns}col`}
    >
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
}

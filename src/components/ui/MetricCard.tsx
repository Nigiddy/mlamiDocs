import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export default function MetricCard({ value, label, description, trend, trendValue }: MetricCardProps) {
  const trendColors = { up: '#4ade80', down: '#f87171', neutral: 'var(--sl-color-gray-3)' };
  const trendIcons  = { up: '↑', down: '↓', neutral: '→' };

  return (
    <div style={{
      background: 'var(--metric-bg)',
      border: '1px solid var(--sl-color-gray-5)',
      borderRadius: 'var(--mlami-radius-xl)',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--sl-color-accent), transparent)',
      }} />
      <div style={{
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontFamily: "'DM Serif Display', serif",
        color: 'var(--sl-color-accent-high)',
        lineHeight: 1,
        marginBottom: '0.5rem',
        letterSpacing: '-0.03em',
      }}>
        {value}
      </div>
      <div style={{
        fontWeight: '600',
        fontSize: '0.875rem',
        color: 'var(--sl-color-white)',
        marginBottom: description ? '0.35rem' : 0,
      }}>
        {label}
      </div>
      {description && (
        <div style={{ fontSize: '0.8rem', color: 'var(--sl-color-gray-3)', lineHeight: 1.5 }}>
          {description}
        </div>
      )}
      {trend && trendValue && (
        <div style={{
          marginTop: '0.75rem',
          display: 'flex', alignItems: 'center', gap: '0.25rem',
          color: trendColors[trend], fontSize: '0.8rem', fontWeight: '500',
        }}>
          <span>{trendIcons[trend]}</span>
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
}

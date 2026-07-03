import React from 'react';

interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  variant?: 'default' | 'highlighted';
  badge?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
  badge,
}: FeatureCardProps) {
  return (
    <div
      style={{
        background: variant === 'highlighted'
          ? 'hsla(28, 40%, 20%, 0.3)'
          : 'var(--card-bg)',
        border: `1px solid ${variant === 'highlighted' ? 'var(--sl-color-accent)' : 'var(--card-border)'}`,
        borderRadius: 'var(--card-radius)',
        padding: '1.5rem',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'var(--sl-color-accent)';
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = 'var(--mlami-shadow-md)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = variant === 'highlighted' ? 'var(--sl-color-accent)' : 'var(--card-border)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {variant === 'highlighted' && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, var(--sl-color-accent), var(--sl-color-accent-high))',
        }} />
      )}
      {badge && (
        <span style={{
          display: 'inline-block',
          background: 'hsla(28, 72%, 46%, 0.15)',
          color: 'var(--sl-color-accent-high)',
          border: '1px solid hsla(28, 72%, 46%, 0.3)',
          borderRadius: 'var(--mlami-radius-full)',
          padding: '0.15rem 0.6rem',
          fontSize: '0.7rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          {badge}
        </span>
      )}
      {icon && (
        <div style={{
          fontSize: '1.75rem',
          marginBottom: '0.75rem',
          lineHeight: 1,
        }}>
          {icon}
        </div>
      )}
      <h3 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: '600',
        fontSize: '1rem',
        color: 'var(--sl-color-white)',
        margin: '0 0 0.5rem',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h3>
      <p style={{
        color: 'var(--sl-color-gray-3)',
        fontSize: '0.875rem',
        lineHeight: '1.65',
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

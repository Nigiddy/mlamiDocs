import React from 'react';

interface StatBadgeProps {
  value: string;
  label: string;
  variant?: 'accent' | 'success' | 'neutral';
}

export default function StatBadge({ value, label, variant = 'accent' }: StatBadgeProps) {
  const colors = {
    accent:  { bg: 'hsla(28,72%,46%,0.15)', border: 'hsla(28,72%,46%,0.3)', color: 'var(--sl-color-accent-high)' },
    success: { bg: 'hsla(142,60%,45%,0.1)', border: 'hsla(142,60%,45%,0.3)', color: 'hsl(142,60%,55%)' },
    neutral: { bg: 'hsla(0,0%,50%,0.1)',    border: 'var(--sl-color-gray-5)', color: 'var(--sl-color-gray-2)' },
  };
  const c = colors[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      background: c.bg, border: `1px solid ${c.border}`,
      borderRadius: 'var(--mlami-radius-full)',
      padding: '0.25rem 0.75rem',
      fontSize: '0.8rem',
    }}>
      <span style={{ fontWeight: '700', color: c.color }}>{value}</span>
      <span style={{ color: 'var(--sl-color-gray-3)', fontWeight: 400 }}>{label}</span>
    </span>
  );
}

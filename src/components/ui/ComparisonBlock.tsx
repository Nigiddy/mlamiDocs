import React from 'react';

interface ComparisonBlockProps {
  leftTitle?: string;
  rightTitle?: string;
  leftItems: string[];
  rightItems: string[];
  leftVariant?: 'danger' | 'neutral';
  rightVariant?: 'success' | 'accent';
}

export default function ComparisonBlock({
  leftTitle = 'Before',
  rightTitle = 'After',
  leftItems,
  rightItems,
  leftVariant = 'danger',
  rightVariant = 'success',
}: ComparisonBlockProps) {
  const leftColor  = leftVariant === 'danger' ? 'hsl(0,70%,60%)' : 'var(--sl-color-gray-3)';
  const rightColor = rightVariant === 'success' ? 'hsl(142,60%,50%)' : 'var(--sl-color-accent-high)';

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0',
    }}>
      {[
        { title: leftTitle, items: leftItems, color: leftColor, icon: '✕', bg: 'hsla(0,70%,55%,0.06)', border: 'hsla(0,70%,55%,0.2)' },
        { title: rightTitle, items: rightItems, color: rightColor, icon: '✓', bg: 'hsla(142,60%,45%,0.06)', border: 'hsla(142,60%,45%,0.2)' },
      ].map((side, i) => (
        <div key={i} style={{
          background: side.bg,
          border: `1px solid ${side.border}`,
          borderRadius: 'var(--mlami-radius-lg)',
          padding: '1.25rem',
        }}>
          <div style={{
            fontWeight: '600', fontSize: '0.8rem', color: side.color,
            textTransform: 'uppercase', letterSpacing: '0.07em',
            marginBottom: '0.75rem',
          }}>
            {side.title}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {side.items.map((item, j) => (
              <li key={j} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                fontSize: '0.875rem', color: 'var(--sl-color-gray-2)',
                marginBottom: '0.5rem', lineHeight: 1.5,
              }}>
                <span style={{ color: side.color, fontWeight: '700', flexShrink: 0, marginTop: '0.05rem' }}>
                  {side.icon}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

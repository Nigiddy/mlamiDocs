import React from 'react';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  status?: 'completed' | 'in-progress' | 'planned';
  items?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const statusStyles = {
  completed:   { dot: 'hsl(142,60%,45%)', ring: 'hsla(142,60%,45%,0.2)' },
  'in-progress': { dot: 'var(--sl-color-accent)', ring: 'hsla(28,72%,46%,0.2)' },
  planned:     { dot: 'var(--sl-color-gray-4)', ring: 'hsla(0,0%,50%,0.1)' },
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div style={{ position: 'relative', margin: '2rem 0', paddingLeft: '2rem' }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: '0.5rem', top: '0.75rem', bottom: '0.75rem',
        width: '1px', background: 'var(--sl-color-gray-5)',
      }} />
      {items.map((item, i) => {
        const s = statusStyles[item.status ?? 'planned'];
        return (
          <div key={i} style={{ position: 'relative', marginBottom: i < items.length - 1 ? '2rem' : 0 }}>
            {/* Node */}
            <div style={{
              position: 'absolute', left: '-2rem',
              width: '1rem', height: '1rem', top: '0.2rem',
              borderRadius: '50%',
              background: s.dot,
              boxShadow: `0 0 0 4px ${s.ring}`,
              zIndex: 1,
            }} />
            <div style={{
              display: 'inline-block',
              fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--sl-color-accent-high)',
              marginBottom: '0.3rem',
            }}>
              {item.period}
            </div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: '600',
              fontSize: '0.95rem', color: 'var(--sl-color-white)',
              margin: '0 0 0.35rem',
            }}>
              {item.title}
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--sl-color-gray-3)', margin: '0 0 0.5rem', lineHeight: 1.6 }}>
              {item.description}
            </p>
            {item.items && (
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {item.items.map((li, j) => (
                  <li key={j} style={{ fontSize: '0.8rem', color: 'var(--sl-color-gray-3)', marginBottom: '0.2rem' }}>
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

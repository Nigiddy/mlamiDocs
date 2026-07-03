import React from 'react';

interface ChecklistItem {
  label: string;
  status?: 'done' | 'partial' | 'pending';
  note?: string;
}

interface SecurityChecklistProps {
  items: ChecklistItem[];
  title?: string;
}

const statusConfig = {
  done:    { icon: '✓', color: 'hsl(142,60%,45%)', bg: 'hsla(142,60%,45%,0.12)', label: 'Implemented' },
  partial: { icon: '◑', color: 'hsl(38,90%,55%)',  bg: 'hsla(38,90%,55%,0.12)',  label: 'Partial' },
  pending: { icon: '○', color: 'var(--sl-color-gray-3)', bg: 'hsla(0,0%,50%,0.08)', label: 'Planned' },
};

export default function SecurityChecklist({ items, title }: SecurityChecklistProps) {
  return (
    <div style={{ margin: '1.5rem 0' }}>
      {title && (
        <h4 style={{
          fontFamily: "'Inter', sans-serif", fontWeight: '600',
          fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em',
          color: 'var(--sl-color-gray-3)', marginBottom: '0.75rem',
        }}>
          {title}
        </h4>
      )}
      <div style={{
        border: '1px solid var(--sl-color-gray-5)',
        borderRadius: 'var(--mlami-radius-lg)',
        overflow: 'hidden',
      }}>
        {items.map((item, i) => {
          const statusKey = (item.status ?? 'done') as keyof typeof statusConfig;
          const s = statusConfig[statusKey] ?? statusConfig['done'];
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderBottom: i < items.length - 1 ? '1px solid var(--sl-color-gray-6)' : 'none',
              background: i % 2 === 0 ? 'transparent' : 'hsla(0,0%,100%,0.01)',
            }}>
              <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '1.5rem', height: '1.5rem',
                background: s.bg, borderRadius: 'var(--mlami-radius-full)',
                color: s.color, fontSize: '0.75rem', fontWeight: '700', flexShrink: 0,
              }}>
                {s.icon}
              </span>
              <span style={{ flex: 1, fontSize: '0.875rem', color: 'var(--sl-color-gray-2)' }}>
                {item.label}
                {item.note && (
                  <span style={{ color: 'var(--sl-color-gray-3)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                    — {item.note}
                  </span>
                )}
              </span>
              <span style={{
                fontSize: '0.7rem', fontWeight: '600', color: s.color,
                background: s.bg, borderRadius: 'var(--mlami-radius-full)',
                padding: '0.15rem 0.6rem', flexShrink: 0,
              }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

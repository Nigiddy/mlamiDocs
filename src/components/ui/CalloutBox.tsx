import React from 'react';

type CalloutType = 'info' | 'warning' | 'success' | 'danger' | 'tip';

interface CalloutBoxProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<CalloutType, { icon: string; accent: string; bg: string; border: string }> = {
  info:    { icon: 'ℹ', accent: 'hsl(210,80%,60%)', bg: 'hsla(210,80%,60%,0.08)', border: 'hsla(210,80%,60%,0.25)' },
  warning: { icon: '⚠', accent: 'hsl(38,90%,55%)',  bg: 'hsla(38,90%,55%,0.08)',  border: 'hsla(38,90%,55%,0.25)' },
  success: { icon: '✓', accent: 'hsl(142,60%,45%)', bg: 'hsla(142,60%,45%,0.08)', border: 'hsla(142,60%,45%,0.25)' },
  danger:  { icon: '✕', accent: 'hsl(0,70%,55%)',   bg: 'hsla(0,70%,55%,0.08)',   border: 'hsla(0,70%,55%,0.25)' },
  tip:     { icon: '✦', accent: 'hsl(270,60%,65%)',  bg: 'hsla(270,60%,65%,0.08)', border: 'hsla(270,60%,65%,0.25)' },
};

export default function CalloutBox({ type = 'info', title, children }: CalloutBoxProps) {
  const c = config[type];
  return (
    <div style={{
      background: c.bg,
      border: `1px solid ${c.border}`,
      borderLeft: `3px solid ${c.accent}`,
      borderRadius: '0 var(--mlami-radius-lg) var(--mlami-radius-lg) 0',
      padding: '1rem 1.25rem',
      margin: '1.5rem 0',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <span style={{ color: c.accent, fontSize: '1rem', lineHeight: 1.5, flexShrink: 0, fontWeight: '700' }}>
          {c.icon}
        </span>
        <div>
          {title && (
            <div style={{
              fontWeight: '600', fontSize: '0.875rem', color: c.accent,
              marginBottom: '0.35rem', fontFamily: "'Inter', sans-serif",
            }}>
              {title}
            </div>
          )}
          <div style={{ color: 'var(--sl-color-gray-2)', fontSize: '0.875rem', lineHeight: 1.7 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

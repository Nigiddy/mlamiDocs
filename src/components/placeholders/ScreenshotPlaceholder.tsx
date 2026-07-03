import React from 'react';

interface ScreenshotPlaceholderProps {
  title: string;
  description?: string;
  aspectRatio?: string;
  badge?: string;
}

export default function ScreenshotPlaceholder({
  title,
  description,
  aspectRatio = '16/9',
  badge,
}: ScreenshotPlaceholderProps) {
  return (
    <div style={{
      background: 'var(--placeholder-bg)',
      border: '1px dashed var(--placeholder-border)',
      borderRadius: 'var(--mlami-radius-xl)',
      aspectRatio,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '0.75rem',
      padding: '2rem',
      margin: '1.5rem 0',
      position: 'relative',
    }}>
      {badge && (
        <span style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          background: 'hsla(28,72%,46%,0.15)',
          color: 'var(--sl-color-accent-high)',
          border: '1px solid hsla(28,72%,46%,0.3)',
          borderRadius: 'var(--mlami-radius-full)',
          padding: '0.15rem 0.6rem',
          fontSize: '0.65rem', fontWeight: '700',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {badge}
        </span>
      )}
      <div style={{ fontSize: '2.5rem', opacity: 0.3 }}>🖼</div>
      <div style={{
        fontWeight: '600', fontSize: '0.9rem',
        color: 'var(--placeholder-text)', textAlign: 'center',
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.78rem', color: 'var(--sl-color-gray-4)',
          textAlign: 'center', maxWidth: '24rem',
        }}>
          {description}
        </div>
      )}
      <div style={{
        fontSize: '0.7rem', color: 'var(--sl-color-gray-4)',
        fontFamily: 'var(--sl-font-mono)',
      }}>
        screenshot · coming soon
      </div>
    </div>
  );
}

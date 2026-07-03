import React from 'react';

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
  description?: string;
}

export default function VideoPlaceholder({ title, duration, description }: VideoPlaceholderProps) {
  return (
    <div style={{
      background: 'var(--placeholder-bg)',
      border: '1px dashed var(--placeholder-border)',
      borderRadius: 'var(--mlami-radius-xl)',
      aspectRatio: '16/9',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '0.75rem', padding: '2rem', margin: '1.5rem 0',
      position: 'relative',
    }}>
      {duration && (
        <span style={{
          position: 'absolute', bottom: '0.75rem', right: '0.75rem',
          background: 'hsla(0,0%,0%,0.5)', color: 'var(--sl-color-white)',
          borderRadius: 'var(--mlami-radius-sm)',
          padding: '0.15rem 0.5rem', fontSize: '0.7rem', fontFamily: 'var(--sl-font-mono)',
        }}>
          {duration}
        </span>
      )}
      {/* Play button */}
      <div style={{
        width: '3.5rem', height: '3.5rem', borderRadius: '50%',
        background: 'hsla(28,72%,46%,0.2)',
        border: '2px solid var(--sl-color-accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.25rem', paddingLeft: '0.2rem',
      }}>
        ▶
      </div>
      <div style={{
        fontWeight: '600', fontSize: '0.9rem',
        color: 'var(--placeholder-text)', textAlign: 'center',
      }}>
        {title}
      </div>
      {description && (
        <div style={{ fontSize: '0.78rem', color: 'var(--sl-color-gray-4)', textAlign: 'center', maxWidth: '24rem' }}>
          {description}
        </div>
      )}
      <div style={{ fontSize: '0.7rem', color: 'var(--sl-color-gray-4)', fontFamily: 'var(--sl-font-mono)' }}>
        video · coming soon
      </div>
    </div>
  );
}

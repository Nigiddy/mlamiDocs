import React from 'react';

interface QuoteBlockProps {
  quote: string;
  attribution?: string;
  role?: string;
}

export default function QuoteBlock({ quote, attribution, role }: QuoteBlockProps) {
  return (
    <div style={{
      position: 'relative',
      background: 'hsla(28, 20%, 15%, 0.6)',
      border: '1px solid var(--sl-color-gray-5)',
      borderRadius: 'var(--mlami-radius-xl)',
      padding: '2rem 2.5rem',
      margin: '2rem 0',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '1rem', left: '1.5rem',
        fontSize: '4rem', lineHeight: 1, color: 'var(--sl-color-accent)',
        opacity: 0.3, fontFamily: 'Georgia, serif', userSelect: 'none',
      }}>
        "
      </div>
      <p style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
        color: 'var(--sl-color-white)',
        lineHeight: 1.6,
        margin: '0 0 1rem',
        position: 'relative', zIndex: 1,
        fontStyle: 'italic',
      }}>
        {quote}
      </p>
      {attribution && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sl-color-accent)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--sl-color-gray-3)' }}>
            {attribution}
            {role && <span style={{ fontWeight: 400, marginLeft: '0.35rem' }}>· {role}</span>}
          </span>
        </div>
      )}
    </div>
  );
}

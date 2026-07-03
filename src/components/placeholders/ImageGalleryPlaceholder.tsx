import React from 'react';

interface ImageGalleryPlaceholderProps {
  count?: number;
  columns?: number;
  label?: string;
}

export default function ImageGalleryPlaceholder({ count = 6, columns = 3, label }: ImageGalleryPlaceholderProps) {
  return (
    <div style={{ margin: '1.5rem 0' }}>
      {label && (
        <div style={{
          fontSize: '0.75rem', fontWeight: '600', color: 'var(--sl-color-gray-3)',
          textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem',
        }}>
          {label}
        </div>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: '0.75rem',
      }}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} style={{
            background: 'var(--placeholder-bg)',
            border: '1px dashed var(--placeholder-border)',
            borderRadius: 'var(--mlami-radius-lg)',
            aspectRatio: '4/3',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.35rem',
          }}>
            <span style={{ fontSize: '1.25rem', opacity: 0.25 }}>🖼</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--sl-color-gray-4)', fontFamily: 'var(--sl-font-mono)' }}>
              {i + 1}/{count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

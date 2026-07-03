import React from 'react';

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface WorkflowSectionProps {
  steps: WorkflowStep[];
  title?: string;
}

export default function WorkflowSection({ steps, title }: WorkflowSectionProps) {
  return (
    <div style={{ margin: '2rem 0' }}>
      {title && (
        <h3 style={{
          fontFamily: "'DM Serif Display', serif", fontWeight: 400,
          fontSize: '1.5rem', color: 'var(--sl-color-white)',
          marginBottom: '1.5rem', letterSpacing: '-0.02em',
        }}>
          {title}
        </h3>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
            {/* Step column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{
                width: '2.25rem', height: '2.25rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--sl-color-accent), var(--sl-color-accent-high))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: step.icon ? '1rem' : '0.8rem',
                fontWeight: '700', color: 'white',
                flexShrink: 0, zIndex: 1,
                boxShadow: '0 0 0 4px hsla(28,72%,46%,0.15)',
              }}>
                {step.icon ?? step.step}
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  width: '1px', flex: 1, minHeight: '2rem',
                  background: 'linear-gradient(to bottom, var(--sl-color-accent), var(--sl-color-gray-5))',
                  margin: '0.3rem 0',
                }} />
              )}
            </div>
            {/* Content */}
            <div style={{ paddingBottom: i < steps.length - 1 ? '1.5rem' : 0, paddingTop: '0.25rem' }}>
              <h4 style={{
                fontFamily: "'Inter', sans-serif", fontWeight: '600',
                fontSize: '0.95rem', color: 'var(--sl-color-white)',
                margin: '0 0 0.35rem',
              }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--sl-color-gray-3)', margin: 0, lineHeight: 1.65 }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

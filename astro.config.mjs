// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'Mlami BBQ',
      description:
        'Complete technical documentation for the Mlami BBQ restaurant management platform.',
      logo: {
        src: './public/logo.svg',
        alt: 'Mlami BBQ',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
      customCss: ['./src/styles/global.css'],
      social: {
        github: 'https://github.com/mlamibbq',
      },
      editLink: {
        baseUrl: 'https://github.com/mlamibbq/docs/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Platform Overview', link: '/getting-started/overview' },
          ],
        },
        {
          label: 'Platform',
          items: [
            { label: 'Customer Order Flow', link: '/platform/order-flow' },
            { label: 'Payment System', link: '/platform/payments' },
            { label: 'Realtime System', link: '/platform/realtime' },
            { label: 'API Reference', link: '/platform/api-reference' },
          ],
        },
        {
          label: 'Operations',
          items: [
            { label: 'Admin & Kitchen Dashboard', link: '/operations/admin-dashboard' },
            { label: 'Financial Module', link: '/operations/financial' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: 'System Architecture', link: '/architecture/system' },
            { label: 'Technology Stack', link: '/architecture/tech-stack' },
            { label: 'Folder Structure', link: '/architecture/folder-structure' },
            { label: 'Database', link: '/architecture/database' },
            { label: 'Performance', link: '/architecture/performance' },
          ],
        },
        {
          label: 'Security',
          items: [
            { label: 'Security Overview', link: '/security/overview' },
            { label: 'Authentication & RBAC', link: '/security/authentication' },
            { label: 'Rate Limiting', link: '/security/rate-limiting' },
          ],
        },
        {
          label: 'Administration',
          items: [
            { label: 'Environment Variables', link: '/administration/environment' },
            { label: 'Deployment Guide', link: '/administration/deployment' },
            { label: 'Testing Guide', link: '/administration/testing' },
            { label: 'Troubleshooting', link: '/administration/troubleshooting' },
          ],
        },
        {
          label: 'Roadmap',
          items: [{ label: 'Future Roadmap', link: '/roadmap' }],
        },
        {
          label: 'Presentation',
          items: [{ label: 'Presentation Guide', link: '/presentation' }],
        },
      ],
    }),
  ],
});

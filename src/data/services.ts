export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
  idealFor: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: 'product-architecture',
    number: '01',
    title: 'Product Strategy & Architecture',
    subtitle: 'From complex problem space to definitive product roadmap',
    description:
      'We de-risk ambitious ventures by dissecting user behavior, architecting data flows, and drafting high-fidelity product specifications before writing a single line of code.',
    icon: 'layers',
    deliverables: [
      'User Research & Archetype Synthesis',
      'Information Architecture & Flow Diagrams',
      'Interactive Figma Prototypes',
      'Technical Feasibility Assessment',
    ],
    technologies: ['Figma', 'Miro', 'Domain Modeling', 'User Journey Mapping'],
    timeline: '3 - 6 Weeks',
    idealFor: 'Early-stage founders validating MVPs or enterprises rebuilding core software.',
    highlights: [
      'Comprehensive product specification ready for immediate engineering execution',
      'Usability validation across 20+ real customer interviews',
      'Definitive reduction in scope creep and rework',
    ],
  },
  {
    id: 'web-engineering',
    number: '02',
    title: 'Next-Gen Web & App Engineering',
    subtitle: 'Ultra-fast, zero-bloat web systems built for longevity',
    description:
      'We build blazingly fast digital flagship experiences. By embracing modern static architectures like Astro, modern TypeScript, and edge runtimes, we deliver 100/100 Lighthouse scores.',
    icon: 'code',
    deliverables: [
      'Astro Static Site & Island Architecture',
      'TypeScript Full-Stack Integration',
      'Accessible WCAG AAA Compliant Markup',
      'CI/CD Pipeline with Automated Audits',
    ],
    technologies: ['Astro', 'TypeScript', 'CSS Modules / PostCSS', 'Edge Workers', 'GitHub Actions'],
    timeline: '4 - 10 Weeks',
    idealFor: 'High-growth brands demanding sub-second load times and flawless mobile experiences.',
    highlights: [
      '100/100 Google Lighthouse scores across all page templates',
      'Zero unnecessary third-party runtime weight (< 30KB total core bundle)',
      'Pre-configured CI/CD deployment pipelines on GitHub Pages, Cloudflare, or Vercel',
    ],
  },
  {
    id: 'branding-motion',
    number: '03',
    title: 'Brand Identity & Motion Systems',
    subtitle: 'Iconic visual languages that build enduring category leadership',
    description:
      'We craft distinctive visual identities that captivate markets. From generative 3D brand assets and bespoke typography to motion guidelines that breathe life into your digital presence.',
    icon: 'sparkle',
    deliverables: [
      'Comprehensive Brand Strategy & Positioning',
      'Logo Suite & Geometric Monograms',
      'Digital-First Typography & Color Palettes',
      'Motion Design & Kinetic Micro-Interactions',
    ],
    technologies: ['Generative 3D', 'Bespoke Typography', 'After Effects', 'Lottie / SVG Animation'],
    timeline: '4 - 8 Weeks',
    idealFor: 'Companies navigating rebrands, funding rounds, or category creation.',
    highlights: [
      'Extensive brand book with vector master assets and license rights',
      'Production-ready SVG animations and video hero loops',
      'Cohesive visual tone that cuts through crowded competitor spaces',
    ],
  },
  {
    id: 'design-systems',
    number: '04',
    title: 'Design Systems & UI Engineering',
    subtitle: 'Scalable foundations that unify engineering and product teams',
    description:
      'We build robust, token-driven design systems that empower distributed engineering teams to ship cohesive, accessible features at ten times their previous speed.',
    icon: 'layout',
    deliverables: [
      'Token Architecture (Spacing, Radii, Colors, Elevation)',
      'Accessible Component Library (Figma + Code)',
      'Living Documentation Hub',
      'Automated Token Syncing Scripts',
    ],
    technologies: ['Design Tokens (W3C Standard)', 'Astro Components', 'Figma Variables', 'TypeScript'],
    timeline: '6 - 12 Weeks',
    idealFor: 'Scale-ups suffering from inconsistent UI fragments and design debt.',
    highlights: [
      'Single source of truth between Figma variables and code tokens',
      'Strict WCAG 2.1 AA/AAA compliance verified on every component',
      'Drastically reduced pull-request review and QA cycles',
    ],
  },
  {
    id: '3d-spatial',
    number: '05',
    title: '3D Spatial & Interactive Canvases',
    subtitle: 'Immersive browser experiences without performance penalties',
    description:
      'We transform passive visitors into active participants through lightweight, high-framerate 3D viewports, interactive product configurators, and kinetic visual storytelling.',
    icon: 'cpu',
    deliverables: [
      'Lightweight WebGL & Canvas Shaders',
      'Interactive 3D Product Viewers',
      'Scroll-Driven Kinetic Animations',
      'Adaptive Fallback for Low-Power Devices',
    ],
    technologies: ['WebGL / Three.js', 'Canvas API', 'GPU Shader Code', 'IntersectionObserver'],
    timeline: '4 - 8 Weeks',
    idealFor: 'Hardware, luxury, architectural, or pioneering tech products.',
    highlights: [
      'Buttery-smooth 60fps renders optimized for both mobile and high-DPI desktop screens',
      'Smart progressive loading with zero layout shift',
      'Dramatic increase in user dwell time and customer engagement',
    ],
  },
  {
    id: 'growth-optimization',
    number: '06',
    title: 'Conversion & Technical SEO',
    subtitle: 'Engineering every pixel for search dominance and revenue conversion',
    description:
      'Design without conversion is vanity. We instrument ruthless funnel analytics, optimize semantic microdata, and engineer page architectures that turn organic visitors into qualified pipeline.',
    icon: 'check',
    deliverables: [
      'Core Web Vitals Audit & Remediation',
      'Structured Schema.org Microdata',
      'Frictionless Checkout & Lead Funnels',
      'Privacy-First Telemetry Instrumentation',
    ],
    technologies: ['Semantic HTML5', 'JSON-LD Schema', 'Open Graph Automation', 'Zero-Cookie Analytics'],
    timeline: '2 - 4 Weeks',
    idealFor: 'B2B SaaS, developer tools, and high-ticket service platforms.',
    highlights: [
      'Measurable gains in search indexation and rich snippet rankings',
      'Elimination of layout shifts and input delays',
      'Optimized conversion funnels with clear behavioral milestones',
    ],
  },
];

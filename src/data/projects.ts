export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'Digital Product' | 'Brand Identity' | 'Web Experience' | 'Design System';
  tagline: string;
  description: string;
  tags: string[];
  metrics: ProjectMetric[];
  deliverables: string[];
  testimonial: ProjectTestimonial;
  themeColor: string;
  accentColor: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectCategories = [
  'All',
  'Digital Product',
  'Brand Identity',
  'Web Experience',
  'Design System',
] as const;

export const projects: Project[] = [
  {
    id: 'synthetix-os',
    title: 'Synthetix AI Workspace',
    client: 'Synthetix Systems Inc.',
    year: '2026',
    category: 'Digital Product',
    tagline: 'Autonomous AI workflow orchestrator for 45,000+ machine learning researchers',
    description:
      'We redesigned Synthetix from first principles: replacing clunky notebook pipelines with a spatial canvas, zero-latency inference playground, and collaborative prompt iteration suite.',
    tags: ['Astro', 'TypeScript', 'Web Workers', 'WebGL Canvas', 'Design System'],
    metrics: [
      { label: 'Weekly Active Users', value: '+340%' },
      { label: 'Task Completion Speed', value: '4.2x Faster' },
      { label: 'Net Promoter Score', value: '82 NPS' },
    ],
    deliverables: [
      'End-to-End Product Design',
      'Interactive Canvas Architecture',
      'Multi-Tenant Workspace UI',
      'Micro-Interaction Design',
    ],
    testimonial: {
      quote:
        'Apex transformed an impenetrable command-line workflow into the most intuitive AI workspace on the market. Our enterprise customer retention skyrocketed.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Product Officer, Synthetix',
    },
    themeColor: '#0a101d',
    accentColor: '#6366f1',
    featured: true,
  },
  {
    id: 'veloce-cloud',
    title: 'Veloce Edge Infrastructure',
    client: 'Veloce Networks Inc.',
    year: '2025',
    category: 'Web Experience',
    tagline: 'Sub-second developer cloud portal handling 8.4B daily global routing requests',
    description:
      'Engineered an ultra-fast developer docs and telemetry dashboard combining real-time global latency telemetry, interactive CLI playground, and instant edge deployments.',
    tags: ['Astro Static Island', 'Real-Time Telemetry', 'Edge CDN', 'Dark Mode UI'],
    metrics: [
      { label: 'Lighthouse Performance', value: '100/100' },
      { label: 'Self-Serve Conversion', value: '+188%' },
      { label: 'Average Session Time', value: '7m 42s' },
    ],
    deliverables: [
      'Interactive Developer Portal',
      'Real-Time Globe Visualization',
      'Component Architecture',
      'Technical Documentation System',
    ],
    testimonial: {
      quote:
        'Developers are brutally honest critics. Apex created a website so fast and beautiful that our GitHub stars doubled in the first forty-eight hours.',
      author: 'Marcus Vance',
      role: 'Head of Developer Relations, Veloce Cloud',
    },
    themeColor: '#0c1726',
    accentColor: '#06b6d4',
    featured: true,
  },
  {
    id: 'hyperion-capital',
    title: 'Hyperion Sovereign Identity',
    client: 'Hyperion Capital Partners',
    year: '2026',
    category: 'Brand Identity',
    tagline: 'Brand repositioning and institutional digital portal for a $1.8B deep-tech fund',
    description:
      'Created a refined brand architecture balancing mathematical precision with deep-tech boldness. Includes generative 3D brand assets, bespoke typography guidelines, and an investor portal.',
    tags: ['Brand Strategy', 'Generative 3D', 'Editorial Typography', 'Investor Portal'],
    metrics: [
      { label: 'Inbound Deal Flow', value: '+215%' },
      { label: 'LP Investor Portal Adoption', value: '96%' },
      { label: 'Design Excellence Awards', value: '3x Gold' },
    ],
    deliverables: [
      'Visual Identity System',
      'Brand Guidelines & Voice',
      '3D Visual Asset Library',
      'Bespoke Web Portal',
    ],
    testimonial: {
      quote:
        'Apex elevated our presence from another boutique VC to an unmistakable deep-tech brand that founders compete to partner with.',
      author: 'Alistair Sterling',
      role: 'Managing Partner, Hyperion',
    },
    themeColor: '#120d24',
    accentColor: '#a855f7',
    featured: true,
  },
  {
    id: 'lumina-design-system',
    title: 'Lumina Global Design System',
    client: 'Lumina Media Group',
    year: '2025',
    category: 'Design System',
    tagline: 'Unified component architecture and tokens powering 14 global editorial platforms',
    description:
      'Engineered an enterprise-grade multi-brand design system with automated token syncing, dark/light accessibility validation, and sub-10ms component render benchmarks.',
    tags: ['Design Tokens', 'Figma Variables', 'Astro Components', 'WCAG AAA'],
    metrics: [
      { label: 'Design-to-Code Velocity', value: '3.5x Faster' },
      { label: 'Accessibility Audit', value: '100% WCAG AAA' },
      { label: 'Component Reuse', value: '92%' },
    ],
    deliverables: [
      '68 Production Components',
      'Token Architecture Engine',
      'Living Documentation Hub',
      'Figma Community UI Kit',
    ],
    testimonial: {
      quote:
        'Our distributed team of 90 engineers now ships consistent, breathtaking editorial products in days instead of quarters.',
      author: 'Sora Takahashi',
      role: 'VP of Engineering, Lumina Media',
    },
    themeColor: '#0f172a',
    accentColor: '#38bdf8',
    featured: true,
  },
  {
    id: 'quantum-health',
    title: 'Quantum Precision Diagnostics',
    client: 'Quantum BioLabs',
    year: '2025',
    category: 'Digital Product',
    tagline: 'Next-gen genomics clinician cockpit for whole-genome sequencing analysis',
    description:
      'Designed a mission-critical web app for geneticists to visualize multi-variant genomic mutations, run comparative clinical trials, and generate clinical reports in minutes.',
    tags: ['Genomic Visualization', 'Complex Data Grids', 'HIPAA Ready UI', 'Dark Mode'],
    metrics: [
      { label: 'Diagnostic Turnaround', value: '-65% Time' },
      { label: 'Clinical Error Reduction', value: '99.8%' },
      { label: 'Clinician Satisfaction', value: '4.9 / 5.0' },
    ],
    deliverables: [
      'Clinician User Journey Research',
      'High-Density Data Grid System',
      'Patient Gene Mutation Visualizer',
      'Exportable Diagnostic Reports',
    ],
    testimonial: {
      quote:
        'Apex grasped complex biomedical science effortlessly and rendered it with unparalleled visual clarity and computational speed.',
      author: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer, Quantum BioLabs',
    },
    themeColor: '#09151e',
    accentColor: '#10b981',
    featured: false,
  },
  {
    id: 'aurora-spatial',
    title: 'Aurora Spatial 3D Audio',
    client: 'Aurora Acoustics Ltd.',
    year: '2026',
    category: 'Web Experience',
    tagline: 'Immersive sound staging interactive studio demonstrating binaural audio technology',
    description:
      'Developed a spatial audio playground allowing sound designers to test 3D acoustics, acoustic reverb models, and real-time audio field manipulation right inside the browser.',
    tags: ['Web Audio API', 'Interactive 3D Canvas', 'Audio Engine', 'Zero Dependencies'],
    metrics: [
      { label: 'Audio Engine Latency', value: '< 12ms' },
      { label: 'Studio Signups', value: '120k Creators' },
      { label: 'Average Interaction Time', value: '9m 14s' },
    ],
    deliverables: [
      'Interactive Sound Sandbox',
      '3D Soundstage Controller',
      'Audio Waveform Visualizers',
      'Creative Sound Designer Portal',
    ],
    testimonial: {
      quote:
        'The audio studio Apex built converted 40% of first-time visitors into paying software subscribers. It is pure art.',
      author: 'Julian Mercer',
      role: 'Founder & CEO, Aurora Acoustics',
    },
    themeColor: '#190e24',
    accentColor: '#ec4899',
    featured: false,
  },
];

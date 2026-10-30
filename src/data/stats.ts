export interface AgencyStat {
  value: string;
  label: string;
  description: string;
  badge?: string;
}

export const stats: AgencyStat[] = [
  {
    value: '$480M+',
    label: 'Client Capital Raised',
    description: 'Direct enterprise valuation and Series A-D capital secured following Apex product launches.',
    badge: 'Impact',
  },
  {
    value: '98.4%',
    label: 'Client Partnership Retention',
    description: 'Over 9 out of 10 clients extend into continuous multi-quarter design and engineering retainers.',
    badge: 'Trust',
  },
  {
    value: '42',
    label: 'Global Design & Tech Honors',
    description: 'Recognized across Awwwards, FWA, Red Dot, FastCompany Innovation, and Webby Awards.',
    badge: 'Excellence',
  },
  {
    value: '< 0.4s',
    label: 'Average Global Load Time',
    description: 'Uncompromising performance standards achieved through modern static island architectures.',
    badge: 'Speed',
  },
];

export const clientLogos = [
  { name: 'Synthetix', symbol: 'SYNTHETIX', tag: 'AI Workspace' },
  { name: 'Veloce Cloud', symbol: 'VELOCE', tag: 'Edge Infrastructure' },
  { name: 'Hyperion', symbol: 'HYPERION', tag: 'Deep Tech Fund' },
  { name: 'Lumina Media', symbol: 'LUMINA', tag: 'Global Publishing' },
  { name: 'Quantum Health', symbol: 'QUANTUM', tag: 'Genomics BioLabs' },
  { name: 'Aurora Spatial', symbol: 'AURORA', tag: '3D Sound Lab' },
  { name: 'Starlight Robotics', symbol: 'STARLIGHT', tag: 'Industrial Automation' },
  { name: 'Prism Security', symbol: 'PRISM', tag: 'Zero-Trust Protocol' },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatarInitials: string;
  themeColor: string;
  accentColor: string;
  bio: string;
  specializations: string[];
  accolades: string[];
  favoriteQuote: string;
  socials: { platform: string; url: string; icon: string }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'viktor-keller',
    name: 'Viktor Keller',
    role: 'Founder & Executive Creative Director',
    department: 'Design Leadership',
    avatarInitials: 'VK',
    themeColor: '#0c1527',
    accentColor: '#6366f1',
    bio: 'Viktor has spent 14 years bridging architectural philosophy with digital interface design. Formerly Principal Design Lead at IDEO and Pentagram alumni, he founded Apex to pioneer digital products that feel both timeless and revolutionary.',
    specializations: ['Brand Strategy', 'Spatial Interfaces', 'Typography', 'Creative Direction'],
    accolades: ['ADC Young Guns 19 Winner', '3x Cannes Lions Silver', 'FastCompany Innovation Nominee'],
    favoriteQuote: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
    ],
  },
  {
    id: 'clara-novak',
    name: 'Clara Novak',
    role: 'Partner & Head of Engineering',
    department: 'Engineering',
    avatarInitials: 'CN',
    themeColor: '#0a1723',
    accentColor: '#06b6d4',
    bio: 'Clara is a distributed systems engineer obsessed with zero-runtime client architectures and web performance. She contributed to modern static site tooling, led engineering at Cloudflare Ventures projects, and oversees all client code quality at Apex.',
    specializations: ['Astro Island Architecture', 'Edge Runtimes', 'Performance Audits', 'TypeScript'],
    accolades: ['Open Source Contributor of the Year 2024', 'Author of "Zero-JS Foundations"', 'Speaker at ViteConf'],
    favoriteQuote: 'Fast software is respectful software. Latency is the mind-killer of modern computing.',
    socials: [
      { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    ],
  },
  {
    id: 'sora-takahashi',
    name: 'Sora Takahashi',
    role: 'Design Systems Director',
    department: 'Product Systems',
    avatarInitials: 'ST',
    themeColor: '#120f26',
    accentColor: '#a855f7',
    bio: 'Sora treats component libraries like living ecosystems. Born in Kyoto and based in London, she spent five years architecting cross-platform design tokens for FinTech scaleups before heading Apex’s Design Systems practice.',
    specializations: ['Design Tokens', 'Accessibility WCAG AAA', 'Figma Variables', 'Component Governance'],
    accolades: ['Figma Community Spotlight Award', 'Tokyo Design Forum Keynote', 'DesignOps Council Member'],
    favoriteQuote: 'Order without liberty is tyranny; liberty without order is chaos. Design systems are the harmony.',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Principal 3D & Creative Developer',
    department: 'Creative Tech',
    avatarInitials: 'MC',
    themeColor: '#1a0d24',
    accentColor: '#ec4899',
    bio: 'Marcus blends mathematical generative shaders with kinetic typography. Trained as a computer graphics researcher at MIT Media Lab, he transforms browser canvases into interactive multi-dimensional narratives.',
    specializations: ['WebGL / WebGPU', 'Three.js Shaders', 'Kinetic Animation', 'Interactive Canvases'],
    accolades: ['Awwwards Site of the Month x4', 'FWA of the Day x8', 'SIGGRAPH Art Gallery Exhibitor'],
    favoriteQuote: 'The screen is not a static canvas; it is a portal that responds to human curiosity.',
    socials: [
      { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
  },
  {
    id: 'amara-okafor',
    name: 'Amara Okafor',
    role: 'Head of Brand Strategy & Narrative',
    department: 'Strategy',
    avatarInitials: 'AO',
    themeColor: '#0a1818',
    accentColor: '#10b981',
    bio: 'Amara is an investigative brand strategist who uncovers the authentic differentiator behind deep-tech and consumer breakthroughs. Formerly at Wolff Olins, she has shaped brand positioning for over $3B in cumulative market valuation.',
    specializations: ['Market Positioning', 'Naming & Taxonomy', 'Brand Narrative', 'Go-To-Market Strategy'],
    accolades: ['Forbes 30 Under 30', 'Brand Strategy Grand Prix', 'Harvard Business Review Contributor'],
    favoriteQuote: 'Clarity is the ultimate competitive advantage. When you know who you are, the market listens.',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
  },
  {
    id: 'liam-o-connor',
    name: 'Liam O’Connor',
    role: 'Technical Product Director',
    department: 'Client Engagement',
    avatarInitials: 'LO',
    themeColor: '#151520',
    accentColor: '#f59e0b',
    bio: 'Liam safeguards delivery timelines and product rigor. With a dual background in software engineering and venture operations, he bridges high-level client business objectives with daily agency sprint execution.',
    specializations: ['Agile Product Delivery', 'Technical Scoping', 'Venture Strategy', 'Stakeholder Alignment'],
    accolades: ['Scrum Alliance Certified Lead', 'Former Seed Founder', 'Techstars Mentor'],
    favoriteQuote: 'Strategy is a hypothesis; execution is the experiment. We test relentlessly until excellence emerges.',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
    ],
  },
];

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string; isExternal?: boolean }[];
}

const rawBase = import.meta.env.BASE_URL || '/';
export const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

export const getRelativePath = (path: string): string => {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('#') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const siteConfig = {
  name: 'Apex Agency',
  tagline: 'Strategic Digital Product & Creative Agency',
  description:
    'Apex Agency designs and builds benchmark-setting digital products, next-generation web platforms, and iconic brand identities for venture-backed disruptors and global category leaders.',
  url: 'https://mujtabacloud.github.io/theme-apex-agency',
  github: 'https://github.com/mujtabacloud/theme-apex-agency',
  license: 'MIT',
  contactEmail: 'hello@apexagency.dev',
  contactPhone: '+1 (555) 382-7900',
  foundedYear: '2022',
  offices: [
    { city: 'San Francisco', address: '440 Brannan St, Suite 300, SOMA', timezone: 'PST (UTC-8)' },
    { city: 'London', address: '12 Clerkenwell Close, EC1R 0AT', timezone: 'GMT (UTC+0)' },
    { city: 'Tokyo', address: 'Shibuya Scramble Square 28F', timezone: 'JST (UTC+9)' },
  ],
  navItems: [
    { title: 'Home', href: getRelativePath('/') },
    { title: 'Projects', href: getRelativePath('/projects/'), badge: 'Work' },
    { title: 'Services', href: getRelativePath('/services/') },
    { title: 'About', href: getRelativePath('/about/') },
    { title: 'Contact', href: getRelativePath('/contact/') },
  ] as NavItem[],
  socials: [
    { platform: 'GitHub', url: 'https://github.com/mujtabacloud/theme-apex-agency', icon: 'github' },
    { platform: 'Twitter / X', url: 'https://twitter.com/thempok', icon: 'twitter' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'external-link' },
  ],
  footerSections: [
    {
      title: 'Navigation',
      links: [
        { label: 'Selected Work', href: getRelativePath('/projects/') },
        { label: 'Capabilities & Services', href: getRelativePath('/services/') },
        { label: 'Agency Culture & Team', href: getRelativePath('/about/') },
        { label: 'Inquiry & Booking', href: getRelativePath('/contact/') },
      ],
    },
    {
      title: 'Core Capabilities',
      links: [
        { label: 'Product Architecture', href: getRelativePath('/services/#product-architecture') },
        { label: 'Design Systems & Ops', href: getRelativePath('/services/#design-systems') },
        { label: 'Web & App Engineering', href: getRelativePath('/services/#web-engineering') },
        { label: 'Brand & Motion Identity', href: getRelativePath('/services/#branding-motion') },
      ],
    },
    {
      title: 'Company & Open Source',
      links: [
        { label: 'Thempok Themes Library', href: 'https://github.com/mujtabacloud/thempok', isExternal: true },
        { label: 'GitHub Repository', href: 'https://github.com/mujtabacloud/theme-apex-agency', isExternal: true },
        { label: 'MIT License Terms', href: getRelativePath('/about/#license') },
        { label: 'Privacy & Terms', href: getRelativePath('/contact/#terms') },
      ],
    },
  ] as FooterSection[],
};

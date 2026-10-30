export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-synthetix',
    quote:
      'Apex transformed an impenetrable command-line workflow into the most intuitive AI workspace on the market. In our very next investor quarter, net retention surpassed 140%.',
    author: 'Dr. Elena Rostova',
    role: 'Chief Product Officer',
    company: 'Synthetix AI Systems',
    metric: '+340% User Growth',
    stars: 5,
  },
  {
    id: 't-veloce',
    quote:
      'We asked for impossible specs: sub-50ms page renders, interactive WebGL network routing, and a dark-mode first design system. Apex delivered two weeks ahead of schedule.',
    author: 'Marcus Vance',
    role: 'Head of Developer Relations',
    company: 'Veloce Cloud Networks',
    metric: '100/100 Lighthouse Score',
    stars: 5,
  },
  {
    id: 't-hyperion',
    quote:
      'Finding an agency that comprehends both venture mechanics and aesthetic nuance is extraordinarily rare. Apex elevated our sovereign fund brand to true global stature.',
    author: 'Alistair Sterling',
    role: 'Managing Partner',
    company: 'Hyperion Capital Partners',
    metric: '3x Gold Design Awards',
    stars: 5,
  },
  {
    id: 't-lumina',
    quote:
      'The multi-tenant design system engineered by Apex replaced six disjointed codebases. Our engineering velocity tripled almost overnight without a single regression.',
    author: 'Sora Takahashi',
    role: 'VP of Engineering',
    company: 'Lumina Media Group',
    metric: '3.5x Faster Delivery',
    stars: 5,
  },
];

export type Project = {
  id: string;
  href: string;
  titleKey: string;
  teaserKey: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'menorca',
    titleKey: 'projects.menorcaTitle',
    teaserKey: 'projects.menorcaTeaser',
    href: 'https://menorca.cspadel.com/',
    tags: ['Astro 6', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vite 7', 'i18next', 'Framer Motion', 'Vercel'],
  },
  {
    id: 'marketlab',
    titleKey: 'projects.marketLabTitle',
    teaserKey: 'projects.marketLabTeaser',
    href: 'https://marketlab-pied-pi.vercel.app',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Supabase', 'Zod', 'Bun'],
  },
  {
    id: 'kuyuriy-adolescentes',
    titleKey: 'projects.kuyuriyAdolescentesTitle',
    teaserKey: 'projects.kuyuriyAdolescentesTeaser',
    href: 'https://adolescentes.kuyuriy.com',
    tags: ['Astro 4.0', 'Vercel', 'Node.js', 'TypeScript', 'Jotform', 'Google Analytics', 'Brevo', 'API Payphone', 'API Dora'],
  },
  {
    id: 'kuyuriy-centro',
    titleKey: 'projects.kuyuriyCentroTitle',
    teaserKey: 'projects.kuyuriyCentroTeaser',
    href: 'https://kuyuriy.com',
    tags: ['WordPress', 'Divi', 'Jotform', 'Analytics'],
  },
  {
    id: 'cspadel',
    titleKey: 'projects.cspadelTitle',
    teaserKey: 'projects.cspadelTeaser',
    href: 'https://miami.cspadel.com',
    tags: ['WordPress', 'Elementor', 'Astro 4.0', 'Jotform', 'Vercel'],
  },
  {
    id: 'natipsicope',
    titleKey: 'projects.natipsicopeTitle',
    teaserKey: 'projects.natipsicopeTeaser',
    href: 'https://funciones-ejecutivas.natipsicope.com',
    tags: ['ReactJS', 'Jotform'],
  },
  {
    id: 'andesvelo',
    titleKey: 'projects.andesVeloTitle',
    teaserKey: 'projects.andesVeloTeaser',
    href: 'https://andes-velo-cycling.vercel.app',
    tags: ['ReactJS', 'TypeScript', 'Node.js'],
  },
  {
    id: 'campus-autospa',
    titleKey: 'projects.campusAutoSpaTitle',
    teaserKey: 'projects.campusAutoSpaTeaser',
    href: 'https://campus-auto-spa.vercel.app',
    tags: ['Astro 4.0', 'ReactJS', 'Supabase', 'Node.js'],
  },
];

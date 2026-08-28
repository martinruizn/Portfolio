export type TalkLocation =
  | { type: 'virtual'; name: string }
  | { type: 'place'; name: string; addressLocality?: string; addressCountry?: string };

export type Talk = {
  id: string;
  image: string;
  fit?: 'contain';
  eventKey: string;
  titleKey: string;
  bodyKey: string;
  metaKey: string;
  startDate?: string;
  attendance?: 'online' | 'offline';
  location: TalkLocation;
};

export const talks: Talk[] = [
  {
    id: 'ceutec',
    image: '/speaking/ceutec-ecommerce.jpg',
    fit: 'contain',
    eventKey: 'speaking.ceutecEvent',
    titleKey: 'speaking.ceutecTitle',
    bodyKey: 'speaking.ceutecBody',
    metaKey: 'speaking.ceutecMeta',
    startDate: '2026-08-25',
    attendance: 'online',
    location: { type: 'virtual', name: 'Zoom' },
  },
  {
    id: 'workshop',
    image: '/speaking/cursor-workshop-human-bug.jpg',
    eventKey: 'speaking.workshopEvent',
    titleKey: 'speaking.workshopTitle',
    bodyKey: 'speaking.workshopBody',
    metaKey: 'speaking.workshopMeta',
    attendance: 'offline',
    location: { type: 'place', name: 'Ecuador', addressCountry: 'EC' },
  },
  {
    id: 'santo',
    image: '/speaking/cursor-santo-domingo.jpg',
    eventKey: 'speaking.santoEvent',
    titleKey: 'speaking.santoTitle',
    bodyKey: 'speaking.santoBody',
    metaKey: 'speaking.santoMeta',
    startDate: '2026-07-05',
    attendance: 'offline',
    location: {
      type: 'place',
      name: 'Santo Domingo, Ecuador',
      addressLocality: 'Santo Domingo',
      addressCountry: 'EC',
    },
  },
  {
    id: 'medusa',
    image: '/speaking/medusa-ecommerce.jpg',
    eventKey: 'speaking.medusaEvent',
    titleKey: 'speaking.medusaTitle',
    bodyKey: 'speaking.medusaBody',
    metaKey: 'speaking.medusaMeta',
    attendance: 'offline',
    location: { type: 'place', name: 'Ecuador', addressCountry: 'EC' },
  },
  {
    id: 'deviathon',
    image: '/speaking/deviathon-upec.jpg',
    eventKey: 'speaking.deviathonEvent',
    titleKey: 'speaking.deviathonTitle',
    bodyKey: 'speaking.deviathonBody',
    metaKey: 'speaking.deviathonMeta',
    startDate: '2026',
    attendance: 'offline',
    location: { type: 'place', name: 'UPEC', addressCountry: 'EC' },
  },
];

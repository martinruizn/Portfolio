import { projects } from '../data/projects';
import { talks } from '../data/talks';
import {
  type Lang,
  absoluteUrl,
  localeCanonicalPath,
  localeMeta,
  useTranslations,
} from '../i18n';

type JsonLdNode = Record<string, unknown>;

export function buildJsonLd({ lang, site }: { lang: Lang; site: string }) {
  const t = useTranslations(lang);
  const origin = site.endsWith('/') ? site : `${site}/`;
  const canonical = absoluteUrl(localeCanonicalPath(lang), origin);
  const alternateEs = absoluteUrl(localeCanonicalPath('es'), origin);
  const title = t('meta.homeTitle');
  const description = t('meta.homeDescription');
  const inLanguage = localeMeta[lang].bcp47;

  const personId = absoluteUrl('#person', origin);
  const photoId = absoluteUrl('#photo', origin);
  const websiteId = absoluteUrl('#website', origin);
  const citusId = absoluteUrl('#org-citus', origin);
  const gdgId = absoluteUrl('#org-gdg', origin);
  const quitoId = absoluteUrl('#place-quito', origin);
  const speakingListId = absoluteUrl('#speaking', origin);
  const projectsListId = absoluteUrl('#projects', origin);
  const pageId = `${canonical}#webpage`;
  const avatar = absoluteUrl('/avatar.jpg', origin);

  const photo: JsonLdNode = {
    '@type': 'ImageObject',
    '@id': photoId,
    url: avatar,
    contentUrl: avatar,
    caption: 'Martin Ruiz',
  };

  const citus: JsonLdNode = {
    '@type': 'Organization',
    '@id': citusId,
    name: 'Citus.dev',
    url: 'https://citus.dev',
  };

  const gdg: JsonLdNode = {
    '@type': 'Organization',
    '@id': gdgId,
    name: 'GDG Quito',
  };

  const quito: JsonLdNode = {
    '@type': 'Place',
    '@id': quitoId,
    name: 'Quito',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Quito',
      addressCountry: 'EC',
    },
  };

  const person: JsonLdNode = {
    '@type': 'Person',
    '@id': personId,
    name: 'Martin Ruiz',
    givenName: 'Martin',
    familyName: 'Ruiz',
    alternateName: 'Martín Ruiz',
    jobTitle: 'Forward Deployed Engineer',
    description,
    url: alternateEs,
    email: 'mailto:martinruiz91n@gmail.com',
    image: { '@id': photoId },
    homeLocation: { '@id': quitoId },
    worksFor: { '@id': citusId },
    memberOf: { '@id': gdgId },
    knowsLanguage: ['es', 'en'],
    sameAs: [
      'https://www.linkedin.com/in/martin-ruizn/',
      'https://github.com/martinruizn',
    ],
  };

  const website: JsonLdNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: alternateEs,
    name: 'Martin Ruiz',
    inLanguage: ['es-EC', 'en-US'],
    publisher: { '@id': personId },
  };

  const eventNodes: JsonLdNode[] = talks.map((talk) => {
    const node: JsonLdNode = {
      '@type': 'Event',
      '@id': absoluteUrl(`#event-${talk.id}`, origin),
      name: t(talk.titleKey),
      description: t(talk.bodyKey),
      image: absoluteUrl(talk.image, origin),
      performer: { '@id': personId },
      eventAttendanceMode:
        talk.attendance === 'online'
          ? 'https://schema.org/OnlineEventAttendanceMode'
          : 'https://schema.org/OfflineEventAttendanceMode',
      location:
        talk.location.type === 'virtual'
          ? { '@type': 'VirtualLocation', name: talk.location.name }
          : {
              '@type': 'Place',
              name: talk.location.name,
              address: {
                '@type': 'PostalAddress',
                ...(talk.location.addressLocality
                  ? { addressLocality: talk.location.addressLocality }
                  : {}),
                ...(talk.location.addressCountry
                  ? { addressCountry: talk.location.addressCountry }
                  : {}),
              },
            },
    };
    if (talk.startDate) node.startDate = talk.startDate;
    return node;
  });

  const speakingList: JsonLdNode = {
    '@type': 'ItemList',
    '@id': speakingListId,
    name: t('speaking.sectionTitle'),
    numberOfItems: talks.length,
    itemListElement: talks.map((talk, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@id': absoluteUrl(`#event-${talk.id}`, origin) },
    })),
  };

  const projectNodes: JsonLdNode[] = projects.map((project) => ({
    '@type': 'CreativeWork',
    '@id': absoluteUrl(`#project-${project.id}`, origin),
    name: t(project.titleKey),
    description: t(project.teaserKey),
    url: project.href,
    keywords: project.tags,
    creator: { '@id': personId },
  }));

  const projectsList: JsonLdNode = {
    '@type': 'ItemList',
    '@id': projectsListId,
    name: t('home.recentProjects'),
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@id': absoluteUrl(`#project-${project.id}`, origin) },
    })),
  };

  const page: JsonLdNode = {
    '@type': 'ProfilePage',
    '@id': pageId,
    url: canonical,
    name: title,
    description,
    inLanguage,
    isPartOf: { '@id': websiteId },
    about: { '@id': personId },
    mainEntity: { '@id': personId },
    primaryImageOfPage: { '@id': photoId },
    hasPart: [{ '@id': speakingListId }, { '@id': projectsListId }],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      photo,
      citus,
      gdg,
      quito,
      website,
      page,
      speakingList,
      ...eventNodes,
      projectsList,
      ...projectNodes,
    ],
  };
}

import en from './en.json';
import es from './es.json';

export type Lang = 'en' | 'es';
type Dict = typeof en;

export const defaultLang: Lang = 'es';
export const locales: Lang[] = ['es', 'en'];

const dictionaries: Record<Lang, Dict> = { en, es };

export const localeMeta = {
  es: {
    html: 'es',
    og: 'es_EC',
    ogAlternate: 'en_US',
    bcp47: 'es-EC',
    path: '/',
  },
  en: {
    html: 'en',
    og: 'en_US',
    ogAlternate: 'es_EC',
    bcp47: 'en-US',
    path: '/en/',
  },
} as const;

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

/** In-site href: `/` or `/en`, plus optional hash (`/#about`, `/en#about`). */
export function localePath(lang: Lang, hash = ''): string {
  const h = hash ? (hash.startsWith('#') ? hash : `#${hash}`) : '';
  if (lang === 'en') return `/en${h}`;
  return h ? `/${h}` : '/';
}

export function localeCanonicalPath(lang: Lang): string {
  return localeMeta[lang].path;
}

export function absoluteUrl(path: string, site = 'https://martinruiz.dev'): string {
  return new URL(path, site).href;
}

export function useTranslations(lang: Lang) {
  const dict = dictionaries[lang] ?? dictionaries.es;
  return function t(path: string): string {
    try {
      const value = path
        .split('.')
        .reduce<unknown>((acc, key) => (acc as Record<string, unknown>)[key], dict);
      return typeof value === 'string' ? value : path;
    } catch {
      return path;
    }
  };
}

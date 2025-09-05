import en from './en.json';
import es from './es.json';

type Dict = typeof en;

const dictionaries: Record<string, Dict> = { en, es };

export function getLang(): 'en' | 'es' {
  if (typeof document !== 'undefined') {
    const l = document.documentElement.lang;
    return l === 'en' ? 'en' : 'es';
  }
  return 'es';
}

export function getT(lang: 'en' | 'es' = getLang()) {
  const dict = dictionaries[lang] ?? dictionaries.es;
  return function t(path: string): string {
    try {
      return path
        .split('.')
        .reduce<any>((acc, key) => acc[key], dict) as string;
    } catch {
      return path;
    }
  };
}

export function onLangChange(callback: (lang: 'en' | 'es') => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const lang = (e as CustomEvent).detail as 'en' | 'es';
    callback(lang);
  };
  window.addEventListener('lang-change', handler as EventListener);
  return () =>
    window.removeEventListener('lang-change', handler as EventListener);
}

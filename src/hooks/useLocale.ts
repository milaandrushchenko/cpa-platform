import { useLocation, useNavigate } from 'react-router-dom';

import {
  DEFAULT_LOCALE,
  type Locale,
  SUPPORTED_LOCALES,
} from '@/config/locales';

function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function useLocale() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const currentLocale = pathname.split('/')[1];
  const locale: Locale =
    currentLocale && isLocale(currentLocale) ? currentLocale : DEFAULT_LOCALE;

  const getLocalizedPath = (targetLocale: Locale): string => {
    const segments = pathname.split('/');

    if (segments[1] && isLocale(segments[1])) {
      segments.splice(1, 1);
    }

    if (targetLocale !== DEFAULT_LOCALE) {
      segments.splice(1, 0, targetLocale);
    }

    const newPathname = segments.join('/') || '/';
    return `${newPathname}${search}`;
  };

  const changeLocale = (targetLocale: Locale) => {
    if (targetLocale === locale) return;
    void navigate(getLocalizedPath(targetLocale));
  };

  return {
    locale,
    getLocalizedPath,
    changeLocale,
  };
}

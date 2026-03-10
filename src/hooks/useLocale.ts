import { useLocation } from 'react-router-dom';

import {
  DEFAULT_LOCALE,
  type Locale,
  SUPPORTED_LOCALES,
} from '@/constants/locales';

function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function useLocale(): Locale {
  const { pathname } = useLocation();

  const locale = pathname.split('/')[1];

  if (locale && isLocale(locale)) {
    return locale;
  }

  return DEFAULT_LOCALE;
}

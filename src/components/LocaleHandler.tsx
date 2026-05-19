import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { useLocale } from '@/hooks/useLocale';

export default function LocaleHandler() {
  const { i18n } = useTranslation();
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return <Outlet />;
}

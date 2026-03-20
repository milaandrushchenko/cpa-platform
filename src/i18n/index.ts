import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import { DEFAULT_LOCALE } from '@/config/locales';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

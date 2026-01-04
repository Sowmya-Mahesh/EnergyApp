import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import JSON translation files
import en from './locales/en.json';
import is from './locales/is.json';

i18n
  .use(LanguageDetector) // detects user language automatically
  .use(initReactI18next) // binds i18next to React
  .init({
    resources: {
      en: { translation: en },
      is: { translation: is },
    },
    fallbackLng: 'en', // default language
    interpolation: { escapeValue: false },
  });

export default i18n;

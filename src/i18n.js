import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isDevelopment = process.env.NODE_ENV === 'development';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',

    fallbackLng: 'en',

    debug: isDevelopment,

    keySeparator: '.',

    ns: ['common'],

    defaultNS: 'common',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

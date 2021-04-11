import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en.json';
import translationKR from './locales/kr.json';

const resources = {
  en: {
    translation: translationEN
  },
  kr: {
    translation: translationKR
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
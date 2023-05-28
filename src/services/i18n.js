import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translationEN.json";
import translationAR from "./translationAR.json";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN,
  },

  ar: {
    translation: translationAR,
  },
};

i18next

  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,

    lng: "ar",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

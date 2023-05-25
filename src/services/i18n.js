import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translationEN.json";
import translationAR from "./translationAR.json";

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
  .init({
    resources,

    lng: "ar",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

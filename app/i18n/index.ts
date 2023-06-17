import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ko from "./ko.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

export const languages = [
  {
    text: "KO",
    code: "ko",
  },
  {
    text: "EN",
    code: "en",
  },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

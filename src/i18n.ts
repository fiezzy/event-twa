import i18n, { use } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import common_en from 'locales/en/common.json'
import common_ru from './locales/ru/common.json'

export const resources = {
  en: {
    common: common_en,
  },
  ru: {
    common: common_ru,
  },
} as const

export const defaultNS = 'common'

use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    ns: Object.keys(resources.en),
    defaultNS,
    resources,
  })

export default i18n

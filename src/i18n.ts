import i18n, { use } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import * as blocks_en from 'locales/en/blocks'
import common_en from 'locales/en/common.json'
import * as blocks_ru from 'locales/ru/blocks'
import common_ru from './locales/ru/common.json'

export const resources = {
  en: {
    ...blocks_en,
    common_en,
  },
  ru: {
    ...blocks_ru,
    common_ru,
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

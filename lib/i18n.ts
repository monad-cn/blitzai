'use client'

import i18n from 'i18next'
import { initReactI18next, useTranslation as useTranslationBase } from 'react-i18next'
import en from '@/locales/en.json'
import zhCN from '@/locales/zh-CN.json'

const resources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN }
}

const getStoredLanguage = () => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return window.localStorage.getItem('language')
  } catch {
    return null
  }
}

const normalizeLanguage = (language?: string) => {
  if (!language) {
    return 'en'
  }

  const normalized = language.toLowerCase()
  if (normalized.startsWith('zh')) {
    return 'zh-CN'
  }

  return 'en'
}

const initialLanguage =
  normalizeLanguage(getStoredLanguage() ?? 'en')

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })
}

export const useTranslation = useTranslationBase

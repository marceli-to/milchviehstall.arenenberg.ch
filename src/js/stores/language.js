import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const current = ref('de')
  const messages = ref({})

  const loadLanguage = async (lang) => {
    if (lang === 'de') {
      messages.value = {}
    } else {
      try {
        const translations = await import(`@/lang/${lang}.json`)
        messages.value = translations.default
      } catch (e) {
        console.warn(`No translations found for "${lang}", falling back to keys.`)
        messages.value = {}
      }
    }

    current.value = lang
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }

  const __ = (key) => {
    return messages.value[key] || key
  }

  return {
    current,
    messages,
    loadLanguage,
    __,
  }
})

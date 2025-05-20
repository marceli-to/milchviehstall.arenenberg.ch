<template>
  <nav class="w-full flex justify-center mt-40">
    <ul class="flex gap-64">
      <li v-for="lang in languages" :key="lang.code">
        <button
          @click="loadLanguage(lang.code)"
          :title="lang.label"
          :aria-label="lang.label"
          :class="[
            'flex justify-center items-center w-60 h-60 font-gt-alpina-bold text-2xl rounded-full border-2 border-crimson transition-all duration-200',
            current === lang.code
              ? 'bg-crimson text-blush'
              : 'text-crimson hover:bg-crimson hover:text-blush'
          ]">
          {{ lang.abbr }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useLanguageStore } from '@/js/stores/language'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { current } = storeToRefs(languageStore)
const { loadLanguage } = languageStore

const languages = [
  { code: 'de', label: 'Deutsch', abbr: 'D' },
  { code: 'fr', label: 'Français', abbr: 'F' },
  { code: 'en', label: 'English', abbr: 'E' }
]
</script>

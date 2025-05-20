<template>
  <nav class="w-full flex justify-center mt-40">
    <ul :class="['flex', isHomepage ? 'gap-64' : 'gap-18']">
      <li v-for="lang in languages" :key="lang.code">
        <button
          @click="loadLanguage(lang.code)"
          :title="lang.label"
          :aria-label="lang.label"
          :class="[
            'flex justify-center items-center font-gt-alpina-bold rounded-full border-2 border-crimson transition-all duration-200',
            isHomepage
              ? 'w-60 h-60 text-3xl'
              : 'w-36 h-36 text-sm',
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

const props = defineProps({
  isHomepage: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const languages = [
  { code: 'de', label: 'Deutsch', abbr: 'D' },
  { code: 'fr', label: 'Français', abbr: 'F' },
  { code: 'en', label: 'English', abbr: 'E' }
]
</script>

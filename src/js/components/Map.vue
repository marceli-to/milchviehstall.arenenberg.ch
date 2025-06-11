<template>
  <figure class="relative">
    <img
      :src="step?.mapImage || defaultMapImage"
      class="block w-full h-auto"
    />
    <img
      :src="`map-digitaler-kuhstall-text-${currentLang}.png`"
      class="block w-full h-auto absolute top-0 left-0"
    />
  </figure>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '@/js/stores/language'

const props = defineProps({ step: Object })

const languageStore = useLanguageStore()
const currentLang = computed(() => languageStore.current)

const defaultMapImage = 'map-digitaler-kuhstall.png'
</script>


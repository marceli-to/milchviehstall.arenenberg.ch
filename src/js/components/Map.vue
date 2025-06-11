<template>
  <figure class="relative">
    <!-- Show dynamic timeline image if available -->
    <img
      v-if="step?.mapImage"
      :src="getImageUrl(step.mapImage)"
      width="1319" height="714"
      alt=""
      class="block w-full h-auto"
    />

    <!-- Fallback image if no step is selected -->
    <img
      v-else
      src="/img/map-digitaler-kuhstall.png"
      width="1319" height="714"
      alt=""
      class="block w-full h-auto"
    />

    <!-- Language overlay (always shown) -->
    <img
      :src="`/img/map-digitaler-kuhstall-text-${currentLang}.png`"
      width="1319" height="714"
      alt=""
      class="block w-full h-auto absolute top-0 left-0"
    />
  </figure>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '@/js/stores/language'

const languageStore = useLanguageStore()
const currentLang = computed(() => languageStore.current)

const props = defineProps({
  step: Object
})

// Import all possible timeline images and map them to URLs
const images = import.meta.glob('/img/map-digitaler-kuhstall-*.png', {
  eager: true,
  as: 'url'
})

// Utility function to safely get the correct image URL
function getImageUrl(filename) {
  return images[`/img/${filename}`] || ''
}
</script>


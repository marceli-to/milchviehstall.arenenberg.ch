
<template>
  <figure class="relative">
    <!-- Dynamic image based on the timeline step -->
    <img
      v-if="step?.mapImage"
      :src="getImageUrl(step.mapImage)"
      width="1319" height="714"
      alt=""
      class="block w-full h-auto"
    />

    <!-- Fallback static background image -->
    <img
      v-else
      src="/img/map-digitaler-kuhstall.png"
      width="1319" height="714"
      alt=""
      class="block w-full h-auto"
    />

    <!-- Always show language overlay -->
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

// Updated import.meta.glob using the correct options
const images = import.meta.glob('@/assets/img/map-digitaler-kuhstall-*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

// Utility to resolve image URLs from filenames
function getImageUrl(filename) {
  return images[`@/assets/img/${filename}`] || ''
}
</script>

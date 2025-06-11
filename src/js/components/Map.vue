<template>
  <figure class="relative">
    <!-- Default background image if no step image -->
    <img 
      v-if="!props.step?.mapImage"
      src="@/map-digitaler-kuhstall.png" 
      width="1319" height="714" 
      alt="" 
      class="block w-full h-auto" 
      loading="lazy"
    >

    <!-- Dynamic image if step is available -->
    <img 
      v-else
      :src="`@/${props.step.mapImage}`" 
      width="1319" height="714" 
      alt="" 
      class="block w-full h-auto" 
      loading="lazy"
    >

    <!-- Language overlay stays on top -->
    <img 
      :src="`@/map-digitaler-kuhstall-text-${currentLang}.png`" 
      width="1319" height="714" 
      alt="" 
      class="block w-full h-auto absolute top-0 left-0"
      loading="lazy"
    >
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
</script>

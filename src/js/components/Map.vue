<template>
  <figure class="relative">
    <img src="/img/map-digitaler-kuhstall.png" width="1319" height="714" alt="" class="block w-full h-auto">
    <img :src="`/img/map-digitaler-kuhstall-text-${currentLang}.png`" width="1319" height="714" alt="" class="block w-full h-auto absolute top-0 left-0">
  </figure>
</template>
<script setup>
import { useLanguageStore } from '@/js/stores/language'
import { computed, onMounted } from 'vue'
const languageStore = useLanguageStore()
const currentLang = computed(() => languageStore.current)
</script>

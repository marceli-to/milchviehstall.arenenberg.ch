<template>
  <Header />
  <Main class="w-full flex flex-col items-center justify-center pt-44">
    <HeadingOne class="text-5xl">
      {{ __('Passcode') }}
    </HeadingOne>
  </Main>
</template>
<script setup>
import Header from '@/js/components/layout/Header.vue';
import Main from '@/js/components/layout/Main.vue';
import MenuLanguage from '@/js/components/menu/Language.vue';
import ButtonPrimary from '@/js/components/buttons/Primary.vue';
import HeadingOne from '@/js/components/headings/H1.vue';

import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

</script>
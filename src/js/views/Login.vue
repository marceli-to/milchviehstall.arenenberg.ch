<template>
  <Header />
  <Main class="w-full h-[985px] flex flex-col items-center justify-between py-44">
    <HeadingOne class="text-5xl">
      {{ __('Passcode') }}
    </HeadingOne>
    <div class="my-40">
      [Login Form / Tastatur]
    </div>
    <div class="mt-30 w-full flex justify-center">
      <ButtonPrimary :label="__('Start')" to="/parcours" isLink />
    </div>
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
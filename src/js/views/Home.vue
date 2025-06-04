<template>
  <Header :isHomepage="true" />
  <Main>
    <figure>
      <img src="/img/visual-digitaler-kuhstall.png" width="1868" height="682" alt="" class="w-full h-auto">
    </figure>
  </Main>
  <div class="absolute left-1/2 -translate-x-1/2 -bottom-54">
    <MenuLanguage :isHomepage="true" />
    <div class="mt-30 flex justify-center">
      <ButtonPrimary :label="__('Start')" to="/login" isLink />
    </div>
  </div>
</template>
<script setup>
import Header from '@/js/components/layout/Header.vue';
import Main from '@/js/components/layout/Main.vue';
import MenuLanguage from '@/js/components/menu/Language.vue';
import ButtonPrimary from '@/js/components/buttons/Primary.vue';

import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

</script>
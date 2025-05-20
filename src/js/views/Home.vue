<template>
  <Header :isHomepage="true">
    <div class="text-crimson text-4xl leading-none">
      <span class="block">Digitaler Kuhstall</span>
      <span class="block ml-155">Étable à vaches numérique</span>
      <span class="block ml-250">Digital cowshed</span>
    </div>
  </Header>
  <Main>
    <figure>
      <img src="/img/visual-digitaler-kuhstall.png" width="1868" height="682" alt="" class="w-full h-auto">
    </figure>
  </Main>
</template>
<script setup>
import Header from '@/js/components/layout/Header.vue';
import Main from '@/js/components/layout/Main.vue';
</script>
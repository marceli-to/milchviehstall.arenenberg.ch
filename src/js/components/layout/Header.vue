<template>
  <template v-if="props.isHomepage">
    <header class="w-full p-24 !pb-0 relative flex justify-center items-center">
      <div class="text-crimson text-5xl leading-none">
        <span class="block">Milch mit Zukunft</span>
        <span class="block ml-156">Un lait qui a de l'avenir</span>
        <span class="block ml-376">Milk with a future</span>
      </div>
      <!-- 
      <button 
        class="absolute top-37 right-24 z-10 w-29 h-20 flex justify-center items-center" 
        @click="showMenu = !showMenu">
        <IconBurger v-if="!showMenu" />
        <IconCross v-else />
      </button>
      -->
    </header>
  </template>
  <template v-else>
    <header class="w-[1872px] py-24 mx-24 relative grid grid-cols-18 gap-x-20 items-center border-b border-evergreen">
      <div class="col-span-6">
        <HeadingOne>
          <router-link to="/">
            {{ __('Kaiser, Kühe und Kultur') }}
            <span class="block text-sm mt-2">
              {{ __('Ein Parcours durch die Arenenberger Vielfalt') }}
            </span>
          </router-link>
        </HeadingOne>
      </div>
      <div class="col-span-6 text-center text-crimson text-4xl leading-none">
        {{ __('Milch mit Zukunft') }}
      </div>
      <div class="col-span-6 flex items-center gap-24">
        <MenuLanguage class="!justify-end" />
        <!-- <button
          class="w-29 h-20 shrink-0 flex justify-center items-center" 
          @click="showMenu = !showMenu">
          <IconBurger v-if="!showMenu" />
          <IconCross v-else />
        </button> -->
      </div>
    </header>
  </template>

  <MenuInfo :isOpen="showMenu" :isHomepage="props.isHomepage" />

</template>
<script setup>
import { ref } from 'vue';
import MenuInfo from '@/js/components/menu/Info.vue';
import IconBurger from '@/js/components/icons/Burger.vue';
import IconCross from '@/js/components/icons/Cross.vue';
import HeadingOne from '@/js/components/headings/H1.vue';
import MenuLanguage from '@/js/components/menu/Language.vue';

import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

const props = defineProps({
  isHomepage: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const showMenu = ref(false);
</script>

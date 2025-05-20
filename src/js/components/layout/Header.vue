<template>
  <header 
    class="w-full p-24 relative" 
    :class="{ 'flex justify-center items-center !pb-0': props.isHomepage }">
    <slot />
    <a href="#" 
      class="absolute top-24 right-24 z-10 w-29 h-20 flex justify-center items-center" 
      @click="showMenu = !showMenu">
      <IconBurger v-if="!showMenu" />
      <IconCross v-else />
    </a>
  </header>
  <MenuInfo :isOpen="showMenu" :isHomepage="props.isHomepage" />
</template>
<script setup>
import { ref } from 'vue';
import MenuInfo from '@/js/components/menu/Info.vue';
import IconBurger from '@/js/components/icons/Burger.vue';
import IconCross from '@/js/components/icons/Cross.vue';

const props = defineProps({
  isHomepage: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const showMenu = ref(false);
</script>

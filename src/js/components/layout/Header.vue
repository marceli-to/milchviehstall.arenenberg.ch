<template>
  <header 
    class="w-full p-24 relative" 
    :class="{ 'flex justify-center items-center !pb-0': props.isHomepage }">
    <slot />
  </header>
</template>
<script setup>
const props = defineProps({
  isHomepage: {
    type: Boolean,
    required: false,
    default: false,
  },
});

console.log(props.isHomepage);
</script>

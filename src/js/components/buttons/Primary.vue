<template>
  <button v-if="!props.isLink" class="btn-primary">
    {{ props.label }}
  </button>
  <router-link v-else :to="props.to" class="btn-primary">
    {{ props.label }}
  </router-link>
</template>
<script setup>

const props = defineProps({
  isLink: {
    type: Boolean,
    required: false,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
<style scoped>
.btn-primary {
  @apply text-lg rounded-full border-2 border-evergreen hover:border-crimson hover:text-crimson transition-all w-full h-42 flex justify-center items-center max-w-200;
}
</style>
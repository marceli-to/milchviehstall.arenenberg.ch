<template>
  <Transition
    @enter="onEnter"
    @leave="onLeave"
  >
    <div
      v-show="show"
      ref="el"
      class="fade-expand overflow-hidden"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  delay: {
    type: Number,
    default: 0.25, // seconds
  },
  duration: {
    type: Number,
    default: 0.35, // seconds
  },
})

const el = ref(null)

const onEnter = (elEl) => {
  elEl.style.height = '0'
  elEl.style.opacity = '0'
  elEl.style.transform = 'translateY(10px)'
  elEl.style.transition = `height ${props.duration}s ease, opacity 0.25s ${props.delay}s ease, transform 0.25s ${props.delay}s ease`

  requestAnimationFrame(() => {
    elEl.style.height = elEl.scrollHeight + 'px'
    elEl.style.opacity = '1'
    elEl.style.transform = 'translateY(0)'
  })
}

const onLeave = (elEl) => {
  elEl.style.height = elEl.scrollHeight + 'px'
  elEl.style.opacity = '1'
  elEl.style.transform = 'translateY(0)'
  elEl.style.transition = `height ${props.duration}s ease, opacity 0.25s ease, transform 0.25s ease`

  requestAnimationFrame(() => {
    elEl.style.height = '0'
    elEl.style.opacity = '0'
    elEl.style.transform = 'translateY(10px)'
  })
}
</script>

<style scoped>
.fade-expand {
  will-change: height, opacity, transform;
}
</style>

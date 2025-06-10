<template>
  <div v-if="steps.length" class="flex relative h-[620px]">
    <!-- Timeline column -->
    <div class="relative w-40 flex justify-center">
      <!-- Full vertical line -->
      <div class="absolute top-0 bottom-0 w-[2px] bg-evergreen"></div>

      <!-- Steps + labels -->

      <!-- Start step -->
      <!-- <div class="absolute flex flex-col items-center top-0">
        <span 
          class="text-xs absolute left-13 top-0">
          06.00
        </span>
      </div> -->
      <!-- // Start step -->

      <!-- Steps -->
      <div
        v-for="(step, i) in steps"
        :key="i"
        class="absolute flex flex-col items-center"
        @click="goToStep(i)"
        :style="{ top: `${step.position}%` }">
        <span 
          class="text-xs absolute left-20 whitespace-nowrap"
          v-if="i != activeIndex">
          {{ __(step.time) }}
        </span>
        <div class="w-14 h-14 rounded-full bg-evergreen border-2 border-blush cursor-pointer"></div>
      </div>
      <!-- // Steps -->

      <!-- End step -->
      <div class="absolute flex flex-col items-center bottom-0">
        <span 
          class="text-xs absolute left-13 bottom-0 whitespace-nowrap">
          {{ __("22.00") }}
        </span>
      </div>
      <!-- // End step -->

      <!-- Active step + triangles -->
      <div
        class="absolute left-1/2 -translate-x-1/2 -translate-y-28 flex flex-col items-center transition-all duration-500"
        :style="steps[activeIndex] ? { top: `${steps[activeIndex].position}%` } : {}">
        <button @click="goToPreviousStep" class="text-crimson">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-34 h-auto">
            <path d="M11.748 1.97198L21.748 18.972H1.74805L11.748 1.97198Z" fill="#D22837" stroke="#FBE1E9" stroke-width="2"/>
          </svg>
        </button>
        <div class="size-17 bg-crimson rounded-full border-2 border-blush"></div>
        <button @click="goToNextStep" class="text-crimson">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-34 h-auto">
            <path d="M11.748 18L1.74805 1L21.748 1L11.748 18Z" fill="#D22837" stroke="#FBE1E9" stroke-width="2"/>
          </svg>
        </button>
      </div>

    </div>

    <!-- Content column -->
    <div class="flex-1 relative">

      <!-- Top > Down -->
      <transition name="fade" mode="out-in">
        <div
          v-if="steps[activeIndex] && steps[activeIndex].position < 50"
          :key="'top-' + activeIndex"
          class="absolute left-0 w-full flex flex-col gap-x-20"
          :style="{ top: `${steps[activeIndex].position}%` }">

          <div class="flex ml-59">
            <div class="w-[40%] flex flex-col justify-start">
              <h3 class="text-xl text-crimson">{{ __(steps[activeIndex].timeLabel) }}</h3>
              <p class="text-sm">{{ __(steps[activeIndex].timeDescription) }}</p>
            </div>
            <div class="w-[60%] pl-8">
              <h3 class="text-xl text-crimson">{{ __(steps[activeIndex].title) }}</h3>
              <div class="text-sm" v-if="steps[activeIndex].description">
                {{ __(steps[activeIndex].description) }}
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- // Top > Down-->

      <!-- Bottom < Up -->
      <transition name="fade" mode="out-in">
        <div
          v-if="steps[activeIndex] && steps[activeIndex].position >= 50"
          :key="'bottom-' + activeIndex"
          class="absolute left-0 w-full flex flex-col gap-x-20"
          :style="{ bottom: `${90 - steps[activeIndex].position}%` }">

          <div class="flex ml-59">
            <div class="w-[40%] flex flex-col justify-end">
              <h3 class="text-xl text-crimson">{{ __(steps[activeIndex].timeLabel) }}</h3>
              <p class="text-sm">{{ __(steps[activeIndex].timeDescription) }}</p>
            </div>
            <div class="w-[60%]">
              <h3 class="text-xl text-crimson">{{ __(steps[activeIndex].title) }}</h3>
              <div class="text-sm" v-if="steps[activeIndex].description">
                {{ __(steps[activeIndex].description) }}
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- // Bottom < Up-->

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

const props = defineProps({
  persona: {
    type: String,
    required: true
  }
})

const steps = ref([])
const activeIndex = ref(0)

const timelineMap = {
  cow: () => import('@/data/timeline-cow.json'),
  farmer: () => import('@/data/timeline-farmer.json')
}

watch(() => props.persona, async (newPersona) => {
  activeIndex.value = 0
  if (timelineMap[newPersona]) {
    const module = await timelineMap[newPersona]()
    steps.value = module.default
  }
}, { immediate: true })

function goToPreviousStep() {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}

function goToNextStep() {
  if (activeIndex.value < steps.value.length - 1) {
    activeIndex.value++
  }
}

function goToStep(index) {
  if (index >= 0 && index < steps.value.length) {
    activeIndex.value = index
  }
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
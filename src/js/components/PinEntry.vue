<template>
  
  <div class="flex flex-col items-center mt-150">

    <!-- Digit slots -->
    <div class="relative">
      <div class="flex gap-24 text-5xl">
        <div v-for="(digit, i) in pin" :key="i" class="w-56 h-64 pb-4 text-center border-b-2 border-evergreen">
          {{ digit }}
        </div>
      </div>

      <!-- Error message -->
      <div v-if="showError" class="text-crimson text-sm text-center w-full absolute -bottom-32">
        {{ __('Ungültige Eingabe!') }}
      </div>
    </div>

    <!-- Numpad -->
    <div class="grid grid-cols-3 gap-x-30 gap-y-26 text-3xl mt-150">
      <button
        v-for="(n, i) in numbers"
        :key="n"
        @click="handleInput(n)"
        class="w-64 h-64 rounded-full leading-none border-2 border-evergreen text-evergreen hover:border-crimson hover:text-crimson transition-all"
        :class="i == numbers.length-1 ? 'col-start-2' : ''">
        {{ n }}
      </button>
      <button @click="clearLast()" class="w-64 h-64 flex items-center justify-center rounded-full leading-none border-2 border-evergreen text-evergreen hover:border-crimson hover:text-crimson transition-all">
        <IconBackspace class="w-32 h-auto -ml-2" />
      </button>
    </div>
    
    <div 
      class="mt-96 w-full flex justify-center"
      :class="isValid ? 'opacity-100' : 'opacity-0'">
      <ButtonPrimary :label="__('Start')" to="/parcours" isLink />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ButtonPrimary from '@/js/components/buttons/Primary.vue';
import IconBackspace from '@/js/components/icons/Backspace.vue';
import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

const pin = ref(['', '', '', ''])
const currentIndex = ref(0)
const showError = ref(false)
const isValid = ref(false)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const correctPin = '1234'

const handleInput = (n) => {
  if (currentIndex.value >= 4 || isValid.value) return
  if (currentIndex.value < 4) {
    pin.value[currentIndex.value] = n
    currentIndex.value++
    if (currentIndex.value === 4) validate()
  }
}

const validate = () => {
  const entered = pin.value.join('')

  if (entered !== correctPin) {
    showError.value = true
    setTimeout(reset, 2000)
  } 
  else {
    isValid.value = true
  }
}

const clearLast = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    pin.value[currentIndex.value] = ''
  }
}

const reset = () => {
  pin.value = ['', '', '', '']
  currentIndex.value = 0
  showError.value = false
}
</script>
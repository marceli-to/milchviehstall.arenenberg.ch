<template>
  <div class="w-full" v-if="currentQuestion">

    <!-- Header -->
    <header class="flex justify-between items-end pb-4 mb-8 border-b-2 border-evergreen">
      <HeadingTwo class="!mb-0">
        {{ __('Quiz') }}
      </HeadingTwo>
      <div class="text-sm text-evergreen">
        <strong>{{ current + 1 }}/{{ questions.length }} {{ __('Fragen') }}</strong>
      </div>
    </header>

    <!-- Main content -->
    <div class="text-sm mb-20">
      <div v-if="!quizFinished">
        {{ __(currentQuestion.question) }}
      </div>
      <div v-else class="min-h-123 text-md">
        {{ __('Danke fürs Mitmachen! Du kennst dich jetzt richtig gut im Arenenberger Milchviehstall aus.') }}
      </div>
    </div>

    <!-- Answer options -->
    <div class="grid grid-cols-2 gap-y-10 gap-x-16" v-if="!quizFinished">
      <button
        v-for="(text, key) in currentQuestion.options"
        :key="key"
        @click="selectAnswer(key)"
        :disabled="selected !== null"
        :class="[
          'border-2 border-evergreen rounded-full px-16 py-8 text-sm text-left flex gap-8 items-center transition-all',
          selected !== null && key === currentQuestion.correct ? 'bg-evergreen text-white border-evergreen' : '',
          selected === key && key !== currentQuestion.correct ? 'bg-crimson text-blush !border-crimson' : '',
          selected === null ? 'border-evergreen hover:border-crimson hover:text-crimson' : ''
        ]">
        <span 
          class="font-bold text-crimson"
          :class="[
            selected !== null && key === currentQuestion.correct ? '!text-white' : '',
            selected === key && key !== currentQuestion.correct ? '!text-blush' : ''
          ]">
          {{ key }}
        </span>
        <span>{{ __(text) }}</span>
      </button>
    </div>

    <!-- Footer -->
    <div class="mt-16 border-t-2 border-evergreen pt-12 flex justify-between items-center">

      <!-- Feedback -->
      <div class="text-sm" v-if="selected !== null && !quizFinished">
        <span class="text-evergreen" v-if="selected === currentQuestion.correct">
          {{ __('Deine Antwort war korrekt.') }}
        </span>
        <span class="text-crimson" v-else>
          {{ __('Falsch! Richtig ist Antwort') }} {{ currentQuestion.correct }}
        </span>
      </div>
      <div v-else></div>

      <!-- Button area -->
      <div class="flex justify-end">
        <!-- "Nächste Frage" or "Abschliessen" button -->
        <button
          v-if="!quizFinished"
          class="border-2 border-evergreen text-sm rounded-full px-16 py-8 hover:border-crimson hover:text-crimson disabled:hover:border-evergreen disabled:hover:text-evergreen"
          :disabled="selected === null"
          @click="nextQuestion">
          {{ __('Nächste Frage') }}
        </button>

        <!-- "Erneut spielen" button -->
        <button
          v-else
          class="border-2 border-evergreen text-sm rounded-full px-16 py-8 hover:border-crimson hover:text-crimson"
          @click="resetQuiz">
          {{ __('Nochmal spielen') }}
        </button>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import HeadingTwo from '@/js/components/headings/H2.vue'
import { useLanguageStore } from '@/js/stores/language'

const { __ } = useLanguageStore()

const props = defineProps({
  persona: {
    type: String,
    required: true,
  },
})

const quizMap = {
  cow: () => import('@/data/quiz-cow.json'),
  farmer: () => import('@/data/quiz-farmer.json')
}

const questions = ref([])
const current = ref(0)
const selected = ref(null)
const quizFinished = ref(false)

const currentQuestion = computed(() => questions.value[current.value])

watch(() => props.persona, async (newPersona) => {
  resetQuiz()
  if (quizMap[newPersona]) {
    const module = await quizMap[newPersona]()
    questions.value = module.default
  }
}, { immediate: true })

function selectAnswer(key) {
  selected.value = key

  // If it's the last question, start 3-second timer
  if (current.value === questions.value.length - 1) {
    setTimeout(() => {
      quizFinished.value = true
    }, 3000)
  }
}

function nextQuestion() {
  if (current.value < questions.value.length - 1) {
    current.value++
    selected.value = null
  }
}

function resetQuiz() {
  current.value = 0
  selected.value = null
  quizFinished.value = false
}
</script>


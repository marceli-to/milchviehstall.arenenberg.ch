<template>
  <Header />
  <Main class="w-full h-[939px] grid grid-cols-18 gap-x-20 pt-16 pb-30">

    <!-- Sidebar -->
    <div class="col-span-5 h-[inherit]">

      <!-- Start -->
      <div class="flex gap-x-24 pb-16 -mt-8 border-b border-evergreen">
        <div class="text-sm min-w-75">
          <strong>{{ __('Start') }}</strong>
        </div>
        <FadeExpand :show="persona === null">
          <div class="mt-24 pb-8 overflow-hidden">
            <p class="mb-16">{{ __('Willkommen im Arenenberger Milchviehstall!') }}</p>
            <p>{{ __('Du begleitest die Kuh Frida durch einen typischen Apriltag und entdeckst die Arbeiten im Arenenberger Milchviehstall. Wähle eine Persona aus und klicke auf dem Zeitstrahl die Uhrzeit an, die Dich interessiert! So erfährst Du Wissenswertes über die Aufgaben der Mitarbeitenden im Stall sowie über die Tiere am Arenenberg. Gleichzeitig kannst Du in einem Quiz Dein Wissen testen. Viel Spass!') }}</p>
          </div>
        </FadeExpand>
      </div>
      <!-- // Start -->

      <!-- Personas -->
      <div class="flex pt-8 pb-16 border-b border-evergreen">
        <div class="text-sm min-w-75">
          <strong>{{ __('Persona') }}</strong>
        </div>
        <div>

          <div class="flex gap-x-60 ml-60 mx-auto mt-8">
            <button 
              class="border-2 border-evergreen rounded-full"
              :class="{ '!border-crimson': persona === 'cow' }"
              @click="persona = 'cow'">
              <IconCow />
            </button>
            <button 
              class="border-2 border-evergreen rounded-full"
              :class="{ '!border-crimson': persona === 'farmer' }"
              @click="persona = 'farmer'">
              <IconFarmer />
            </button>
          </div>
          
          <div class="mt-16 ml-24">

            <FadeExpand :show="persona === 'cow'">
              <HeadingTwo class="!mb-0">{{ __('Frida') }}</HeadingTwo>
              <p class="!text-md">{{ __('Folgen Sie einem typischen Apriltag einer Kuh im Arenenberger Milchviehstall! Die Kuh Frida ist fünf Jahre alt. Sie hat zweimal gekalbert. Pro Tag liefert sie im Schnitt 25 Liter Milch.') }}</p>
            </FadeExpand>

            <FadeExpand :show="persona === 'farmer'">
              <HeadingTwo class="!mb-0">{{ __('Bauer') }}</HeadingTwo>
              <p class="!text-md">{{ __('Folgen Sie einem typischen Arbeitstag des Bauern im Arenenberger Milchviehstall!') }}</p>
            </FadeExpand>
          </div>
        </div>
      </div>
      <!-- // Personas -->

      <!-- Timeline -->
      <template v-if="persona">
        <div class="pt-8 mb-16 text-sm">
          <strong>{{ __('Tageszeit') }}</strong>
        </div>
        <TimeLine :persona="persona" @update:step="(step) => currentStep = step" />
      </template>
      <!-- // Timeline -->

    </div>
    <!-- // Sidebar -->

    <!-- Map -->
    <div class="col-span-13 px-16 pt-60 overflow-hidden h-[inherit] border-l border-evergreen">
      <Map :step="currentStep" />
      <div 
        class="absolute -bottom-20 right-24 w-full max-w-lg"
        :class="persona === null ? 'opacity-0' : 'opacity-100 transition-all duration-500'">
        <Quiz :persona="persona" v-if="persona !== null" />
      </div>
    </div>
    <!-- // Map -->

  </Main>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/js/components/layout/Header.vue';
import Main from '@/js/components/layout/Main.vue';
import HeadingTwo from '@/js/components/headings/H2.vue';
import IconCow from '@/js/components/icons/Cow.vue';
import IconFarmer from '@/js/components/icons/Farmer.vue';
import Map from '@/js/components/Map.vue';
import FadeExpand from '@/js/components/FadeExpand.vue';
import Quiz from '@/js/components/Quiz.vue';
import TimeLine from '@/js/components/TimeLine.vue';

import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

let persona = ref(null);
const currentStep = ref(null);

const router = useRouter();
let timeoutId;

const limitTime = 900000; // 15 minutes

onMounted(() => {
  timeoutId = setTimeout(() => {
    router.push({ name: 'home' });
  }, limitTime);
});

onBeforeUnmount(() => {
  clearTimeout(timeoutId);
});

</script>



<template>
  <Header />
  <Main class="w-full h-[939px] grid grid-cols-18 gap-x-20 pt-16 pb-30">

    <!-- Sidebar -->
    <div class="col-span-5 h-[inherit]">

      <!-- Start -->
      <div class="flex gap-x-24 pb-16 -mt-8 border-b border-evergreen">
        <div class="shrink-0 text-sm">
          <strong>{{ __('Start') }}</strong>
        </div>
        <FadeExpand :show="persona === null">
          <div class="mt-24 pb-8 overflow-hidden">
            <p>{{ __('Allgemeiner Introtext zum Spiel. Gehe mit Berta durch den Tag im Milchviehstall, beantworte zu jeder Tageszeit eine Frage und teste dein Wissen zum digitalen Kuhstall. Gehe mit Berta durch den Tag im Milchviehstall, beantworte zu jeder Tageszeit eine Frage und teste dein Wissen zum digitalen Kuhstall.') }}</p>
          </div>
        </FadeExpand>
      </div>
      <!-- // Start -->

      <!-- Personas -->
      <div class="flex pt-8 pb-16 border-b border-evergreen">
        <div class="text-sm">
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
              <p class="!text-md">{{ __('Die Kuh Frida ist 2010 geboren. Sie hat schon mehrmals gekalbert. Pro Tag liefert sie im Schnitt 28 Liter Milch.') }}</p>
            </FadeExpand>

            <FadeExpand :show="persona === 'farmer'">
              <HeadingTwo class="!mb-0">{{ __('Bäuerin') }}</HeadingTwo>
              <p class="!text-md">{{ __('Frida ist eine Kuh am Arenenberg. Sie ist eine Kuh, die sich mit Berta vertraut gemacht hat.') }}</p>
            </FadeExpand>
          </div>
        </div>
      </div>
      <!-- // Personas -->

      <!-- Timeline -->
      <template v-if="persona">
        <div class="pt-8 mb-24 text-sm">
          <strong>{{ __('Tageszeit') }}</strong>
        </div>
        <TimeLine :persona="persona" />
      </template>
      <!-- // Timeline -->

    </div>
    <!-- // Sidebar -->

    <!-- Map -->
    <div class="col-span-13 px-16 pt-60 overflow-hidden h-[inherit] border-l border-evergreen">
      <Map />

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
import { ref } from 'vue';
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
</script>



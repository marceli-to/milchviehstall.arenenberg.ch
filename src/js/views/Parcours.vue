<template>
  <Header />
  <Main class="w-full h-[939px] grid grid-cols-18 gap-x-20 pt-16 pb-30">

    <!-- Sidebar -->
    <div class="col-span-5 h-[inherit]">

      <!-- Start -->
      <div class="flex gap-x-24 pb-16 -mt-8 border-b border-evergreen">
        <div class="shrink-0">
          <strong>{{ __('Start') }}</strong>
        </div>
        <div
          v-if="persona === null"
          class="mt-24 pb-8 overflow-hidden">
          <p>{{ __('Allgemeiner Introtext zum Spiel. Gehe mit Berta durch den Tag im Milchviehstall, beantworte zu jeder Tageszeit eine Frage und teste dein Wissen zum digitalen Kuhstall. Gehe mit Berta durch den Tag im Milchviehstall, beantworte zu jeder Tageszeit eine Frage und teste dein Wissen zum digitalen Kuhstall.') }}</p>
        </div>
      </div>
      <!-- // Start -->

      <!-- Personas -->
      <div class="flex pt-8 pb-16 border-b border-evergreen">
        <div>
          <strong>{{ __('Persona') }}</strong>
        </div>
        <div>

          <div class="flex gap-x-60 ml-60 mx-auto mt-8">
            <a 
              href="#" 
              class="hover:text-crimson"
              :class="{ 'text-crimson': persona === 'cow' }"
              @click="persona = 'cow'">
              <IconCow />
            </a>
            <a 
              href="#" 
              class="hover:text-crimson"
              :class="{ 'text-crimson': persona === 'farmer' }"
              @click="persona = 'farmer'">
              <IconFarmer />
            </a>
          </div>
          
          <div class="mt-16">
            <div v-show="persona === 'cow' || persona === 'farmer'">
              <div v-if="persona === 'cow'">
                <HeadingTwo class="!mb-0">{{ __('Frida') }}</HeadingTwo>
                <p>{{ __('Frida ist eine Kuh am Arenenberg. Sie ist eine Kuh, die sich mit Berta vertraut gemacht hat.') }}</p>
              </div>
              <div v-if="persona === 'farmer'">
                <HeadingTwo class="!mb-0">{{ __('Bäuerin') }}</HeadingTwo>
                <p>{{ __('Frida ist eine Kuh am Arenenberg. Sie ist eine Kuh, die sich mit Berta vertraut gemacht hat.') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- // Personas -->

    </div>
    <!-- // Sidebar -->

    <!-- Map -->
    <div class="col-span-13 h-[inherit] border-l border-evergreen">
      
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

import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

let persona = ref(null);
</script>



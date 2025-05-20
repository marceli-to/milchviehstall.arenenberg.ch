<template>
  <div 
    class="absolute top-0 left-0 w-full h-full bg-blush"
    :class="{ 'h-[910px] top-170 pt-24': props.isHomepage }"
    v-if="props.isOpen">
    <div class="grid grid-cols-18 gap-x-20 text-sm">
      <div class="col-span-4 col-start-2 border-t border-evergreen pt-4">
        <HeadingTwo>Hilfe</HeadingTwo>
        <p>Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.</p>
      </div>
      <div class="col-span-4 border-t border-evergreen pt-4">
        <HeadingTwo>Impressum</HeadingTwo>
        <p>Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte. Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.</p>
      </div>
      <div class="col-span-4 border-t border-evergreen pt-4">
        <HeadingTwo>Einstellungen</HeadingTwo>
        <p>Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte. Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.</p>
      </div>
      <div class="col-span-4 border-t border-evergreen pt-4">
        <HeadingTwo>Über uns</HeadingTwo>
        <p>Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.</p>
      </div>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import HeadingTwo from '@/js/components/headings/H2.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
  
  isHomepage: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
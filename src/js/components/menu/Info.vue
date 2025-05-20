<template>
  <div 
    class="absolute top-0 left-0 w-full bg-blush"
    :class="{ 
      'h-[910px] top-170 pt-24': props.isHomepage,
      'h-[984px] top-95 pt-168': !props.isHomepage,
    }"
    v-if="props.isOpen">
    <div class="grid grid-cols-18 gap-x-20 text-sm">
      <div class="col-span-4 col-start-2 border-t border-evergreen pt-4">
        <HeadingTwo>{{ __('Hilfe') }}</HeadingTwo>
        <p>{{ __('Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.') }}</p>
      </div>
      <div class="col-span-4 border-t border-evergreen pt-4">
        <HeadingTwo>{{ __('Impressum') }}</HeadingTwo>
        <p>{{ __('Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte. Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.') }}</p>
      </div>
      <div class="col-span-4 border-t border-evergreen pt-4">
        <HeadingTwo>{{ __('Einstellungen') }}</HeadingTwo>
        <p>{{ __('Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte. Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.') }}</p>
      </div>
      <div class="col-span-4 border-t border-evergreen pt-4">
        <HeadingTwo>{{ __('Über uns') }}</HeadingTwo>
        <p>{{ __('Hilfestellung wie das Spiel bedient werden soll und ein paar Tipps. Frida und die anderen Kühe am Arenenberg geniessen grosse Freiheit. Sie entscheiden selbst, wann sie fressen, liegen oder sich melken lassen. Der Betriebsleiter motiviert aber die Kühe, das zu tun, was er möchte.') }}</p>
      </div>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import HeadingTwo from '@/js/components/headings/H2.vue';
import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

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
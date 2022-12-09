<script setup>
import { mdiAutoFix , mdiCrownOutline } from "@mdi/js";
import { ref } from 'vue';

const solution = ref(
  [
    {
      backgroundColor: 'bg-secondarycolor',
      icon: {
        font: mdiAutoFix,
        color: 'text-white',
        backgroundColor: {background: 'rgba(255, 255, 255, 0.08)'}
      },
      title: {
        text: 'We Provide New Solutions and Tools',
        color: 'text-white'
      },
      subtitle: {
        text: 'We provide your needs with new ways of the solutions way.',
        color: 'text-[#DDE0EA]'
      }, 
    },
    {
      backgroundColor: 'bg-white',
      icon: {
        font: mdiCrownOutline,
        color: 'text-secondarycolor',
        backgroundColor: {background: 'rgba(5, 95, 252, 0.08)'}
      },
      title: {
        text: 'We Provide New Solutions and Tools',
        color: 'text-gray-700'
      },
      subtitle: {
        text: 'We provide your needs with new ways of the solutions way.',
        color: 'text-gray-700'
      }, 
    },
    {
      backgroundColor: 'bg-white',
      icon: {
        font: mdiCrownOutline,
        color: 'text-secondarycolor',
        backgroundColor: {background: 'rgba(5, 95, 252, 0.08)'}
      },
      title: {
        text: 'We Provide New Solutions and Tools',
        color: 'text-gray-700'
      },
      subtitle: {
        text: 'We provide your needs with new ways of the solutions way.',
        color: 'text-gray-700'
      }, 
    },
    {
      backgroundColor: 'bg-secondarycolor',
      icon: {
        font: mdiAutoFix,
        color: 'text-white',
        backgroundColor: {background: 'rgba(255, 255, 255, 0.08)'}
      },
      title: {
        text: 'We Provide New Solutions and Tools',
        color: 'text-white'
      },
      subtitle: {
        text: 'We provide your needs with new ways of the solutions way.',
        color: 'text-[#DDE0EA]'
      }, 
    },
  ]
);

</script>


<template>
  <div class="justify-between items-center mt-20 w-full grid grid-flow-col gap-4 auto-cols-auto">
    <div class="grid grid-cols-2 gap-3">
      <div v-for="(item, index) in solution" :key="index" :class="[item.backgroundColor , 'w-[322px] rounded-2xl']">
        <div class="container flex gap-5 flex-col justify-start p-8">
          <div :class="[item.icon.color , 'items-center w-14 h-14 flex justify-center rounded-full']" :style="item.icon.backgroundColor">
            <icon :icon="item.icon.font"></icon>
          </div>

          <p :class="[item.title.color , 'text-2xl font-semibold']">{{item.title.text}}</p>
          <p :class="[item.subtitle.color , 'text-base font-medium leading-7']">
            {{item.subtitle.text}}
          </p>
        </div>
      </div>
    </div>

     <div class="">
      Hello
    </div>
  </div>
</template>



<style>

</style>
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
        text: 'Transform Problems into Smart Solutions',
        color: 'text-gray-700'
      },
      subtitle: {
        text: 'Our mission is to transform your problems into the smartest one.',
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
        text: 'Work Faster, Deliver Better',
        color: 'text-gray-700'
      },
      subtitle: {
        text: 'Our workflow is to work fast and give you the best solution one.',
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
        text: 'Your Successful Business is Our Priority',
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

     <div class="p-5 w-[459px] h-[430px] flex justify-start flex-col">
      <small class="uppercase text-secondarycolor text-lg font-medium leading-6">- why us?</small>
      <p class="font-semibold text-5xl text-[#10141B] leading-[67px]">
        Your Wonderful Business is our First priority
      </p>
      <p class="subtitle text-base font-medium leading-7 text-slate-700 mt-6">
        We prioritize your successful business mission and vission with our wonderful features that can help you manage your days.
      </p>
    </div>
  </div>
</template>



<style>

</style>
<script setup>
import { mdiAutoFix , mdiCrownOutline } from "@mdi/js";
import { ref } from 'vue';

const solution = ref(
  [
    {
      class: 'bg-secondarycolor order-1 sm:order-1',
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
      class: 'bg-white order-2 sm:order-2',
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
      class: 'bg-white order-4 sm:order-3',
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
      class: 'bg-secondarycolor order-3 sm:order-4',
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
  <div class="justify-between items-center mt-20 gap-4 w-full grid grid-flow-row md:grid-flow-col auto-cols-auto">
    <div class="p-3 grid grid-cols-auto sm:grid-cols-2 md:order-1 order-2 gap-3">
      <div v-for="(item, index) in solution" :key="index" :class="[item.class , 'w-full md:w-[200px] lg:w-[322px]  rounded-2xl']">
        <div class="container flex gap-5 flex-col justify-start md:p-4 p-8 lg:p-8 lg:h-80">
          <div :class="[item.icon.color , 'items-center w-14 h-14 flex justify-center rounded-full']" :style="item.icon.backgroundColor">
            <icon :icon="item.icon.font" />
          </div>

          <p :class="[item.title.color , 'text-2xl lg:text-2xl md:text-lg font-semibold md:leading-8']">{{item.title.text}}</p>
          <p :class="[item.subtitle.color , 'text-[13px] lg:text-base font-medium leading-7']">
            {{item.subtitle.text}}
          </p>
        </div>
      </div>
    </div>

    <div class="p-5 md:order-2 order-1 w-full md:w-[459px] h-[430px] flex justify-start flex-col gap-5">
      <small class="uppercase text-secondarycolor text-sm md:text-lg font-medium leading-6">
        - why us?
      </small>
      <p class="font-semibold text-2xl w-[276px] md:text-5xl text-[#10141B] leading-9 md:leading-[67px]">
        Your Wonderful Business is our First priority
      </p>
      <p class="subtitle md:text-base text-[13px] w-[276px] font-medium leading-7 text-slate-700">
        We prioritize your successful business mission and vission with our wonderful features that can help you manage your days.
      </p>
      <button class="rounded-full text-white bg-secondarycolor flex items-center justify-center gap-2 w-[154px] h-[48px] font-medium text-[16px]">
        Get Started
      </button>
    </div>
  </div>
</template>



<style>

</style>
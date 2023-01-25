<script setup>
import { ref } from "vue";
import { mdiEmail } from "@mdi/js";

const menu = ref(
  [
    {
      linkTo: '#home',
      linkName: 'Home'
    },
    {
      linkTo: '#features',
      linkName: 'Features'
    },
    {
      linkTo: '#service',
      linkName: 'Service'
    },
    {
      linkTo: '#team',
      linkName: 'Team'
    },
     {
      linkTo: '#testimonial',
      linkName: 'Testimonial'
    }
  ]
);
</script>


<template>
  <div class="w-full relative min-h-screen bg-basecolor">
    <div class="flex justify-center">
      <div class="container py-6">
        <nav class="text-white relative z-20 flex items-center justify-between ">
          <p class="title font-semibold text-[24px]">Infinitech.</p>

          <div class="flex gap-5">
            <a class="text-[16px] hover:underline hover:underline-offset-8 hover:decoration-[3px] hover:transition ease-in duration-700 decoration-sky-500 font-medium" v-for="data, index in menu" :key="index" :href="data.linkTo">{{data.linkName}}</a>
          </div>

          <button class="rounded-full bg-secondarycolor flex items-center justify-center gap-2 w-[154px] h-[48px] font-medium text-[16px]">
            <icon :icon="mdiEmail" />
            Contact us
          </button>
        </nav>

        <div class="h-96 flex items-center w-full">
          <div class="grid grid-cols-2 text-white">
            <p class="font-bold text-[64px] w-[700px]">
              We Bring You To The Future Of Technology
            </p>
            <div class="w-full justify-end flex">
              <div class="flex flex-col  justify-between w-[415px]">
                <p class="text-[16px] leading-loose">Infinitech is an IT company that could transform your digital problems into a new wonderful solutions that could scale your business up.</p>
                <button class="rounded-full bg-secondarycolor flex items-center justify-center gap-2 w-[154px] h-[48px] font-medium text-[16px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="absolute z-0 top-0 right-0" src="@/assets/circle.svg" alt="">
    <img class="absolute z-0 -left-[50px] -bottom-[250px]" src="@/assets/bigcircle.png" alt="">
  </div>
</template>
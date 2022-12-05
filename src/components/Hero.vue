<script setup>
import { ref } from "vue";
import { mdiEmail } from "@mdi/js";
import Icon from "@/components/Icon.vue";

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
  <div class="w-screen h-screen bg-basecolor">
    <div class="flex justify-center">
      <div class="container">
        <nav class="text-white flex items-center justify-between p-6">
          <p class="title font-semibold text-[24px]">Infinitech.</p>

          <div class="flex gap-5">
            <a class="text-[16px] hover:underline hover:underline-offset-8 hover:decoration-[3px] hover:transition ease-in duration-700 decoration-sky-500 font-medium" v-for="data, index in menu" :key="index" :href="data.linkTo">{{data.linkName}}</a>
          </div>

          <button class="rounded-full bg-secondarycolor flex items-center justify-center gap-2 w-[154px] h-[48px] font-medium text-[16px]">
            <icon :icon="mdiEmail"></icon>
            Contact us
          </button>
        </nav>
      </div>
    </div>
    <!-- This is hero -->
  </div>
</template>


<style>

</style>
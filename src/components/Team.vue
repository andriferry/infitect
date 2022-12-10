<script setup>
import { ref } from 'vue';

const team = ref(
  [
    {
      title: 'CTO & Founder',
      name: 'james morgan',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]"
    },
    {
      title: 'CTO & Co-Founder',
      name: 'Marquel Sanchez',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80')]"
    },
    {
      title: 'Head of Development',
      name: 'Albert William',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80')]"
    }
  ]
);


</script>

<template>
  <div class="flex mt-20 justify-center w-full">
    <div class="container">
      <div class="title">
        <p class="text-[18x] text-secondarycolor font-medium leading-6 uppercase">- The Team</p>
        <p class="font-semibold text-[#10141B] w-[640px] mt-3 text-[48px]">
          Meet our professional and experience teachers in here
        </p>
      </div>
      <div class="grid grid-cols-4 gap-4 py-5">
        <div v-for="item, index in team" :key="index" class="flex flex-col items-start gap-3 justify-start">
          <div :class="['w-[288px] h-[310px] bg-cover bg-center rounded-xl', item.imageUrl]"></div>
          <p class="font-semibold text-4xl">{{item.name}}</p>
          <p class="font-medium text-xl text-gray-700">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>  
</template>


<style>

</style>
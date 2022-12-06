<script setup>
import { ref } from "vue";
import { mdiMicrosoft } from "@mdi/js";

const heroImage = ref([
  'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80',
  'https://images.unsplash.com/photo-1625314887424-9f190599bd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
]);

</script>

<template>
  <div class="w-full flex justify-center min-h-screen">
    <div class="container  relative">
      <div class="grid grid-cols-3 gap-3 relative z-30 -top-60">
        <img v-for="data, index in heroImage" :key="index" class="rounded-lg object-cover h-[420px] w-[402px]" :src="data" alt="">
      </div>

      <div class="flex justify-center items-center flex-col">
        <h1 class="font-semibold text-[40px] text-center">
          We Helped 30+ Companies From Medium Until Big Scale Companies
        </h1>

        <div class="mt-10 grid grid-cols-5">
          <div class="flex items-center">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

</style>
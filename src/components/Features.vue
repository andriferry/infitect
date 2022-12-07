<script setup>
import { ref } from "vue";
import { mdiMicrosoft, mdiGoogle , mdiDropbox, mdiTrello, mdiMicrosoftXbox } from "@mdi/js";

const heroImage = ref([
  'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80',
  'https://images.unsplash.com/photo-1625314887424-9f190599bd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
]);

const client = ref([
  {
    text: 'microsoft',
    icon: mdiMicrosoft
  },
  {
    text: 'google',
    icon: mdiGoogle
  },
  {
    text: 'dropbox',
    icon: mdiDropbox
  },
  {
    text: 'xbox',
    icon: mdiMicrosoftXbox
  },
  {
    text: 'trello',
    icon: mdiTrello
  },
]);

</script>

<template>
  <div class="w-full flex justify-center">
    <div class="container  relative">
      <div class="grid grid-cols-3 gap-3 relative z-30 -top-60">
        <img v-for="data, index in heroImage" :key="index" class="rounded-lg object-cover h-[420px] w-[402px]" :src="data" alt="">
      </div>

      <div class="flex text-gray-900 justify-center relative -top-16 items-center flex-col">
        <h1 class="font-semibold w-[860px] text-[40px] text-center">
          We Helped 30+ Companies From Medium Until Big Scale Companies
        </h1>

        <div class="w-full flex items-center justify-center">
          <div class="mt-6 grid grid-flow-col auto-cols-max">
            <div v-for="data, index in client" :key="index" class="flex p-3 justify-center text-gray-600 gap-4 text-[38px] items-center">
              <icon size="52" :icon="data.icon"></icon>
              <p class="font-semibold capitalize">{{data.text}}</p>
            </div>
          </div>
        </div>

        <div class="w-full mt-52 px-20 flex items-center justify-between">
          <div class="flex flex-col relative gap-5">
            <h1 class="text-[40px] quote w-[620px] text-[#121212] font-semibold">
              “We are on a mission to build international business cooperations that could open win-to-win partnerships.”
            </h1>
            <p class="text-lg font-medium">-James Morgan, 
              <span class="text-secondarycolor">Founder and CTO Infitech</span>
            </p>
          </div>
          <img class="w-[508px] h-[551px] rounded-2xl" src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="">
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.quote::before {
  content: '“';
  color: #4b5563;
  font-size: 500px;
  opacity: 0.1;
  position: absolute;
  top: -280px;
  left: -70px;
}

</style>
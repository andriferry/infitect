<script setup>
import { ref } from "vue";
import { mdiMicrosoft, mdiGoogle , mdiDropbox, mdiTrello, mdiMicrosoftXbox } from "@mdi/js";

const heroImage = ref([
  "bg-[url('https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80')]",
  "bg-[url('https://images.unsplash.com/photo-1625314887424-9f190599bd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]",
  "bg-[url('https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]"
]);

const ownerImg = ref("bg-[url('https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80')]")

const client = ref([
  {
    text: 'microsoft',
    icon: mdiMicrosoft,
    class: 'col-span-1 sm:col-span-3'
  },
  {
    text: 'google',
    icon: mdiGoogle,
    class: 'col-span-1 sm:col-span-3'
  },
  {
    text: 'dropbox',
    icon: mdiDropbox,
    class: 'col-span-1 sm:col-span-3'
  },
  {
    text: 'xbox',
    icon: mdiMicrosoftXbox,
    class: 'col-span-1 sm:col-span-5'
  },
  {
    text: 'trello',
    icon: mdiTrello,
    class: 'col-span-2 sm:col-span-3'
  },
]);

</script>

<template>
  <div class="w-full flex justify-center">
    <div class="container relative">
      <div class="grid grid-cols-3 gap-3 relative z-30 -mt-60">
        <div v-for="url, index in heroImage" :key="index" :class="['rounded-2xl bg-cover w-[402px] h-[420px]' , url]"></div>
      </div>

      <div class="flex text-gray-900 mt-36 justify-center relative  items-center flex-col">
        <!-- <h1 class="font-semibold w-[860px] text-[40px] text-center">
          We Helped 30+ Companies From Medium Until Big Scale Companies
        </h1> -->

        <h1 class="text-2xl w-[313px] sm:w-[486px] sm:leading-[48px] text-center font-semibold leading-10">
          We Helped 30+ Companies From Medium Until Big Scale Companies
        </h1>

        <div class="w-full mt-6 flex items-center justify-center">
          <div class="grid p-4 gap-3 grid-cols-2 sm:grid-cols-9">
            <div v-for="(data, index) in client" :key="index" :class="data.class"
              class="flex justify-center p-3 text-gray-600 gap-2 text-2xl items-center">
              <icon size="52" :icon="data.icon" />
              <p class="font-semibold capitalize">{{data.text}}</p>
            </div>
          </div>
        </div>

        <div class="w-full gap-10 lg:gap-0 mt-52 p-3 grid grid-cols-1 sm:grid-cols-2">
          <div class="flex flex-col p-1 lg:p-5 xl:p-10 relative gap-5 sm:justify-center">
            <h1 class="text-2xl lg:text-3xl xl:text-[40px] leading-9 lg:leading-[50px] quote w-full xl:w-[620px] xl:leading-[68px] text-[#121212] font-semibold">
              “We are on a mission to build international business cooperations that 
                could open win-to-win partnerships.”
            </h1>
            <p class="text-base xl:text-lg font-medium">-James Morgan, 
              <span class="text-secondarycolor">Founder and CTO Infitech</span>
            </p>
          </div>

          <div class="flex justify-center w-full">
            <div 
              class="rounded-xl w-full bg-right bg-cover h-[415px] lg:h-[430px] 
                md:h-[315px] md:w-[370px] lg:w-[408px] xl:h-[551px] xl:w-[508px]" :class="ownerImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { mdiEmail ,mdiMenu , mdiClose } from "@mdi/js";


//State
const openMenu = ref(false)
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
  <div class="w-full relative h-[846px] sm:h-[180vh] lg:min-h-screen bg-basecolor">
    <div class="flex justify-center">
      <div class="container">
        <nav class="text-white p-5 relative z-20 flex items-center justify-between">
          <p class="title font-semibold text-[24px]">Infinitech.</p>

          <div class="gap-5 hidden lg:flex">
            <a href="#" v-for="(data , index) in menu" :key="index" class="text-base hover:underline hover:underline-offset-8 
              hover:decoration-[3px] ease-in transition duration-150 decoration-sky-500 font-medium">
              {{data.linkName}}
            </a>
          </div>

          <button class="rounded-full w-[154px] h-[48px] hidden lg:flex bg-secondarycolor 
               items-center justify-center gap-2 font-medium text-base">
            <icon :icon="mdiEmail" />
            Contact us
          </button>

          <button class="block lg:hidden" @click="openMenu = !openMenu">
            <icon :icon="mdiMenu" />
          </button>
        </nav>


        <div class="h-96 flex justify-center items-center w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 text-white">
            <div class="w-full flex justify-center">
              <p class="font-semibold text-[32px] sm:text-5xl leading-[50px] 
                  w-[312px] sm:w-[612px] sm:leading-[72px] text-center lg:text-[64px] lg:w-[700px]">
                We Bring You To The Future Of Technology
              </p>
            </div>
        
            <div class="w-full flex flex-col gap-5 justify-center mt-10">
              <div class="w-full flex justify-center">
                <p class="text-sm w-[313px] sm:w-[415px] text-center leading-loose">
                  Infinitech is an IT company that could transform your digital problems into a new wonderful solutions that could scale your business up.
                </p>
              </div>

              <div class="flex justify-center">
                <button class="rounded-full bg-secondarycolor flex 
                    items-center justify-center px-4 py-3 font-medium text-base">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="absolute z-0 top-0 right-0" 
      src="@/assets/circle.svg" alt="">
    <img class="absolute z-0 -left-[50px] -bottom-[250px]"
      src="@/assets/bigcircle.png" alt="">

    <Transition name="slide-fade">
      <div v-if="openMenu" 
        class="h-screen p-5 absolute block lg:hidden z-50 top-10 w-full"
      >
        <div class="bg-white transition ease-in-out delay-150 p-4 rounded-lg shadow-xl">
          <div class="flex justify-end items-center">
            <button @click="openMenu = !openMenu">
              <icon :icon="mdiClose" />
            </button>
          </div>

          <ul>
            <li v-for="(menuItem, index) in menu" :key="index" class="text-xl font-medium p-3 text-slate-500 capitalize">
              {{menuItem.linkName}} 
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>
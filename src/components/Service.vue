<script setup>
import { ref } from 'vue';
import { mdiCheckCircle } from "@mdi/js";
import WhyUs from "@/components/Whyus.vue"

const ourService = ref(
  [
    {
      title:'web development',
      imgUrl: "bg-[url('https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]",
      serviceList: ['High-quality code' , 'Cleand and documented code' , 'On-time and well maintenance']
    },
    {
      title:'UI/UX Design',
      imgUrl: "bg-[url('https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80')]",
      serviceList: ['Iterated and documented design' , 'Designed with smart solutiions' , 'Well interface & experience design']
    },
    {
      title:'Digital Illustration',
      imgUrl: "bg-[url('https://images.unsplash.com/photo-1587120511358-98f9104cc096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80')]",
      serviceList: ['Colorful and eye-catching' , 'Made with updated illustration' , 'On-time and well prepared']
    },
    {
      title:'Logo & Brand Design',
      imgUrl: "bg-[url('https://images.unsplash.com/photo-1507332194683-0ce90ffa318a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]",
      serviceList: ["Focused on logo's philosophy" , 'Simple and minimalist logos' , 'Research before design process']
    }
  ]
);

</script>


<template>
  <div class="w-full mt-36 flex justify-center">
    <div class="container">
      <div class="flex text-gray-900 justify-center">
        <h1 class="font-semibold w-[860px] text-[40px] text-center">
          Our Professional Services To Help your business
        </h1>
      </div>

      <div class="flex mt-24 justify-center w-full">
        <div class="grid mb-20 grid-flow-col gap-4 auto-cols-auto">
          <div class="flex flex-col items-center gap-4" v-for="(service, index) in ourService" :key="index">
            <div :class="['w-[288px] rounded-xl bg-cover h-[308px]',service.imgUrl]"></div>
            <div class="w-[288px] mt-auto px-3">
              <p class="w-full text-[32px] capitalize font-semibold leading-10 text-slate-700">
                {{service.title}}
              </p>

              <ul class="mt-5 flex flex-col gap-3">
                <li v-for="item, index in service.serviceList" :key="index" class="text-base font-medium flex gap-3">
                  <icon class="text-[#1AB687]" :icon="mdiCheckCircle"></icon>
                  <span class="text-slate-700 text-sm">
                    {{item}}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WhyUs/> 
    </div>
  </div>
</template>



<style>

</style>
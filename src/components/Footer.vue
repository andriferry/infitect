<script setup>
import {mdiYoutube , mdiFacebook , mdiInstagram} from "@mdi/js";
import { ref } from 'vue';

const socialmedia = ref(
  [
    mdiInstagram, mdiFacebook, mdiYoutube
  ]
);

const bottomMenu = ref(
  [
    {
      text: 'menu', 
      child: ['Our Products' , 'Our Services', 'Features', 'Blogs']
    },
    {
      text: 'Company', 
      child: ['About Us' , 'Contact Us', 'Careers', 'Our Teams']
    },
    {
      text: 'Legal', 
      child: ['FAQ' , 'Privacy Policy', 'Terms and Conditions', 'Security']
    }
  ]
);

</script>


<template>
  <div class="w-full h-[417px] items-center flex justify-center">
    <div class="container">
      <div class="grid grid-cols-3 p-5">
        <div class="h-full flex gap-5 col-span-1 flex-col w-[352px]">
          <p class="font-semibold text-[32px]">
            Infi<span class="text-secondarycolor">tech.</span>
          </p>
          <p class="text-lg leading-8 font-normal">
            Infinitech is an IT company that could transform your digital problems into a new wonderful solutions that could scale your business up.
          </p>

          <div class="flex justify-start gap-3">
            <button v-for="icon , index in socialmedia" :key="index" class="p-3 group hover:bg-secondarycolor transition-all ease-in-out duration-150 border-secondarycolor border-2 rounded-full">
              <icon class="text-secondarycolor group-hover:text-white" :icon="icon"></icon>
            </button>
          </div>
        </div>

        <div class="col-span-2 w-full items-end flex">
          <div class="container">
            <div class="grid grid-cols-3 gap-4">
            
              <div v-for="(menu , index) in bottomMenu" :key="index" class="flex flex-col items-start justify-end gap-5">
                <p class="font-medium text-xl capitalize leading-[26px] text-slate-700">
                  {{menu.text}}
                </p>
                <ul>
                  <li v-for="child , index in menu.child" :key="index" class="text-base py-2 font-normal leading-8 text-gray-500">
                    <button class="capitalize">{{child}}</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mt-5 border-t border-slate-200 mx-4"></div>
    </div>  
  </div>  
</template>

<style>

</style>
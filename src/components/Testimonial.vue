<script setup>
import { ref } from 'vue';
import { AutoPlay } from "@egjs/flicking-plugins";

const plugins = ref([
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })
])
const options = ref({
  renderOnlyVisible: true,
  circular: true,
  defaultIndex: 2,
})
const testimonials = ref(
  [
    {
      name: 'Jonathan Bourne',
      companyName: 'Burneau Company Ltd',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]"
    },

    {
      name: 'Thomas S',
      companyName: 'XYZ Ltd',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]"
    },


    {
      name: 'Ken ',
      companyName: 'Canvas Ltd',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80')]"
    },
    {
      name: 'Tom A. ',
      companyName: 'Pif Ltd',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60')]"
    }
  ]
);

</script>


<template>
  <div class="flex mt-20 mb-20 justify-center w-full">
    <div class="container p-5">
      <div class="title">
        <p class="text-base md:text-lg text-secondarycolor font-medium leading-6 uppercase">
          - testimonials
        </p>
        <p class="font-semibold tracking-widest
           sm:tracking-normal capitalize text-[#10141B] w-full md:w-[391px] lg:w-[587px] md:leading-[48px] mt-3 text-2xl 
           leading-9 lg:leading-[67px] md:text-[32px] lg:text-5xl">
          here are what our customers said about us
        </p>
      </div>


      <div class="lg:grid hidden  grid-flow-col auto-cols-auto mt-10 gap-6 py-5">
        <div v-for="(data, index) in testimonials" :key="index" class="flex flex-col p-2 gap-4">
          <p class="text-base font-medium leading-7">???Infinitech is the best team for this year! I am very appreciated with their works, especially when they helped me to grow up our business.???</p>
          <div class="flex gap-5 items-center">
            <div class="w-16 h-16 bg-cover rounded-full" :class="data.imageUrl"></div>
            <div class="flex gap-2 justify-start flex-col">
              <p class="text-base font-semibold">{{data.name}}</p>
              <p class="text-xs text-[#445160E0]/75 font-medium">CTO at {{data.companyName}}</p>
            </div>
          </div>
        </div>
      </div>
      

       <div class="flex lg:hidden justify-center">
          <div class="w-[400px] sm:w-[600px] md:w-[714px]">
            <Flicking :options="options" :plugins="plugins" class="mt-10 py-3">
              <div v-for="(data, index) in testimonials" :key="index" class="flex w-[400px] flex-col p-5 gap-5">
                <p class="text-base px-5 font-medium leading-7">???Infinitech is the best team for this year! I am very appreciated with their works, especially when they helped me to grow up our business.???</p>
                <div class="flex mt-3 px-5 gap-5 items-center">
                  <div class="w-16 h-16 bg-cover rounded-full" :class="data.imageUrl"></div>
                  <div class="flex gap-2 justify-start flex-col">
                    <p class="text-base font-semibold">{{data.name}}</p>
                    <p class="text-xs text-[#445160E0]/75 font-medium">CTO at {{data.companyName}}</p>
                  </div>
                </div>
              </div>
            </Flicking>
          </div>
        </div>
    </div>
  </div>  
</template>

<style>

</style>
<script setup>
import { ref } from 'vue';
import { mdiCheckCircle } from "@mdi/js";

const ourService = ref(
  [
    {
      title:'',
      imgUrl: '',
      serviceList: ['']
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

      <div class="flex min-h-screen mt-32 justify-center w-full">
        <div class="grid grid-flow-col gap-4 auto-cols-auto">
          <div class="flex flex-col gap-4" v-for="data in 4" :key="data">
            <img class="w-72 h-96 rounded-2xl" src="https://images.unsplash.com/photo-1572621403925-33e05716ad8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="">
            <div class="w-[288px] px-3">
              <p class="w-full text-[32px] font-semibold leading-10 text-slate-700">
                Web Development
              </p>

              <ul class="mt-5 flex flex-col gap-3">
                <li v-for="data in 3" :key="data" class="text-base font-medium flex gap-3">
                  <icon class="text-[#1AB687]" :icon="mdiCheckCircle"></icon>
                  <span class="text-slate-700">
                    High-quality code
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>

</style>
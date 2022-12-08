<script setup>
import { mdiBrush } from "@mdi/js";
</script>


<template>
  <div class="h-screen justify-between items-center mt-20 w-full grid grid-flow-col gap-4 auto-cols-auto">
    <div class="grid grid-cols-2 gap-3">
      <div v-for="data in 4" :key="data" class="bg-secondarycolor w-[322px] rounded-2xl">
        <div class="container flex gap-5 flex-col justify-start p-8">
          <div class="items-center w-14 h-14 flex justify-center text-white rounded-full" style="background: rgba(255, 255, 255, 0.08)">
            <icon :icon="mdiBrush"></icon>
          </div>

          <p class="text-2xl text-white font-semibold">We Provide New Solutions and Tools</p>
          <p class="text-base text-[#DDE0EA] font-medium leading-7">
            We provide your needs with new ways of the solutions way.
          </p>
        </div>
      </div>
    </div>

     <div class="">
      Hello
    </div>
  </div>
</template>



<style>

</style>
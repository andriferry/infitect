<script setup>

</script>

<template>
  <div class="w-full h-[682px] flex justify-center items-center relative bg-basecolor">
    <img class="right-0 absolute" src="@/assets/leftformcircle.svg" alt="">
    <div class="container text-white h-[442px] relative z-40">
      <div class="grid h-full gap-4 items-center bg grid-cols-2">
        <div class="flex gap-5 flex-col w-[496px]">
          <p class="text-lg font-medium leading-6">- START OUR COOPERATION</p>
          <p class="font-semibold text-5xl leading-[67px]">Let us know your needs, We give you the best solutions</p>
          <p class="text-base font-medium text-[#DDE0EA] leading-7">
            Let us know your problems by filling the forms and we will give you the best services you never got before.
          </p>
        </div>

        <div class="w-full flex justify-center">
          <div class="grid grid-cols-1 gap-4">
            <div class="flex gap-4">
              <div class="formgroup flex flex-col gap-2">
                <label for="" class="text-sm font-medium leading-5">First Name</label>
                <input class="block w-full px-3 py-2 bg-white border border-slate-300 text-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500" type="text" placeholder="First Name">
              </div>
              <div class="formgroup flex flex-col gap-2">
                <label for="" class="text-sm font-medium leading-5">Last Name</label>
                <input class="block w-full px-3 py-2 bg-white border border-slate-300 text-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500" type="text" placeholder="Last Name">
              </div>
            </div>
            <div class="formgroup flex flex-col gap-2">
              <label for="" class="text-sm font-medium leading-5">Email</label>
              <input class="block w-full px-3 py-2 bg-white border border-slate-300 text-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500" type="text" placeholder="your@company.com">
            </div>
            <div class="formgroup flex flex-col gap-2">
              <label for="" class="text-sm font-medium leading-5">Message</label>
              <textarea placeholder="Message" class="block w-full px-3 py-2 bg-white border border-slate-300 text-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500" rows="5"></textarea>
            </div>
            <div class="w-full">
              <button class="w-full bg-secondarycolor rounded-lg p-2">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<style>

</style>
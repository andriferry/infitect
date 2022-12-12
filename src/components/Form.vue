<script setup>

</script>

<template>
<!-- h-[682px] -->
  <div class="w-full h-full md:py-20 flex justify-center items-center relative bg-basecolor">
    <img class="right-0 absolute" src="@/assets/leftformcircle.svg" alt="">
    <div class="container text-white lg:h-[442px] h-full relative z-40">
      <div class="grid h-full p-10 gap-4 items-center bg grid-cols-1">
        <div class="flex gap-5 flex-col items-center text-start md:text-center md:p-14 lg:w-[496px]">
          <p class="text-sm md:text-lg font-medium md:leading-6 leading-4">- START OUR COOPERATION</p>
          <p class="font- text-center md:w-[496px] text-2xl lg:text-5xl md:text-[32px] leading-8 lg:leading-[67px] md:leading-10">
            Let us know your needs, We give you the best solutions
          </p>
          <p class="text-sm text-center md:w-[496px] font-medium text-[#DDE0EA] md:leading-7 leading-5">
            Let us know your problems by filling the forms and we will give you the best services you never got before.
          </p>
        </div>

        <div class="w-full flex justify-center">
          <div class="grid w-full grid-cols-1 gap-4 md:gap-7 md:p-6">
            <div class="flex flex-col md:flex-row w-full gap-4">
              <div class="formgroup w-full flex flex-col gap-2">
                <label for="" class="text-sm font-medium leading-5">First Name</label>
                <input class="block w-full px-3 py-2 bg-white border border-slate-300 text-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500" type="text" placeholder="First Name">
              </div>
              <div class="formgroup w-full flex flex-col gap-2">
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
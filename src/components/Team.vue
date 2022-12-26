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
const team = ref(
  [
    {
      title: 'CTO & Founder',
      name: 'james morgan',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80')]"
    },
    {
      title: 'CTO & Co-Founder',
      name: 'Marquel Sanchez',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80')]"
    },
    {
      title: 'Head of Development',
      name: 'Albert William',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80')]"
    },
    {
      title: 'Head of Design',
      name: 'Antony Moralez',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]"
    },
    {
      title: 'Sr. UX Researcher',
      name: 'Finn Switzerland',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"
    },
    {
      title: 'Sr. UX Researcher',
      name: 'Alex Ferguso',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"
    },
    {
      title: 'Head of Logo Design',
      name: 'Thomas c',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60')]"
    },
    {
      title: 'Sr. Illustrator',
      name: 'Antonio Sanches',
      imageUrl: "bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]"
    }
  ]
);


</script>

<template>
  <div class="flex mt-20 justify-center w-full">
    <div class="container">
      <div class="title p-3">
        <p class="text-[18x] text-secondarycolor font-medium leading-6 uppercase">- The Team</p>
        <p class="font-semibold text-[#10141B] w-[340px] lg:w-[640px] mt-3 text-[24px] lg:text-[48px]">
          Meet our professional and experience teachers in here
        </p>
      </div>
      <div class="lg:grid hidden grid-cols-4 gap-6 py-5">
        <div v-for="item, index in team" :key="index" class="flex flex-col items-start gap-3 justify-start">
          <div :class="['w-[288px] h-[310px] bg-cover bg-center rounded-xl', item.imageUrl]"></div>
          <p class="font-semibold capitalize text-3xl">{{item.name}}</p>
          <p class="font-medium text-xl text-gray-700">{{item.title}}</p>
        </div>
      </div>

      <div class="flex lg:hidden justify-center">
        <div class="w-[400px] sm:w-[900px]">
          <Flicking :options="options" :plugins="plugins" class="mt-10 py-3">
            <div v-for="item, index in team" :key="index" class="flex flex-col items-start gap-3 p-5 justify-start">
                <div :class="['w-[288px] h-[310px] bg-cover bg-center rounded-xl', item.imageUrl]" />
                <p class="font-semibold capitalize text-3xl">{{item.name}}</p>
                <p class="font-medium text-xl text-gray-700">{{item.title}}</p>
            </div>
          </Flicking>
        </div>
      </div>
    </div>
  </div>  
</template>


<style>

</style>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '24'
  }
});
</script>

<template>
  <span class="icon">
    <svg fill="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
      <path :d="icon" />
    </svg>
  </span>
</template>
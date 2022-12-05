<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <span class="icon">
    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path :d="icon"></path>
    </svg>
  </span>
</template>

<style>

</style>
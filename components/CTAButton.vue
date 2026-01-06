<template>
  <button
    class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-[15px] font-medium transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow whitespace-nowrap"
    @click="handleClick"
  >
    Get started free
  </button>
</template>

<script setup lang="ts">
const handleClick = () => {
  // Add your CTA logic here
  console.log('Get started clicked');
};
</script>

<template>
  <button
    class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-md text-[15px] font-medium transition-colors"
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

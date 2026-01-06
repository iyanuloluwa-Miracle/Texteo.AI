<template>
  <div class="flex items-center gap-4 lg:gap-6 xl:gap-8">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.name"
      :to="link.href"
      class="text-gray-600 hover:text-gray-900 text-sm lg:text-[15px] font-medium transition-all hover:scale-105 whitespace-nowrap"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Demos', href: '#demos' },
  { name: 'Pages', href: '#pages' },
  { name: 'Support', href: '#support' },
  { name: 'Contact', href: '#contact' },
];
</script>

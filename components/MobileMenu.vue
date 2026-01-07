<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="isOpen"
      class="md:hidden border-t border-gray-200 bg-white"
    >
      <div class="px-4 pt-4 pb-6 space-y-3">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          @click="$emit('close')"
          class="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all active:scale-95"
        >
          {{ link.name }}
        </NuxtLink>
        
        <div class="pt-3">
          <button
            @click="handleCTAClick"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-lg text-base font-medium transition-all active:scale-95 shadow-sm"
          >
            Get started free
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface NavLink {
  name: string;
  href: string;
}

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const navLinks: NavLink[] = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Resources', href: '#resources' },
  { name: 'Login', href: '/login' },
];

const handleCTAClick = () => {
  console.log('Get started clicked');
  emit('close');
};
</script>

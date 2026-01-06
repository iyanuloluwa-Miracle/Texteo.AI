<template>
  <nav class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14 sm:h-16 lg:h-18">
        <NavbarLogo />
        
        <!-- Desktop Navigation -->
        <NavbarLinks class="hidden lg:flex" />
        
        <!-- Desktop CTA -->
        <div class="hidden md:block">
          <CTAButton />
        </div>
        
        <!-- Mobile Menu Button -->
        <MobileMenuButton 
          :is-open="isMobileMenuOpen" 
          @toggle="toggleMobileMenu"
        />
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <MobileMenu 
      :is-open="isMobileMenuOpen" 
      @close="closeMobileMenu"
    />
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu when route changes
const route = useRoute();
watch(() => route.path, () => {
  closeMobileMenu();
});

// Prevent body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
});
</script>

<template>
  <section class="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        <!-- Left Content -->
        <div class="order-2 lg:order-1 text-center lg:text-left">
          <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Transform Your Social Media Strategy Today
          </h2>
          
          <p class="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
            Join thousands of content creators, social media managers, and businesses using AI to create engaging posts. Start free and upgrade anytime for unlimited access.
          </p>
          
          <button
            class="w-full xs:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto lg:mx-0"
            @click="handleGetStarted"
          >
            Get started for free
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <!-- Right Content - Dashboard Card -->
        <div class="order-1 lg:order-2">
          <ProfileDashboardCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleGetStarted = () => {
  console.log('Get started clicked');
};
</script>

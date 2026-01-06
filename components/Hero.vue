<template>
  <section class="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Get things done by awesome remote team
        </h1>
        
        <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          We share common trends and strategies for improving your rental income and making sure you stay in high demand.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="handleGetStarted"
          >
            Get started for free
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button
            class="w-full sm:w-auto text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg font-medium transition-all hover:bg-white active:scale-95"
            @click="handleLearnMore"
          >
            Learn more
          </button>
        </div>
      </div>
      
      <!-- Dashboard Preview -->
      <div class="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <DashboardPreview />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleGetStarted = () => {
  console.log('Get started clicked');
};

const handleLearnMore = () => {
  console.log('Learn more clicked');
};
</script>

<template>
  <section class="bg-gray-50 py-16 xs:py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10">
          Create Engaging Social Posts in Seconds with AI
        </h1>
        
        <p class="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 xs:mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
          Generate high-quality social media content for LinkedIn, Twitter, and Instagram. Save time, boost engagement, and never run out of ideas.
        </p>
        
        <div class="flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-5 sm:gap-6 px-2">
          <button
            class="w-full xs:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 xs:px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-lg text-base xs:text-lg sm:text-xl font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="handleGetStarted"
          >
            Get started for free
            <svg class="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button
            class="w-full xs:w-auto text-gray-700 hover:text-gray-900 px-6 xs:px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-lg text-base xs:text-lg sm:text-xl font-medium transition-all hover:bg-white active:scale-95"
            @click="handleLearnMore"
          >
            Learn more
          </button>
        </div>
      </div>
      
      <!-- Dashboard Preview -->
      <div class="mt-12 xs:mt-16 sm:mt-20 md:mt-28 lg:mt-32">
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

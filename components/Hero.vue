<template>
  <section class="bg-gray-50 py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Create Engaging Social Posts in Seconds with AI
        </h1>
        
        <p class="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 xs:mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Generate high-quality social media content for LinkedIn, Twitter, and Instagram. Save time, boost engagement, and never run out of ideas.
        </p>
        
        <div class="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 px-2">
          <button
            class="w-full xs:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-5 xs:px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm xs:text-base sm:text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="handleGetStarted"
          >
            Get started for free
            <svg class="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button
            class="w-full xs:w-auto text-gray-700 hover:text-gray-900 px-5 xs:px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm xs:text-base sm:text-lg font-medium transition-all hover:bg-white active:scale-95"
            @click="handleLearnMore"
          >
            Learn more
          </button>
        </div>
      </div>
      
      <!-- Dashboard Preview -->
      <div class="mt-10 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24">
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

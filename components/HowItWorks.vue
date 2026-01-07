<template>
  <section class="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Create content in seconds
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          With our AI-powered platform, you can easily generate engaging social media posts without effort. Create your next viral post today.
        </p>
      </div>
      
      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Side - Mockup -->
        <div class="order-2 lg:order-1">
          <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <!-- Calendar Header -->
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900">Content Calendar</h3>
              <div class="flex items-center gap-2">
                <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span class="text-sm font-medium text-gray-700">March 2026</span>
                <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Week Days -->
            <div class="grid grid-cols-7 gap-2 mb-4">
              <div v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day" class="text-center text-xs font-medium text-gray-500 py-2">
                {{ day }}
              </div>
            </div>
            
            <!-- Calendar Grid -->
            <div class="grid grid-cols-7 gap-2">
              <div v-for="i in 35" :key="i" class="aspect-square flex items-center justify-center text-sm rounded-lg hover:bg-gray-50 transition-colors" :class="i === 10 ? 'bg-indigo-600 text-white font-semibold hover:bg-indigo-700' : 'text-gray-700'">
                {{ i <= 31 ? i : '' }}
              </div>
            </div>
            
            <!-- Featured Post Card -->
            <div class="mt-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-medium opacity-90">11:00 AM - 12:30 PM</span>
                <div class="flex items-center gap-2">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">LinkedIn</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">Twitter</span>
                </div>
              </div>
              <h4 class="font-semibold text-lg mb-2">AI Content Generation</h4>
              <p class="text-sm opacity-90 mb-3">Scheduled post about productivity tips</p>
              <div class="flex items-center gap-2 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>5 collaborators</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Side - Steps -->
        <div class="order-1 lg:order-2 space-y-8">
          <!-- Step 1 -->
          <div class="flex gap-4 sm:gap-6">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                1
              </div>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Choose your platform
              </h3>
              <p class="text-base sm:text-lg text-gray-600">
                Select from LinkedIn, Twitter, or Instagram. Our AI adapts the content style to match each platform's best practices.
              </p>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="flex gap-4 sm:gap-6">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                2
              </div>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Describe your topic
              </h3>
              <p class="text-base sm:text-lg text-gray-600">
                Simply tell us what you want to post about. Our AI understands context and generates relevant, engaging content instantly.
              </p>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="flex gap-4 sm:gap-6">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                3
              </div>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Publish or schedule
              </h3>
              <p class="text-base sm:text-lg text-gray-600">
                Review your AI-generated post, make any tweaks, and publish immediately or schedule for the perfect time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

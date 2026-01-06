<template>
  <div class="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto px-2 sm:px-0">
    <!-- Main Card -->
    <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 relative z-10 w-full">
      <!-- Profile Header -->
      <div class="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <img 
          src="https://ui-avatars.com/api/?name=Sarah+Chen&background=6366f1&color=fff&size=128" 
          alt="Sarah Chen" 
          class="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-4 ring-white shadow-lg"
        />
        <div>
          <h3 class="text-base sm:text-lg font-bold text-gray-900">Sarah Chen</h3>
          <p class="text-xs sm:text-sm text-indigo-600 font-medium">Pro Plan</p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mb-6 sm:mb-8">
        <p class="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">This Month</p>
        
        <div class="grid grid-cols-2 gap-4 sm:gap-6">
          <!-- Posts Generated Stat -->
          <div>
            <p class="text-xs text-gray-500 mb-1">Posts Created</p>
            <p class="text-2xl sm:text-3xl font-bold text-indigo-600">127</p>
          </div>
          
          <!-- Saved Stat -->
          <div>
            <p class="text-xs text-gray-500 mb-1">Saved</p>
            <p class="text-2xl sm:text-3xl font-bold text-green-600">45</p>
          </div>
        </div>
      </div>

      <!-- Check All Activity -->
      <div class="mb-6 sm:mb-8">
        <p class="text-xs sm:text-sm text-gray-500 mb-2">Generation Activity</p>
        <div class="h-32 sm:h-40">
          <svg class="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
            <!-- Grid lines -->
            <line x1="0" y1="30" x2="300" y2="30" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="0" y1="60" x2="300" y2="60" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="0" y1="90" x2="300" y2="90" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="0" y1="120" x2="300" y2="120" stroke="#f3f4f6" stroke-width="1"/>
            
            <!-- Chart line -->
            <path 
              d="M0,100 L30,90 L60,95 L90,70 L120,75 L150,60 L180,65 L210,50 L240,55 L270,40 L300,45" 
              fill="none" 
              stroke="#6366f1" 
              stroke-width="3"
            />
            
            <!-- Gradient fill -->
            <path 
              d="M0,100 L30,90 L60,95 L90,70 L120,75 L150,60 L180,65 L210,50 L240,55 L270,40 L300,45 L300,150 L0,150 Z" 
              fill="url(#cardGradient)" 
              opacity="0.2"
            />
            
            <defs>
              <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.4" />
                <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all active:scale-95">
          View History
        </button>
        
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all active:scale-95 shadow-md hover:shadow-lg">
          Generate New Post
        </button>
      </div>
    </div>

    <!-- Floating Cards -->
    <div class="hidden lg:block">
      <!-- Top Left Card -->
      <div class="absolute -left-12 top-8 bg-white rounded-lg shadow-lg p-3 w-44 opacity-90">
        <p class="text-xs text-gray-500 mb-2">Recent Platforms</p>
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-blue-600"></div>
            <span class="text-xs text-gray-700">LinkedIn</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-sky-500"></div>
            <span class="text-xs text-gray-700">Twitter</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-pink-500"></div>
            <span class="text-xs text-gray-700">Instagram</span>
          </div>
        </div>
      </div>

      <!-- Top Right Card -->
      <div class="absolute -right-8 -top-4 bg-white rounded-lg shadow-lg p-3 w-44 opacity-90">
        <p class="text-xs text-gray-500 mb-2">Popular Tones</p>
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span class="text-xs text-gray-700">Professional</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500"></div>
            <span class="text-xs text-gray-700">Casual</span>
          </div>
        </div>
      </div>

      <!-- Bottom Right Card -->
      <div class="absolute -right-16 bottom-20 bg-white rounded-lg shadow-lg p-3 w-48 opacity-90">
        <p class="text-xs text-gray-500 mb-2">Daily Limit</p>
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-700">Usage</span>
            <span class="text-xs font-semibold text-green-600">Unlimited</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5">
            <div class="bg-green-500 h-1.5 rounded-full" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

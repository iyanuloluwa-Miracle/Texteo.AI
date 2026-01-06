<template>
  <div class="relative max-w-5xl mx-auto">
    <!-- Browser Window Frame -->
    <div class="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <!-- Browser Header -->
      <div class="bg-gray-100 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-gray-200">
        <div class="flex gap-1.5 sm:gap-2">
          <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="flex-1 ml-2 sm:ml-4">
          <div class="bg-white rounded px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-500 max-w-xs sm:max-w-sm">
            Aitez - Sartaz Website
          </div>
        </div>
      </div>
      
      <!-- Dashboard Content -->
      <div class="bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
        <!-- Header Section -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
              Sessions
            </h2>
            <p class="text-xs sm:text-sm text-gray-500">234 this month</p>
          </div>
          
          <div class="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <button class="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 hover:bg-white rounded-lg transition-colors border border-gray-200">
              Filter
            </button>
            <div class="flex-1 sm:flex-initial bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2">
              <span>Focused</span>
              <span class="text-xs">2 months</span>
            </div>
          </div>
        </div>
        
        <!-- Stats Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6">
          <!-- Card 1 -->
          <div class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <p class="text-xs sm:text-sm text-gray-500 mb-1">This Weekly</p>
                <p class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">23</p>
              </div>
              <span class="text-xs sm:text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+16%</span>
            </div>
            <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src="https://ui-avatars.com/api/?name=Richard+Spencer&background=6366f1&color=fff" alt="Richard Spencer" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
              <div class="min-w-0">
                <p class="text-xs sm:text-sm font-semibold text-gray-900 truncate">Richard Spencer</p>
                <p class="text-xs text-gray-500 truncate">India</p>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="text-gray-500">Clicks</span>
                <span class="font-semibold text-gray-900">02</span>
              </div>
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="text-gray-500">Session</span>
                <span class="font-semibold text-gray-900">07:45</span>
              </div>
            </div>
            <div class="mt-3 sm:mt-4 h-12 sm:h-16">
              <svg class="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path d="M0,40 L20,35 L40,45 L60,30 L80,38 L100,25 L120,32 L140,28 L160,35 L180,20 L200,30" 
                      fill="none" stroke="#6366f1" stroke-width="2" opacity="0.6"/>
                <path d="M0,40 L20,35 L40,45 L60,30 L80,38 L100,25 L120,32 L140,28 L160,35 L180,20 L200,30 L200,60 L0,60 Z" 
                      fill="url(#gradient1)" opacity="0.1"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <p class="text-xs sm:text-sm text-gray-500 mb-1">This Session viewed</p>
                <p class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">356</p>
              </div>
            </div>
            <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src="https://ui-avatars.com/api/?name=Kit+Latherdale&background=10b981&color=fff" alt="Kit Latherdale" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
              <div class="min-w-0">
                <p class="text-xs sm:text-sm font-semibold text-gray-900 truncate">Kit Latherdale</p>
                <p class="text-xs text-gray-500 truncate">Turkey</p>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="text-gray-500">Clicks</span>
                <span class="font-semibold text-gray-900">07</span>
              </div>
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="text-gray-500">Session</span>
                <span class="font-semibold text-gray-900">04:03</span>
              </div>
            </div>
            <div class="mt-3 sm:mt-4 h-12 sm:h-16">
              <svg class="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path d="M0,35 L20,40 L40,32 L60,38 L80,30 L100,35 L120,28 L140,33 L160,25 L180,30 L200,22" 
                      fill="none" stroke="#9ca3af" stroke-width="2" opacity="0.6"/>
              </svg>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <p class="text-xs sm:text-sm text-gray-500 mb-1">This Weekly</p>
                <p class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">13</p>
              </div>
              <span class="text-xs sm:text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+5%</span>
            </div>
            <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src="https://ui-avatars.com/api/?name=Abigail+Erich&background=ec4899&color=fff" alt="Abigail Erich" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
              <div class="min-w-0">
                <p class="text-xs sm:text-sm font-semibold text-gray-900 truncate">Abigail Erich</p>
                <p class="text-xs text-gray-500 truncate">Brazil</p>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="text-gray-500">Clicks</span>
                <span class="font-semibold text-gray-900">13</span>
              </div>
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="text-gray-500">Session</span>
                <span class="font-semibold text-gray-900">09:14</span>
              </div>
            </div>
            <div class="mt-3 sm:mt-4 h-12 sm:h-16">
              <svg class="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path d="M0,45 L20,38 L40,42 L60,35 L80,40 L100,32 L120,36 L140,30 L160,35 L180,28 L200,32" 
                      fill="none" stroke="#10b981" stroke-width="2" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Bottom Row - Minimal Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <div class="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
            <div class="flex items-center gap-2 sm:gap-3">
              <img src="https://ui-avatars.com/api/?name=Amy+Goldhurst&background=f59e0b&color=fff" alt="User" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-900 truncate">Amy Goldhurst</p>
                <p class="text-xs text-gray-500 truncate">USA</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
            <div class="flex items-center gap-2 sm:gap-3">
              <img src="https://ui-avatars.com/api/?name=Zoe+Hunt&background=8b5cf6&color=fff" alt="User" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-900 truncate">Zoe Hunt</p>
                <p class="text-xs text-gray-500 truncate">Canada</p>
              </div>
            </div>
          </div>
          
          <div class="hidden sm:block bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
            <div class="flex items-center gap-2 sm:gap-3">
              <img src="https://ui-avatars.com/api/?name=Lauren+Marchand&background=ef4444&color=fff" alt="User" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-900 truncate">Lauren Marchand</p>
                <p class="text-xs text-gray-500 truncate">UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

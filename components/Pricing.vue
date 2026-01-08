<template>
  <section id="pricing" class="bg-gray-50 py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
        <h2 class="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Simple, transparent pricing
        </h2>
        <p class="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Start free and upgrade when you need more. No hidden fees, cancel anytime.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        
        <!-- Free Plan -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Free</h3>
            </div>
            
            <div class="flex items-baseline gap-1 mb-2">
              <span class="text-4xl sm:text-5xl font-bold text-gray-900">$0</span>
              <span class="text-gray-500 text-sm">/month</span>
            </div>
            <p class="text-sm text-gray-600">Perfect for getting started</p>
          </div>

          <button 
            class="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium text-sm py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all mb-8"
            @click="handleGetStarted('free')"
          >
            Get started free
          </button>

          <!-- Features -->
          <div class="space-y-4">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">What's included</p>
            
            <ul class="space-y-3">
              <li v-for="feature in freePlanFeatures" :key="feature.text" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-gray-600">{{ feature.text }}</span>
              </li>
            </ul>

            <!-- Limitations -->
            <div class="pt-4 border-t border-gray-100">
              <ul class="space-y-3">
                <li v-for="limit in freePlanLimitations" :key="limit.text" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span class="text-sm text-gray-400">{{ limit.text }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Pro Plan -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 border-2 border-indigo-600 hover:shadow-xl transition-all duration-300 relative">
          <!-- Popular Badge -->
          <div class="absolute -top-3 left-6">
            <span class="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Most popular
            </span>
          </div>

          <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Pro</h3>
            </div>
            
            <div class="flex items-baseline gap-1 mb-2">
              <span class="text-4xl sm:text-5xl font-bold text-gray-900">$19</span>
              <span class="text-gray-500 text-sm">/month</span>
            </div>
            <p class="text-sm text-gray-600">Billed monthly</p>
          </div>

          <button 
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-3 px-6 rounded-xl transition-all hover:shadow-lg mb-8"
            @click="handleGetStarted('pro')"
          >
            Start free trial
          </button>

          <!-- Features -->
          <div class="space-y-4">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Everything in Free, plus</p>
            
            <ul class="space-y-3">
              <li v-for="feature in proPlanFeatures" :key="feature.text" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-gray-700" :class="feature.highlight ? 'font-medium' : ''">
                  {{ feature.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Free plan features
const freePlanFeatures = [
  { text: '5 AI generations per day' },
  { text: '20 posts per month' },
  { text: 'General text posts' },
  { text: 'Default/Neutral tone' },
  { text: 'Save last 10 posts' },
  { text: 'Copy to clipboard' },
];

const freePlanLimitations = [
  { text: 'Platform-specific optimization' },
  { text: 'Advanced tone controls' },
  { text: 'Unlimited post history' },
];

// Pro plan features
const proPlanFeatures = [
  { text: 'Unlimited AI generations', highlight: true },
  { text: 'LinkedIn, Twitter/X, Instagram posts' },
  { text: 'All tone options (Professional, Marketing, Casual, Viral)' },
  { text: 'Platform-optimized content' },
  { text: 'Unlimited post history & search' },
  { text: 'Favorite & draft saving' },
  { text: 'Hashtag suggestions' },
  { text: 'CTA generator' },
  { text: 'No watermark on exports' },
  { text: 'Priority API access' },
];

const handleGetStarted = (plan: 'free' | 'pro') => {
  console.log(`Get started with ${plan} plan`);
  // Navigate to signup or checkout
};
</script>

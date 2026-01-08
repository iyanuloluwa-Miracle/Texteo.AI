<template>
  <div class="overflow-x-hidden">
    <Navbar />
    
    <main class="min-h-screen overflow-x-hidden">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}
</style>
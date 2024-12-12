<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-blue-600 text-white p-4 flex flex-wrap items-center justify-between">
        <router-link to="/"><h1 class="text-2xl font-bold">Y.J Shop</h1></router-link>

  
  <div class="text-lg flex flex-wrap gap-4 mt-2 sm:mt-0">
    <router-link to="/cart" class="hover:underline">🛒</router-link>
  </div>
</header>
  
      <main class="flex-grow p-4">
        <slot />
      </main>
  
      <footer class="bg-gray-800 text-white p-4 text-center text-sm sm:text-base">
  <p>&copy; 2024 Y.J Shop. All rights reserved.</p>
</footer>

    </div>
  </template>
  <script lang="ts">
  export default {
    name: 'BaseLayout',
  };
  </script>
  
  <style scoped>
  </style>
  
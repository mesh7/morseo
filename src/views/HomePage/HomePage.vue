<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "primevue/button";

const router = useRouter();

const navigateToCodePage = () => {
  router.push({ name: "CodePage" });
};

const navigateToTutorial = () => {
  router.push({ name: "CodePage" });
};
</script>

<template>
  <!-- 🌐 Navigation Header -->
  <header class="flex justify-between items-center px-8 py-6">
    <h1 class="text-2xl font-bold">Morseo</h1>
    <nav class="space-x-4">
      <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
      <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Left Content -->
    <div class="md:w-1/2 text-center md:text-left">
      <h2 class="text-4xl font-extrabold mb-4">
        Learn Morse Code - The Timeless Language of Signals
      </h2>
      <p class="text-lg text-gray-600 mb-6">
        Welcome to Morseo, your interactive companion for mastering Morse code —
        the timeless language of signals and sound. Whether you're a curious
        beginner, a history buff, or a survivalist prepping for off-grid
        communication, we've got you covered.
      </p>
      <div class="space-x-4">
        <div class="buttons mt-2">
          <Button
            class="mr-6"
            id="start-button"
            severity="primary"
            rounded
            size="large"
            @click="navigateToCodePage"
            ><p class="font-semibold">Start Challenge</p></Button
          >

          <Button
            class=""
            id="tutorial-button"
            severity="secondary"
            rounded
            size="large"
            @click="navigateToTutorial"
            ><p class="font-semibold">Tutorial</p></Button
          >
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <div class="md:w-1/2 mb-10 md:mb-0">
      <img
        src="../../assets/hero.JPG"
        alt="Hero Image"
        class="rounded-lg shadow-lg w-full h-auto"
      />
    </div>
  </section>
</template>

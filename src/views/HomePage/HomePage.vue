<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "primevue/button";
import ToggleSwitch from "primevue/toggleswitch";

const router = useRouter();

const navigateToCodePage = () => {
  router.push({ name: "CodePage" });
};

const navigateToTutorial = () => {
  router.push({ name: "CodePage" });
};

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};
</script>

<template>
  <!-- Navigation Header -->
  <header class="flex justify-between items-center px-8 py-6">
    <h1 class="text-2xl font-bold">Morseo</h1>
    <nav class="space-x-4">
      <a href="#" class="text-gray-600 hover:text-blue-600">Morse Chart</a>
      <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
      <ToggleSwitch size="small" @click="toggleDarkMode" />
    </nav>
  </header>

  <!-- Hero Section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Content -->
    <div class="md:w-1/2 text-center md:text-left">
      <h1 class="text-4xl font-extrabold mb-4">
        Learn Morse Code - The Timeless Language of Signals
      </h1>
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
            ><p class="font-semibold">Start Challenge</p>
          </Button>

          <Button
            class=""
            id="tutorial-button"
            severity="secondary"
            rounded
            size="large"
            @click="navigateToTutorial"
            ><p class="font-semibold">Tutorial</p>
          </Button>
        </div>
      </div>
    </div>

    <!-- Hero Image -->
    <div class="md:w-1/2 mb-10 md:ml-4 md:mb-0">
      <img
        src="../../assets/hero_1.PNG"
        alt="Morseo Hero Image"
        class="card p-8 w-full h-auto"
      />
    </div>
  </section>
</template>

<style scoped>
/* Glassmorphism card effect */
.card {
  backdrop-filter: blur(2px) saturate(99%);
  -webkit-backdrop-filter: blur(2px) saturate(99%);
  background-color: rgba(255, 255, 255, 0.26);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.glass-card {
  width: 240px;
  height: 360px;
  background: rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}
</style>

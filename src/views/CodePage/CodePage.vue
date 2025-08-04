<script setup lang="ts">
import { useRouter } from "vue-router";
import { useMorseStore } from "../../store/morse-store/morse-store";
import Card from "primevue/card";
import Button from "primevue/button";

const router = useRouter();
const morseStore = useMorseStore();

const navigateToCodePage = () => {
  router.push({ name: "HomePage" });
};

morseStore.pickRandomWord();

const pressedKeys: any = {};

window.addEventListener("keydown", (e) => {
  // Only record the time if it's the first press (not repeated)
  if (!pressedKeys[e.code]) {
    pressedKeys[e.code] = e.timeStamp;
  }
});

window.addEventListener("keyup", (e) => {
  if (pressedKeys[e.code]) { 
    const duration = (e.timeStamp - pressedKeys[e.code]) / 1000; // in seconds
    console.log(
      `Key "${e.code}" was pressed for ${duration.toFixed(2)} seconds`
    );
    console.log(pressedKeys, "pressedKeys");
    delete pressedKeys[e.code]; // reset
  }
});
</script>

<template>
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Content -->
    <div class="text-center md:text-left">
      <Card>
        <template #title
          ><h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-400 md:text-5xl lg:text-6xl dark:text-white"
          >
            Learn Morse Code
          </h1>
          <h6
            class="mb-4 text-2xl font-extrabold text-gray-500 dark:text-white"
          >
            The Timeless Language of Signals
          </h6></template
        >
        <template #content>
          <p class="mt-6 text-lg text-gray-900 dark:text-white">
            Welcome to Morseo, your interactive companion for mastering Morse
            code - the timeless language of signals and sound. Whether you're a
            curious beginner, a history buff, or a survivalist prepping for
            off-grid communication, we've got you covered.
          </p>
        </template>
      </Card>
      <div class="space-x-4">
        <div class="buttons mt-10">
          <Button
            class="mr-6"
            style="
              background-color: var(--color-indigo-400);
              border: 2px solid var(--color-indigo-400);
            "
            id="start-button"
            severity="primary"
            rounded
            size="large"
            @click="navigateToCodePage"
            ><p class="mx-3 font-semibold text-white">Start Challenge</p>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

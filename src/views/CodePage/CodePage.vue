<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMorseStore } from "../../store/morse-store/morse-store";

import Card from "primevue/card";
import Button from "primevue/button";

const router = useRouter();
const morseStore = useMorseStore();

const { morseWord, morseWordArray } = storeToRefs(morseStore);

const navigateToCodePage = () => {
  router.push({ name: "HomePage" });
};

// Fetching the morse word
onMounted(() => {
  morseStore.pickRandomWord();
});

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
  } else if (e.key === "Enter") {
    console.log("Enter key pressed anywhere on the document!");
  }
});
</script>

<template>
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-center px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Content -->
    <div class="w-4xl">
      <Card>
        <template #title
          ><h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-400 md:text-5xl lg:text-6xl dark:text-white"
          >
            Learn Morse Code
          </h1>
        </template>
        <template #content>
          <h6
            class="mb-4 text-2xl font-extrabold text-gray-500 dark:text-white"
          >
            {{ morseWord }}
          </h6>
          <p class="mt-6 text-lg text-gray-900 dark:text-white">
            Welcome to Morseo
          </p>
          <div
            v-for="(letter, index) in morseWordArray"
            :key="index"
            class="dummy"
          >
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
              ><p class="mx-3 font-semibold text-white">{{ letter }}</p>
            </Button>
          </div>
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
                @click="morseStore.pickRandomWord()"
                ><p class="mx-3 font-semibold text-white">Generate new word</p>
              </Button>
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
        </template>
      </Card>
    </div>
  </section>
</template>

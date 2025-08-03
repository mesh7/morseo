<script setup lang="ts">
import { useRouter } from "vue-router";
import Card from "primevue/card";
import Button from "primevue/button";
import WordCard from "../../components/WordCard/WordCard.vue";

const router = useRouter();

const navigateToCodePage = () => {
  router.push({ name: "HomePage" });
};
</script>

<template>
  <!-- Tutorial Page -->
  <h2>Tutorial Page</h2>
  <WordCard msg="Vite + Vue" />
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
            Tutorial
          </h1>
          <h6
            class="mb-4 text-2xl font-extrabold text-gray-500 dark:text-white"
          >
            Tutorial
          </h6></template
        >
        <template #content>
          <p class="mt-6 text-lg text-gray-900 dark:text-white">Tutorial</p>
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
            ><p class="mx-3 font-semibold text-white">Tutorial</p>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

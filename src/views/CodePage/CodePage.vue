<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "primevue/button";
// import WordCard from "../../components/WordCard/WordCard.vue";

const router = useRouter();

const navigateToCodePage = () => {
  router.push({ name: "HomePage" });
};
</script>

<template>
  <h2>Code Page</h2>
  <!-- <WordCard msg="Vite + Vue" /> -->
  <Button @click="navigateToCodePage">Go to Home Page</Button>
</template>

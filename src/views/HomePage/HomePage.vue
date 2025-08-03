<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "primevue/button";

const router = useRouter();

const navigateToCodePage = () => {
  router.push({ name: "CodePage" });
};
</script>

<template>
  <h2>Home Page</h2>
  <Button @click="navigateToCodePage">Go to Code Page</Button>
</template>

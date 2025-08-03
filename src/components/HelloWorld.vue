<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <Button label="Secondary" severity="secondary" />

  <div class="card">
    <p>Morseo is a</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
</template>

<style scoped></style>

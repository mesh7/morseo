<script setup lang="ts">
// import { ref } from "vue";
import Button from "primevue/button";

defineProps<{ msg: string }>();
</script>

<template>
  <Button label="Secondary" severity="secondary" />
</template>

<style scoped></style>

<script setup lang="ts">
const selected = ref(null);

const items = [
  "/slider/1.jpeg",
  "/slider/2.jpeg",
  "/slider/3.jpeg",
  "/slider/4.jpeg",
  "/slider/5.jpeg",
];

const open = (img) => (selected.value = img);
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    arrows
    dots
    :autoplay="{ delay: 2000 }"
    :items="items"
    :ui="{ item: 'basis-1/3' }"
    @click="open(item)"
  >
    <img
      :src="item"
      width="620"
      height="320"
      class="rounded-lg"
      loading="lazy"
    >
  </UCarousel>

  <Dialog v-if="selected" @close="selected = null">
    <img :src="selected" class="max-w-full max-h-screen" />
  </Dialog>
</template>

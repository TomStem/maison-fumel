<script setup lang="ts">
import Galleria from 'primevue/galleria';

defineOptions({
  name: 'SectionGallery',
});

interface Image {
  itemImageSrc: string;
}

const { isVisible, activeIndex, galleryImages, openGallery } = useGallery();

interface Props {
  images: Image[];
  headerTextKey: string;
  visibleImages?: number;
}

withDefaults(defineProps<Props>(), {
  visibleImages: 4,
});
</script>

<template>
  <Galleria
    v-model:visible="isVisible"
    v-model:active-index="activeIndex"
    :value="galleryImages.length ? galleryImages : images"
    :num-visible="4"
    :circular="true"
    :full-screen="true"
    :show-item-navigators="true"
    :show-thumbnails="false"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        alt="''"
        class="max-w-[1250px] max-h-[90vh] object-contain rounded-xl shadow-xl"
      />
    </template>
  </Galleria>

  <div>
    <div class="flex justify-between items-end mb-8">
      <h3
        class="text-3xl font-serif font-bold border-l-4 border-[#93a9c6] pl-4"
      >
        {{ $t(headerTextKey) }}
      </h3>

      <NuxtLink
        to="/photos"
        class="hidden desktop:flex text-[#93a9c6] font-medium underline cursor-pointer"
      >
        {{ $t('page.home.photos.view-all') }}
      </NuxtLink>
    </div>

    <div class="grid gap-4 grid-cols-2 desktop:grid-cols-4">
      <div
        v-for="(img, index) in images.slice(0, visibleImages)"
        :key="index"
        class="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-gray-100"
        @click="openGallery(images, index)"
      >
        <img
          :src="img.itemImageSrc"
          loading="lazy"
          alt="''"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <span
            class="text-white scale-90 group-hover:scale-100 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>

    <NuxtLink
      to="/photos"
      class="flex desktop:hidden mt-4 justify-end text-[#93a9c6] font-medium underline cursor-pointer"
    >
      {{ $t('page.home.photos.view-all') }}
    </NuxtLink>
  </div>
</template>

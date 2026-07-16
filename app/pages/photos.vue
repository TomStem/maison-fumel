<script setup lang="ts">
import Galleria from 'primevue/galleria';

defineOptions({
  name: 'PhotosPage',
});

const { isVisible, activeIndex, galleryImages, openGallery } = useGallery();

const selectedCategory = ref('outside-pool');
const isCategoryOpen = ref(false);
const isDesktop = ref(true);

const categories = [
  { id: 'outside-pool', name: 'page.photos.categories.outside-pool' },
  { id: 'living-space', name: 'page.photos.categories.living-space' },
  { id: 'kitchen', name: 'page.photos.categories.kitchen' },
  { id: 'bedrooms', name: 'page.photos.categories.bedrooms' },
  { id: 'bathrooms', name: 'page.photos.categories.bathrooms' },
  { id: 'poolhouse', name: 'page.photos.categories.poolhouse' },
  { id: 'area', name: 'page.photos.categories.area' },
];

const images = [
  {
    category: 'outside-pool',
    full: '/images/huis/1-zwembad-en-achterkant-huis.webp',
    thumb: '/images/huis/1-zwembad-en-achterkant-huis.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/2-voorzijde-vanaf-pad.webp',
    thumb: '/images/huis/2-voorzijde-vanaf-pad.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/3-voorzijde-vanaf-pad-halverwege.webp',
    thumb: '/images/huis/3-voorzijde-vanaf-pad-halverwege.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/5-zwembad-met-achterkant-huis.webp',
    thumb: '/images/huis/5-zwembad-met-achterkant-huis.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/6-zwembad-met-achterkant-huis.webp',
    thumb: '/images/huis/6-zwembad-met-achterkant-huis.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/7-achterzijde-met-terrassen.webp',
    thumb: '/images/huis/7-achterzijde-met-terrassen.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/8-achterzijde-pad-zwembad.webp',
    thumb: '/images/huis/8-achterzijde-pad-zwembad.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/9-terras-zicht-op-zwembad.webp',
    thumb: '/images/huis/9-terras-zicht-op-zwembad.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/10-terras-met-meubilair.webp',
    thumb: '/images/huis/10-terras-met-meubilair.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/11-zwembad-vanaf-huis-gezien.webp',
    thumb: '/images/huis/11-zwembad-vanaf-huis-gezien.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/34-1-achtertuin.webp',
    thumb: '/images/huis/34-1-achtertuin.webp',
  },
  {
    category: 'outside-pool',
    full: '/images/huis/36-laadunit-ev.webp',
    thumb: '/images/huis/36-laadunit-ev.webp',
  },
  {
    category: 'living-space',
    full: '/images/huis/15-entree-eetkamer.webp',
    thumb: '/images/huis/15-entree-eetkamer.webp',
  },
  {
    category: 'living-space',
    full: '/images/huis/16-woonkamer-boven.webp',
    thumb: '/images/huis/16-woonkamer-boven.webp',
  },
  {
    category: 'living-space',
    full: '/images/huis/17-woonkamer-boven-eetkamer.webp',
    thumb: '/images/huis/17-woonkamer-boven-eetkamer.webp',
  },
  {
    category: 'living-space',
    full: '/images/huis/18-woonkamer-beneden.webp',
    thumb: '/images/huis/18-woonkamer-beneden.webp',
  },
  {
    category: 'living-space',
    full: '/images/huis/19-woonkamer-beneden-stoelen.webp',
    thumb: '/images/huis/19-woonkamer-beneden-stoelen.webp',
  },
  {
    category: 'kitchen',
    full: '/images/huis/12-keuken.webp',
    thumb: '/images/huis/12-keuken.webp',
  },
  {
    category: 'kitchen',
    full: '/images/huis/13-keuken.webp',
    thumb: '/images/huis/13-keuken.webp',
  },
  {
    category: 'kitchen',
    full: '/images/huis/14-keuken.webp',
    thumb: '/images/huis/14-keuken.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/20-slaapkamer-bg.webp',
    thumb: '/images/huis/20-slaapkamer-bg.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/21-slaapkamer-bg.webp',
    thumb: '/images/huis/21-slaapkamer-bg.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/24-slaapkamer-1-verdieping-voorzijde.webp',
    thumb: '/images/huis/24-slaapkamer-1-verdieping-voorzijde.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/25-slaapkamer-1-verdieping-voorzijde.webp',
    thumb: '/images/huis/25-slaapkamer-1-verdieping-voorzijde.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/27-slaapkamer-2-verdieping-voorzijde-oud.webp',
    thumb: '/images/huis/27-slaapkamer-2-verdieping-voorzijde-oud.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/28-slaapkamer-3-achterzijde.webp',
    thumb: '/images/huis/28-slaapkamer-3-achterzijde.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/29-slaapkamer-3-achterzijde.webp',
    thumb: '/images/huis/29-slaapkamer-3-achterzijde.webp',
  },
  {
    category: 'bedrooms',
    full: '/images/huis/31-slaapkamer-3-achterzijde.webp',
    thumb: '/images/huis/31-slaapkamer-3-achterzijde.webp',
  },
  {
    category: 'bathrooms',
    full: '/images/huis/23-badkamer-ensuite-bg.webp',
    thumb: '/images/huis/23-badkamer-ensuite-bg.webp',
  },
  {
    category: 'bathrooms',
    full: '/images/huis/32-badkamer-verdieping.webp',
    thumb: '/images/huis/32-badkamer-verdieping.webp',
  },
  {
    category: 'bathrooms',
    full: '/images/huis/33-badkamer-verdieping.webp',
    thumb: '/images/huis/33-badkamer-verdieping.webp',
  },
  {
    category: 'poolhouse',
    full: '/images/huis/40-poolhouse.webp',
    thumb: '/images/huis/40-poolhouse.webp',
  },
  {
    category: 'poolhouse',
    full: '/images/huis/41-poolhouse-binnen-1.webp',
    thumb: '/images/huis/41-poolhouse-binnen-1.webp',
  },
  {
    category: 'poolhouse',
    full: '/images/huis/42-poolhouse-binnen-2.webp',
    thumb: '/images/huis/42-poolhouse-binnen-2.webp',
  },
  {
    category: 'poolhouse',
    full: '/images/huis/43-poolhouse-bbq.webp',
    thumb: '/images/huis/43-poolhouse-bbq.webp',
  },
  {
    caption: 'Fumel en Lot',
    category: 'area',
    full: '/images/region/20-fumel-en-lot.jpg',
    thumb: '/images/region/20-fumel-en-lot.jpg',
  },
  {
    caption: 'Villeneuve sur Lot',
    category: 'area',
    full: '/images/region/21-villeneuve-sur-lot.jpg',
    thumb: '/images/region/21-villeneuve-sur-lot.jpg',
  },
  {
    caption: 'Bonaguil',
    category: 'area',
    full: '/images/region/22-bonaguil.jpg',
    thumb: '/images/region/22-bonaguil.jpg',
  },
  {
    caption: 'Allemans du Dropt',
    category: 'area',
    full: '/images/region/23-allemans-du-dropt.jpg',
    thumb: '/images/region/23-allemans-du-dropt.jpg',
  },
  {
    caption: "Penne d'Agenais",
    category: 'area',
    full: '/images/region/24-penne-d-agenais.jpg',
    thumb: '/images/region/24-penne-d-agenais.jpg',
  },
  {
    caption: 'Pujols',
    category: 'area',
    full: '/images/region/25-pujols.jpg',
    thumb: '/images/region/25-pujols.jpg',
  },
  {
    caption: 'Agen',
    category: 'area',
    full: '/images/region/26-agen.jpg',
    thumb: '/images/region/26-agen.jpg',
  },
  {
    caption: 'Château de Gavaudun',
    category: 'area',
    full: '/images/region/27-chateau-de-gavaudun.jpg',
    thumb: '/images/region/27-chateau-de-gavaudun.jpg',
  },
  {
    caption: 'Villereal',
    category: 'area',
    full: '/images/region/28-villereal.jpg',
    thumb: '/images/region/28-villereal.jpg',
  },
  {
    caption: 'Moulin des Tours',
    category: 'area',
    full: '/images/region/29-moulin-des-tours.jpg',
    thumb: '/images/region/29-moulin-des-tours.jpg',
  },
  {
    caption: 'Nerac',
    category: 'area',
    full: '/images/region/30-nerac.jpg',
    thumb: '/images/region/30-nerac.jpg',
  },
  {
    caption: 'Cahors',
    category: 'area',
    full: '/images/region/31-cahors.jpg',
    thumb: '/images/region/31-cahors.jpg',
  },
];

const filteredImages = computed(() =>
  images.filter((img) => img.category === selectedCategory.value),
);

function selectCategory(catId: string) {
  selectedCategory.value = catId;
}

function checkScreenSize() {
  isDesktop.value = window.innerWidth >= 768;
}

watch(selectedCategory, () => {
  activeIndex.value = 0;
});

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  const handleOutsideClick = (event: MouseEvent) => {
    if (!isVisible.value) return;

    const target = event.target as HTMLElement;
    const galleriaContent = document.querySelector('.p-galleria-content');

    if (
      target.classList.contains('p-galleria-mask') &&
      galleriaContent &&
      !galleriaContent.contains(target)
    ) {
      isVisible.value = false;
    }
  };

  document.addEventListener('click', handleOutsideClick);

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
    document.removeEventListener('click', handleOutsideClick);
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <div class="pt-28 max-w-7xl mx-auto px-4 py-16 space-y-10">
    <h2
      class="text-2xl md:text-5xl font-serif font-bold mb-4 border-l-4 border-[#93a9c6] pl-4"
    >
      {{ $t('navigation.photos') }}
    </h2>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-64 shrink-0">
        <div
          class="bg-white shadow-xl md:shadow-xl rounded-3xl p-4 md:p-6 h-fit sticky top-32"
        >
          <div
            class="flex items-center justify-between cursor-pointer md:cursor-default"
            @click="isCategoryOpen = !isCategoryOpen"
          >
            <h2 class="font-semibold md:mb-4">
              {{ $t('page.photos.categories.header') }}
            </h2>
            <span
              class="md:hidden transition-transform duration-300"
              :class="{ 'rotate-180': isCategoryOpen }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          <Transition
            enter-active-class="transition-[max-height] duration-300 ease-in-out"
            enter-from-class="max-h-0 overflow-hidden"
            enter-to-class="max-h-96 overflow-hidden"
            leave-active-class="transition-[max-height] duration-300 ease-in-out"
            leave-from-class="max-h-96 overflow-hidden"
            leave-to-class="max-h-0 overflow-hidden"
          >
            <ul
              v-show="isCategoryOpen || isDesktop"
              class="mt-4 md:mt-0 flex flex-col gap-1"
            >
              <li
                v-for="cat in categories"
                :key="cat.id"
                class="cursor-pointer p-3 md:p-2 rounded-xl transition-all"
                :class="[
                  selectedCategory === cat.id
                    ? 'bg-[#93a9c6] text-white font-semibold'
                    : 'hover:bg-gray-100 text-gray-700',
                ]"
                @click="selectCategory(cat.id)"
              >
                {{ $t(cat.name) }}
              </li>
            </ul>
          </Transition>
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <div
          v-if="filteredImages.length === 0"
          class="text-center py-20 text-gray-500"
        >
          {{ $t('page.photos.no-images') }}
        </div>

        <div
          v-else
          class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <div
            v-for="(img, index) in filteredImages"
            :key="index"
            class="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-gray-100"
            @click="openGallery(filteredImages, index)"
          >
            <img
              :src="img.thumb"
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
      </div>

      <Galleria
        v-model:visible="isVisible"
        v-model:active-index="activeIndex"
        :value="galleryImages.length ? galleryImages : filteredImages"
        :circular="true"
        :full-screen="true"
        :show-item-navigators="true"
        :show-thumbnails="false"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.full"
            alt="''"
            class="md:max-w-[1250px] md:max-h-[90vh] object-contain shadow-xl"
          />
        </template>

        <template #caption="slotProps">
          <div v-if="slotProps.item.caption" class="custom-caption">
            {{ slotProps.item.caption }}
          </div>
        </template>
      </Galleria>
    </div>
  </div>
</template>

<style>
.p-galleria-caption {
  background: transparent;
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.8),
    0 2px 6px rgba(0, 0, 0, 0.6);
}
</style>

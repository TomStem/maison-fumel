<script setup lang="ts">
import { Check } from '@lucide/vue';

defineOptions({
  name: 'ComfortSection',
});

const comfortList = [
  'page.home.comfort-amenities.list.private-pool',
  'page.home.comfort-amenities.list.poolhouse-kitchen',
  'page.home.comfort-amenities.list.badrooms',
  'page.home.comfort-amenities.list.bathrooms',
  'page.home.comfort-amenities.list.kitchen',
  'page.home.comfort-amenities.list.bbq-kitchen',
  'page.home.comfort-amenities.list.terraces',
  'page.home.comfort-amenities.list.terrain',
  'page.home.comfort-amenities.list.parking',
  'page.home.comfort-amenities.list.location',
];
</script>

<template>
  <div
    class="grid items-center grid-cols-1 gap-6 desktop:max-w-7xl desktop:mx-auto desktop:px-6 desktop:grid-cols-2 desktop:gap-12"
  >
    <div
      class="w-full flex items-center justify-center flex-col gap-y-3 desktop:gap-y-0 desktop:relative desktop:h-[500px] desktop:flex-row"
    >
      <div
        class="hidden desktop:flex relative z-10 p-2 bg-white rounded-full shadow-xl border border-slate-100"
      >
        <img
          src="/images/huis/2-voorzijde-vanaf-pad.webp"
          class="w-80 h-80 object-cover rounded-full"
          alt="Le Petit Wren Exterior"
        >
      </div>

      <div
        class="flex items-center justify-center bg-villa-beige-600 p-4 shadow-lg border border-slate-100 w-full h-fit rounded-3xl desktop:absolute desktop:top-0 desktop:left-[35%] desktop:-translate-x-1/2 desktop:z-30 desktop:w-52 desktop:h-52 desktop:rounded-full"
      >
        <i18n-t
          keypath="page.home.comfort-amenities.circle.1"
          tag="p"
          class="hidden desktop:flex flex text-white leading-tight text-center font-bold text-xl"
        >
          <template #newline>
            <br >
          </template>
        </i18n-t>

        <p
          class="desktop:hidden text-white leading-tight text-center font-bold text-xl"
        >
          {{ $t('page.home.comfort-amenities.circle.1') }}
        </p>
      </div>

      <div
        class="flex items-center justify-center bg-villa-beige-200 p-4 shadow-lg border border-slate-100 w-full h-fit rounded-3xl desktop:absolute desktop:top-9 desktop:right-[15%] desktop:z-20 desktop:w-52 desktop:h-52 desktop:rounded-full"
      >
        <i18n-t
          keypath="page.home.comfort-amenities.circle.2"
          tag="p"
          class="hidden desktop:flex flex text-slate-900 leading-tight text-center font-medium"
        >
          <template #newline>
            <br >
          </template>
        </i18n-t>

        <p
          class="desktop:hidden text-slate-900 leading-tight text-center font-medium"
        >
          {{ $t('page.home.comfort-amenities.circle.2') }}
        </p>
      </div>

      <div
        class="flex items-center justify-center bg-villa-beige-300 p-4 shadow-lg border border-slate-100 w-full h-fit rounded-3xl desktop:absolute desktop:top-[30%] desktop:-right-[5%] desktop:z-20 desktop:w-52 desktop:h-52 desktop:rounded-full"
      >
        <i18n-t
          keypath="page.home.comfort-amenities.circle.3"
          tag="p"
          class="hidden desktop:flex flex text-slate-900 leading-tight text-center font-medium"
        >
          <template #newline>
            <br >
          </template>
        </i18n-t>

        <p
          class="desktop:hidden text-slate-900 leading-tight text-center font-medium"
        >
          {{ $t('page.home.comfort-amenities.circle.3') }}
        </p>
      </div>

      <div
        class="flex items-center justify-center bg-villa-beige-400 p-4 shadow-lg border border-slate-100 w-full h-fit rounded-3xl desktop:absolute desktop:top-[30%] desktop:-left-[5%] desktop:z-20 desktop:w-52 desktop:h-52 desktop:rounded-full"
      >
        <p class="text-slate-600 font-medium leading-tight text-center">
          {{ $t('page.home.comfort-amenities.circle.4') }}
        </p>
      </div>

      <div
        class="flex items-center justify-center bg-villa-beige-500 p-4 shadow-lg border border-slate-100 w-full h-fit rounded-3xl desktop:absolute desktop:bottom-0 desktop:left-[35%] desktop:-translate-x-1/2 desktop:z-30 desktop:w-52 desktop:h-52 desktop:rounded-full"
      >
        <p class="text-slate-900 font-medium leading-tight text-center">
          {{ $t('page.home.comfort-amenities.circle.5') }}
        </p>
      </div>

      <div
        class="flex items-center justify-center bg-villa-beige-100 p-4 shadow-lg border border-slate-100 w-full h-fit rounded-3xl desktop:absolute desktop:bottom-0 desktop:right-[15%] desktop:z-20 desktop:w-52 desktop:h-52 desktop:rounded-full"
      >
        <i18n-t
          keypath="page.home.comfort-amenities.circle.6"
          tag="p"
          class="hidden desktop:flex flex text-slate-900 leading-tight text-center font-medium"
        >
          <template #newline>
            <br >
          </template>
        </i18n-t>

        <p
          class="desktop:hidden text-slate-900 leading-tight text-center font-medium"
        >
          {{ $t('page.home.comfort-amenities.circle.6') }}
        </p>
      </div>
    </div>

    <div
      class="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 desktop:p-12"
    >
      <h3
        class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-[#93a9c6] pl-4"
      >
        {{ $t('page.home.comfort-amenities.header') }}
      </h3>

      <p class="text-slate-500 mb-8 text-sm leading-relaxed">
        {{ $t('page.home.comfort-amenities.sub-header') }}
      </p>

      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li
          v-for="item in comfortList"
          :key="item"
          class="flex items-center gap-3 text-slate-900"
        >
          <span
            class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs"
          >
            <Check class="w-4 h-4" />
          </span>

          {{ $t(item) }}
        </li>
      </ul>

      <button
        class="mt-10 w-full py-4 bg-[#93a9c6] text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-[#7e94b1] transition-all transform active:scale-[0.98]"
        @click="navigateTo('/book-now')"
      >
        {{ $t('navigation.book-now') }}
      </button>
    </div>
  </div>
</template>
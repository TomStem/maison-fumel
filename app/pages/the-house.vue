<script setup lang="ts">
import {
  Users,
  BedDouble,
  Bath,
  Trees,
  CookingPot,
  Sofa,
  Wifi,
  Waves,
  CircleParking,
  CircleEllipsis,
  Check,
} from '@lucide/vue';

defineOptions({
  name: 'TheHousePage',
});

const { t } = useI18n();

const groundLevelList = [
  'page.the-house.groundLevelList.royal-kitchen',
  'page.the-house.groundLevelList.open-dining',
  'page.the-house.groundLevelList.sitting-area',
];

const lowerLevelList = [
  'page.the-house.lowerLevelList.master-bedroom',
  'page.the-house.lowerLevelList.laundry',
];

const upperLevelList = [
  'page.the-house.upperLevelList.bedrooms',
  'page.the-house.upperLevelList.bathrooms',
  'page.the-house.upperLevelList.toilet',
];

const poolList = [
  'page.the-house.poolList.kitchen',
  'page.the-house.poolList.shower-toilet',
  'page.the-house.poolList.plastic-tableware',
  'page.the-house.poolList.sport-play',
  'page.the-house.poolList.royal-bbq',
];

const houseList = [
  'page.the-house.houseList.type',
  'page.the-house.houseList.private-pool',
  'page.the-house.houseList.poolhouse',
  'page.the-house.houseList.bedrooms',
  'page.the-house.houseList.bathrooms',
  'page.the-house.houseList.kitchen',
  'page.the-house.houseList.non-smoking',
  'page.the-house.houseList.bbq',
  'page.the-house.houseList.terraces',
  'page.the-house.houseList.gated-property',
  'page.the-house.houseList.parking',
  'page.the-house.houseList.location',
];

const kitchenList = [
  'page.the-house.kitchenList.stovetop',
  'page.the-house.kitchenList.oven',
  'page.the-house.kitchenList.fridge-freezer',
  'page.the-house.kitchenList.dishwasher',
  'page.the-house.kitchenList.microwave',
  'page.the-house.kitchenList.coffee-machine',
  'page.the-house.kitchenList.espresso-machine',
  'page.the-house.kitchenList.kettle',
  'page.the-house.kitchenList.utensils',
  'page.the-house.kitchenList.tableware',
];

const livingRoomList = [
  'page.the-house.livingRoomList.layout',
  'page.the-house.livingRoomList.sofas',
  'page.the-house.livingRoomList.loveseats',
  'page.the-house.livingRoomList.dining-table',
  'page.the-house.livingRoomList.flooring',
];

const internetTvList = [
  'page.the-house.internetTvList.wifi',
  'page.the-house.internetTvList.internet',
  'page.the-house.internetTvList.tv',
];

const pool2List = [
  'page.the-house.pool2List.pool',
  'page.the-house.pool2List.sunbeds',
  'page.the-house.pool2List.chairs',
  'page.the-house.pool2List.side-tables',
  'page.the-house.pool2List.parasols',
  'page.the-house.pool2List.towels',
];

const parkingList = [
  'page.the-house.parkingList.private-parking',
  'page.the-house.parkingList.ev-charging',
];

const elseList = [
  'page.the-house.elseList.laundry-room',
  'page.the-house.elseList.baby-amenities',
  'page.the-house.elseList.no-smoking',
  'page.the-house.elseList.entertainment',
];

const bedroomList = [
  'page.the-house.bedroomList.bedroom-ground-floor',
  'page.the-house.bedroomList.bedroom1',
  'page.the-house.bedroomList.bedroom2',
  'page.the-house.bedroomList.bedroom3',
  'page.the-house.bedroomList.linens',
  'page.the-house.bedroomList.wardrobes',
  'page.the-house.bedroomList.nightstands',
  'page.the-house.bedroomList.flooring',
];

const bathroomList = [
  'page.the-house.bathroomList.modern',
  'page.the-house.bathroomList.shower',
  'page.the-house.bathroomList.double-sink',
  'page.the-house.bathroomList.toilet',
  'page.the-house.bathroomList.towels',
];

const outsideList = [
  'page.the-house.outsideList.poolhouse',
  'page.the-house.outsideList.terraces',
  'page.the-house.outsideList.kitchen-terrace',
  'page.the-house.outsideList.rear-terrace',
  'page.the-house.outsideList.front-veranda',
  'page.the-house.outsideList.poolside-terrace',
  'page.the-house.outsideList.garden',
  'page.the-house.outsideList.bbq',
  'page.the-house.outsideList.view',
];

const images = [
  { itemImageSrc: '/images/huis/24-slaapkamer-1-verdieping-voorzijde.webp' },
  { itemImageSrc: '/images/huis/23-badkamer-ensuite-bg.webp' },
  { itemImageSrc: '/images/huis/12-keuken.webp' },
  {
    itemImageSrc: '/images/huis/27-slaapkamer-2-verdieping-voorzijde-oud.webp',
  },
];

const leftCol = [
  {
    title: 'houseList',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50 border border-blue-100',
    items: houseList,
  },
  {
    title: 'bedroomList',
    icon: BedDouble,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 border border-indigo-100',
    items: bedroomList,
  },
  {
    title: 'bathroomList',
    icon: Bath,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border border-cyan-100',
    items: bathroomList,
  },
  {
    title: 'outsideList',
    icon: Trees,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border border-100',
    items: outsideList,
  },
];

const rightCol = [
  {
    title: 'kitchenList',
    icon: CookingPot,
    color: 'text-orange-600',
    bg: 'bg-orange-50 border border-orange-100',
    items: kitchenList,
  },
  {
    title: 'livingRoomList',
    icon: Sofa,
    color: 'text-rose-600',
    bg: 'bg-rose-50 border border-rose-100',
    items: livingRoomList,
  },
  {
    title: 'internetTvList',
    icon: Wifi,
    color: 'text-purple-600',
    bg: 'bg-purple-50 border border-purple-100',
    items: internetTvList,
  },
  {
    title: 'pool2List',
    icon: Waves,
    color: 'text-sky-600',
    bg: 'bg-sky-50 border border-sky-100',
    items: pool2List,
  },
  {
    title: 'parkingList',
    icon: CircleParking,
    color: 'text-slate-600',
    bg: 'bg-slate-100 border border-slate-200',
    items: parkingList,
  },
  {
    title: 'elseList',
    icon: CircleEllipsis,
    color: 'text-amber-600',
    bg: 'bg-amber-50 border border-amber-100',
    items: elseList,
  },
];
</script>

<template>
  <div class="overflow-x-hidden">
    <HeroBanner
      image-source-url="/images/huis/2-voorzijde-vanaf-pad.webp"
      image-alt-text-key="''"
      header-text-key="page.the-house.hero.header"
    />

    <div class="max-w-7xl mx-auto px-6 -mt-40 relative z-20 space-y-32">
      <InfoCard>
        <template #header>
          {{ t('navigation.the-house') }}
        </template>

        <i18n-t
          keypath="page.the-house.info-card.the-house.content"
          tag="p"
          class="text-slate-900 leading-relaxed"
        >
          <template #newline>
            <br >
            <br >
          </template>
        </i18n-t>
      </InfoCard>

      <InfoCard
        image-source-url="/images/huis/20-slaapkamer-bg.webp"
        image-alt-text-key="''"
        background-color-class="bg-white"
      >
        <div class="flex flex-col justify-center space-y-8">
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.the-house.info-card.niveaus.content') }}
          </p>

          <div class="space-y-2">
            <strong>{{ $t('page.the-house.groundLevelList.header') }}</strong>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li
                v-for="item in groundLevelList"
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
          </div>

          <div class="space-y-2">
            <strong>{{ $t('page.the-house.lowerLevelList.header') }}</strong>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li
                v-for="item in lowerLevelList"
                :key="item"
                class="flex items-center gap-3 text-slate-700"
              >
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs"
                >
                  <Check class="w-4 h-4" />
                </span>

                {{ $t(item) }}
              </li>
            </ul>
          </div>

          <div class="space-y-2">
            <strong>{{ $t('page.the-house.upperLevelList.header') }}</strong>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li
                v-for="item in upperLevelList"
                :key="item"
                class="flex items-center gap-3 text-slate-700"
              >
                <span
                  class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs"
                >
                  <Check class="w-4 h-4" />
                </span>

                {{ $t(item) }}
              </li>
            </ul>
          </div>

          <button
            class="mt-10 w-full py-4 bg-[#93a9c6] text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-[#7e94b1] transition-all transform active:scale-[0.98]"
            @click="navigateTo('/book-now')"
          >
            {{ $t('navigation.book-now') }}
          </button>
        </div>
      </InfoCard>

      <SectionGallery
        :images="images"
        header-text-key="page.home.photos.header"
      />

      <InfoCard
        image-source-url="/images/huis/6-zwembad-met-achterkant-huis.webp"
        image-alt-text-key="''"
        background-color-class="bg-white"
        image-position="left"
      >
        <div class="flex flex-col justify-center space-y-8">
          <h2
            class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-[#93a9c6] pl-4"
          >
            {{ $t('page.the-house.info-card.outside-pool.header') }}
          </h2>

          <i18n-t
            keypath="page.the-house.info-card.outside-pool.content"
            tag="p"
            class="text-slate-900 leading-relaxed"
          >
            <template #newline>
              <br >
              <br >
            </template>
          </i18n-t>

          <div class="space-y-8">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li
                v-for="item in poolList"
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

            <p class="text-slate-900 leading-relaxed">
              {{ $t('page.the-house.info-card.outside-pool.footer') }}
            </p>
          </div>
        </div>
      </InfoCard>

      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-8 mb-32 items-start">
        <div
          v-for="(column, colIdx) in [leftCol, rightCol]"
          :key="colIdx"
          class="space-y-8"
        >
          <InfoCard
            v-for="cat in column"
            :key="cat.title"
            class="group relative backdrop-blur-md border border-white/40 shadow-xl rounded-3xl"
          >
            <div
              class="absolute -top-10 -right-10 w-32 h-32 bg-white/20 blur-3xl rounded-full pointer-events-none group-hover:bg-white/40 transition-colors"
            />

            <div class="relative z-10">
              <div class="flex items-center gap-5 mb-6">
                <div :class="[cat.bg, 'p-4 rounded-2xl shadow-sm']">
                  <component :is="cat.icon" :class="['w-7 h-7', cat.color]" />
                </div>
                <div>
                  <h2
                    class="text-2xl font-serif font-bold text-slate-900 leading-tight"
                  >
                    {{ $t(`page.the-house.${cat.title}.header`) }}
                  </h2>
                </div>
              </div>

              <ul class="grid grid-cols-1 gap-3">
                <li
                  v-for="item in cat.items"
                  :key="item"
                  class="flex items-start gap-3 text-slate-900 group/item"
                >
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs"
                  >
                    <Check class="w-4 h-4" />
                  </span>
                  <span
                    class="group-hover/item:translate-x-1 transition-transform duration-300"
                  >
                    {{ $t(item) }}
                  </span>
                </li>
              </ul>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  </div>
</template>
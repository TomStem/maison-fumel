<script setup lang="ts">
  import { 
  Car,
  Plane,
  Waves,
  Flame,
  Leaf,
  Check,
  House
} from '@lucide/vue';

  const { t } = useI18n();
</script>

<template>
<div>
  <div class="relative h-[60vh] mobile-ls:h-[100vh] desktop:h-[85vh] flex items-start justify-end p-10 overflow-hidden">
    <img src="/images/huis/3-voorzijde-vanaf-pad-halverwege.webp" class="absolute inset-0 w-full h-full object-cover scale-105" >

    <div class="relative z-10 text-white text-center max-w-7xl pt-10 px-6">
      <div class="relative z-10 text-white drop-shadow-lg text-shadow-lg/40">
        <h1 class="text-4xl desktop:text-5xl font-bold mb-2">{{ $t('page.practical-information.hero.header') }}</h1>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
  <div class="bg-villa-beige-300 rounded-3xl p-8 desktop:p-12 mb-32 shadow-xl flex flex-col desktop:flex-row gap-8 items-center">
    <div class="desktop:w-1/3">
      <h2 class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
        {{ $t('page.practical-information.info-card.arrival-departure.header') }}
      </h2>
    </div>
    <div class="desktop:w-2/3 grid grid-cols-1 desktop:grid-cols-2 gap-8">
      <div>
        <p class="font-bold mb-2">
          {{ $t('page.practical-information.info-card.arrival-departure.arrival.header') }}
        </p>
        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.practical-information.info-card.arrival-departure.arrival.content') }}
        </p>
      </div>
      <div>
        <p class="font-bold mb-2">          
          {{ $t('page.practical-information.info-card.arrival-departure.departure.header') }}
        </p>
        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.practical-information.info-card.arrival-departure.departure.content') }}
        </p>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-[#93a9c6] pl-4">
      {{ $t('page.practical-information.info-card.travel.header') }}
    </h2>

    <p class="text-slate-900 leading-relaxed">
      {{ $t('page.practical-information.info-card.travel.content') }}
    </p>
  </div>

  <div class="mb-32 space-y-8">
    <div class="lg:col-span-2 bg-white rounded-3xl p-8 desktop:p-12 shadow-xl">
      <div class="flex items-center gap-5 mb-6">
        <div class="p-4 rounded-2xl shadow-sm bg-villa-beige-100 border border-villa-beige-400">
          <Car class="w-7 h-7 text-villa-beige-600" />
        </div>
        <div>
          <h2 class="text-3xl font-serif font-bold text-slate-900">
            {{ $t('page.practical-information.info-card.car.header') }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 tablet-pt:grid-cols-1 desktop:grid-cols-2 gap-8">
        <div>
          <p class="mb-6 text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.car.intro') }}
          </p>

          <ul class="space-y-3">
            <li class="flex flex-col desktop:flex-row justify-between gap-2 desktop:gap-0 border-b border-slate-50 pb-2">
              <span class="text-slate-900">{{ $t('page.practical-information.info-card.car.routes.paris.header') }}</span>

              <div class="flex items-center gap-2 text-xs tablet-pt:text-base tablet-ls:text-base desktop:text-base">
                <span class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.car.routes.paris.distance') }}</span>
                <span class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.car.routes.paris.time') }}</span>
                <p class="desktop:text-sm text-slate-500">{{ $t('page.practical-information.info-card.car.times.normal') }}</p>
              </div>
            </li>
            <li class="flex flex-col desktop:flex-row justify-between gap-2 desktop:gap-0 border-b border-slate-50 pb-2">
              <span class="text-slate-900">{{ $t('page.practical-information.info-card.car.routes.orleans.header') }}</span>

              <div class="flex items-center gap-2 text-xs tablet-pt:text-base tablet-ls:text-base desktop:text-base">
                <span class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.car.routes.orleans.distance') }}</span>
                <span class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.car.routes.orleans.time') }}</span>
                <p class="desktop:text-sm text-slate-500">{{ $t('page.practical-information.info-card.car.times.normal') }}</p>
              </div>
            </li>
            <li class="flex flex-col desktop:flex-row justify-between gap-2 desktop:gap-0 border-b border-slate-50 pb-2">
              <span class="text-slate-900">{{ $t('page.practical-information.info-card.car.routes.utrecht.header') }}</span>

              <div class="flex items-center gap-2 text-xs tablet-pt:text-base tablet-ls:text-base desktop:text-base">
                <span class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.car.routes.utrecht.distance') }}</span>
                <span class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.car.routes.utrecht.time') }}</span>
                <p class="desktop:text-sm text-slate-500">{{ $t('page.practical-information.info-card.car.times.normal') }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p class="mb-6">
            {{ $t('page.practical-information.info-card.car.extra.header') }}
          </p>

          <div class="text-slate-900 leading-relaxed bg-villa-beige-100 p-4 rounded-2xl italic">
            {{ $t('page.practical-information.info-card.car.extra.content') }}
          </div>
          </div>
        </div>
    </div>

    <div class="flex desktop:items-center desktop:justify-between flex-col desktop:flex-row bg-white rounded-3xl p-8 desktop:p-12 shadow-xl">
      <div class="flex items-center gap-5 mb-6 desktop:mb-0">
        <div class="p-4 rounded-2xl shadow-sm bg-blue-50 border border-blue-100">
          <Plane class="w-7 h-7 text-blue-600" />
        </div>
        <div>
          <h2 class="text-3xl font-serif font-bold text-slate-900">
            {{ $t('page.practical-information.info-card.flying.header') }}
          </h2>
        </div>
      </div>

      <div class="mb-3 desktop:mb-0">
        <p class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.flying.airports.bergerac') }}</p>
        <p class="text-sm text-slate-500">Transavia, Ryanair, BA, Jet2</p>
      </div>  
      <div class="mb-3 desktop:mb-0">
        <p class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.flying.airports.toulouse') }}</p>
        <p class="text-sm text-slate-500">KLM, Air France, EasyJet</p>
      </div>
      <div>
        <p class="font-bold text-slate-900">{{ $t('page.practical-information.info-card.flying.airports.bordeaux') }}</p>
        <p class="text-sm text-slate-500">KLM, Air France, Lufthansa</p>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
      {{ $t('page.practical-information.info-card.pool.header') }}
    </h2>

    <p class="text-slate-900 leading-relaxed">
      {{ $t('page.practical-information.info-card.pool.content') }}
    </p>
  </div>

  <div class="grid grid-cols-1 desktop:grid-cols-2 gap-8 mb-32">
    <div class="bg-villa-beige-300 rounded-3xl p-8 desktop:p-12 flex flex-col shadow-xl">
      <div class="flex items-center gap-5 mb-6">
        <div class="p-4 rounded-2xl shadow-sm bg-sky-50 border border-sky-100">
          <Waves class="w-7 h-7 text-sky-600" />
        </div>
        <div>
          <h2 class="text-2xl font-serif font-bold text-slate-900t">
            {{ $t('page.practical-information.info-card.swimming-pool.header') }}
          </h2>
        </div>
      </div>

      <ul class="text-slate-700 space-y-3 mb-6 flex-grow">
        
        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.swimming-pool.list.guarded') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.swimming-pool.list.kids') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.swimming-pool.list.glasses') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.swimming-pool.list.salt-electrolysis-system') }}
          </p>
        </li>
      </ul>
    </div>

    <div class="bg-villa-beige-300 rounded-3xl p-8 desktop:p-12 flex flex-col shadow-xl">
      <div class="flex items-center gap-5 mb-6">
        <div class="p-4 rounded-2xl shadow-sm bg-indigo-50 border border-indigo-100">
          <House class="w-7 h-7 text-indigo-600" />
        </div>
        <div>
          <h2 class="text-2xl font-serif font-bold text-slate-900 leading-tight">
            {{ $t('page.practical-information.info-card.poolhouse.header') }}
          </h2>
        </div>
      </div>

      <ul class="text-slate-700 space-y-3 flex-grow">
        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.poolhouse.list.douche-toilet') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.poolhouse.list.cutterly') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.poolhouse.list.sport-games') }}
          </p>
        </li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 desktop:grid-cols-2 gap-8 mb-8">
    <div class="bg-villa-beige-300 rounded-3xl p-8 desktop:p-12 flex flex-col shadow-xl">
      <div class="flex items-center gap-5 mb-6">
        <div class="p-4 rounded-2xl shadow-sm bg-green-50 border border-green-100">
          <Leaf class="w-7 h-7 text-green-600" />
        </div>
        <div>
          <h2 class="text-2xl font-serif font-bold text-slate-900 leading-tight">
            {{ $t('page.practical-information.info-card.environment-energy.header') }}
          </h2>
        </div>
      </div>

      <ul class="text-slate-900 space-y-3 flex-grow">
        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          {{ $t('page.practical-information.info-card.environment-energy.list.solar-panels') }}
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          {{ $t('page.practical-information.info-card.environment-energy.list.ev') }}
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          {{ $t('page.practical-information.info-card.environment-energy.list.drinking-water') }}
        </li>

         <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          {{ $t('page.practical-information.info-card.environment-energy.list.waste-separation') }}
        </li>
      </ul>
    </div>

    <div class="bg-villa-beige-300 rounded-3xl p-8 desktop:p-12 flex flex-col shadow-xl">
      <div class="flex items-center gap-5 mb-6">
        <div class="p-4 rounded-2xl shadow-sm bg-orange-50 border border-orange-100">
          <Flame class="w-7 h-7 text-orange-600" />
        </div>
        <div>
          <h2 class="text-2xl font-serif font-bold text-slate-900 leading-tight">
            {{ $t('page.practical-information.info-card.barbecue.header') }}
          </h2>
        </div>
      </div>

      <ul class="text-slate-700 space-y-3 flex-grow">
        <p class="text-slate-900 leading-relaxed mb-8">
          {{ $t('page.practical-information.info-card.barbecue.content') }}
        </p>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.barbecue.list.bbq') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.barbecue.list.moved') }}
          </p>
        </li>

        <li class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.barbecue.list.check') }}
          </p>
        </li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="bg-white p-8 desktop:p-12 rounded-3xl shadow-xl tablet-pt:col-span-1 tablet-pt:cols-span-2 desktop:col-span-2">
      <h2 class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-[#93a9c6] pl-4">
        {{ $t('page.practical-information.info-card.house-rules.header') }}
      </h2>

      <p class="mb-8">
        {{ $t('page.practical-information.info-card.house-rules.content') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.respect') }}
          </p>
        </div>

         <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.pets') }}
          </p>
        </div>

         <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.smoke-free') }}
          </p>
        </div>

         <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.party') }}
          </p>
        </div>

         <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.groups') }}
          </p>
        </div>

         <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.visitors') }}
          </p>
        </div>

         <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.trash') }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.fire') }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>
          
          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.practical-information.info-card.house-rules.list.max') }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-[#93a9c6] p-8 desktop:p-12 rounded-3xl shadow-xl text-white flex flex-col justify-start">
      <h2 class="text-3xl font-serif font-bold mb-6 border-l-4 border-white pl-4">
        {{ $t('page.practical-information.info-card.parking.header') }}
      </h2>

      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="leading-relaxed">
            {{ $t('page.practical-information.info-card.parking.list.places') }}    
          </p>
        </div>

        <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="leading-relaxed">
            {{ $t('page.practical-information.info-card.parking.list.charging') }}   
          </p> 
        </div>

        <div class="flex items-center gap-3">
          <span class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
            <Check class="w-4 h-4" />
          </span>

          <p class="leading-relaxed">
            {{ $t('page.practical-information.info-card.parking.list.loading-cable') }}   
          </p> 
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
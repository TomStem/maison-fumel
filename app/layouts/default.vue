<script setup>
import Dialog from 'primevue/dialog'; 

const isBookNowVisible = ref(false);
const { t } = useI18n();

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'navigation.home', path: '/' },
  { name: 'navigation.the-house', path: '/the-house' },
  { name: 'navigation.photos', path: '/photos' },
  { name: 'navigation.area', path: '/area' },
  { name: 'navigation.practical-information', path: '/practical-information' },
  { name: 'navigation.book-now', path: '/book-now' },
  { name: 'navigation.contact', path: '/contact' },
];

watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="bg-slate-50 min-h-screen font-sans text-slate-800">
    <header class="sticky top-0 z-50 bg-[#93a9c6]/90 backdrop-blur-md p-4 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <NuxtLink :to="'/'" class="relative z-[60] self-start !border-none !bg-transparent">
          <div class="rounded-xl mb-[-4.5rem] transition-all duration-300 hover:scale-105">
            <img 
              src="/images/logo.png"
              alt="Logo"
              class="w-auto object-contain h-24 desktop:h-32"
            >
          </div>
        </NuxtLink>

        <div class="items-center gap-8 hidden desktop:flex">
          <nav class="flex gap-2">
            <NuxtLink
              v-for="item in menuItems" 
              :key="item.path" :to="item.path" 
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white hover:bg-white/20 border border-transparent hover:border-white/30"
            >
              {{ $t(item.name) }}
            </NuxtLink>
          </nav>
          <LanguageSwitcher />
        </div>

       <button 
        aria-label="Toggle Menu"
        class="z-[60] relative w-10 h-10 items-center justify-center focus:outline-none flex desktop:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="relative w-6 h-5">
          <span 
            :class="[
              'absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
              isMenuOpen ? 'top-2 rotate-45' : 'top-0'
            ]"
          />
          <span 
            :class="[
              'absolute block h-0.5 w-6 bg-white transition-opacity duration-300',
              isMenuOpen ? 'opacity-0' : 'top-2 opacity-100'
            ]"
          />
          <span 
            :class="[
              'absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
              isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
            ]"
          />
        </div>
      </button>

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div 
            v-if="isMenuOpen"
            class="fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-[#93a9c6] p-6 pt-20 flex flex-col items-center gap-4 shadow-xl border-t border-white/10 overflow-y-auto desktop:hidden"
          >
            <nav class="flex flex-col items-center gap-4 w-full">
              <NuxtLink
                v-for="item in menuItems" 
                :key="item.path" :to="item.path" 
                class="w-full text-center px-4 py-3 rounded-xl font-medium text-white hover:bg-white/10"
                @click="isMenuOpen = false"
              >
                {{ $t(item.name) }}
              </NuxtLink>
            </nav>
            
            <div class="h-px w-12 bg-white/20 shrink-0"/>
            
            <div class="pb-8">
              <LanguageSwitcher />
            </div>
          </div>
        </Transition>

      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-white mt-20 border-t border-slate-200">
      <div 
        class="max-w-7xl mx-auto px-6 py-16 grid gap-12 grid-cols-1 desktop:grid-cols-5"
      >
        <div class="space-y-4">
            <img src="/images/logo.png" alt="Logo" class="h-12 opacity-80" >
            <p class="text-slate-500 leading-relaxed">{{ $t('footer.slogan') }}</p>
        </div>
        
        <div class="hidden desktop:flex desktop:flex-col">
          <h4 class="font-bold mb-3 text-[11px] tracking-[0.2em] text-slate-400">{{ $t('footer.header.menu') }}</h4>
          <ul class="space-y-3 text-slate-600">
            <li><NuxtLink to="/" class="hover:text-[#93a9c6] transition">{{ $t('navigation.home') }}</NuxtLink></li>
            <li><NuxtLink to="/the-house" class="hover:text-[#93a9c6] transition">{{ $t('navigation.the-house') }}</NuxtLink></li>
            <li><NuxtLink to="/photos" class="hover:text-[#93a9c6] transition">{{ $t('navigation.photos') }}</NuxtLink></li>
            <li><NuxtLink to="/area" class="hover:text-[#93a9c6] transition">{{ $t('navigation.area') }}</NuxtLink></li>
            <li><NuxtLink to="/practical-information" class="hover:text-[#93a9c6] transition">{{ $t('navigation.practical-information') }}</NuxtLink></li>
            <li><NuxtLink to="/book-now" class="hover:text-[#93a9c6] transition">{{ $t('navigation.book-now') }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-[#93a9c6] transition">{{ $t('navigation.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-3 text-[11px] tracking-[0.2em] text-slate-400">{{ $t('footer.header.location') }}</h4>
          <div class="space-y-1 text-slate-600">
            <p class="font-semibold text-slate-900">47500 Fumel</p>
            <p>Department Lot-et-Garonne</p>
            <p>Regio Nouvelle Aquitaine</p>
            <p>Zuidwest-Frankrijk</p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div>
            <h4 class="font-bold mb-3 text-[11px] tracking-[0.2em] text-slate-400">{{ $t('footer.header.information') }}</h4>
            <a href="mailto:info@lepetitwren.com" class="block text-[#93a9c6] font-medium hover:underline">info@lepetitwren.com</a>
          </div>

          <div>
            <h4 class="font-bold mb-3 text-[11px] tracking-[0.2em] text-slate-400">{{ $t('footer.header.reserve') }}</h4>
            <a href="mailto:gestion@sudarrange.com" class="block text-[#93a9c6] font-medium hover:underline">gestion@sudarrange.com</a>
          </div>
        </div>

        <div>
          <h4 class="mb-3 text-[11px] tracking-[0.2em] text-slate-400">{{ $t('footer.header.weather') }}</h4>
          <div 
            class="p-3 bg-slate-50 rounded-xl border border-slate-100 inline-block" 
            :class="{ 'w-full': $device.isMobile }"
          >
            <WeatherWidget />
          </div>
        </div>
      </div>
      
      <div 
        class="flex-col desktop:flex-row max-w-7xl mx-auto px-6 py-8 border-t border-slate-100 flex justify-between items-center gap-4 text-slate-400 text-xs"
      >
        <p>&copy; {{ new Date().getFullYear() }} Le Petit Wren</p>

        <span><NuxtLink to="/privacy-policy" class="hover:text-[#93a9c6] transition">{{ $t('navigation.privacy-policy') }}</NuxtLink></span>
      </div>
    </footer> 

    <button 
      class="fixed right-0 top-1/2 z-[100] bg-[#93a9c6] text-white px-5 py-3 rounded-t-xl shadow-2xl font-bold tracking-wider transition-all duration-300 hover:bg-[#7a8fa8] hover:px-8 group"
      style="transform: rotate(-90deg) translateY(100%); transform-origin: bottom ri"
      @click="isBookNowVisible = true;"
    >
      <div class="flex items-center gap-2">
        <!-- Optioneel: een icoontje toevoegen voor extra zichtbaarheid -->
        <span class="text-xs uppercase whitespace-nowrap">
          {{ $t('navigation.book-now') }}
        </span>
      </div>
    </button>

    <Dialog 
      v-model:visible="isBookNowVisible" 
      modal 
      :header="$t('navigation.book-now')" 
      :style="{ width: '50rem' }" 
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      :draggable="false"
      :pt="{
        title: 'border-l-4 border-[#93a9c6] pl-4'
      }"
    >
      <div 
        class="flex items-center gap-4 text-center flex-col-reverse desktop:flex-row"
      > 
        <div 
          class="h-[400px] desktop:h-auto p-8"
        >
          <img 
            src="/images/SudArrangeLogo.webp" 
            class="object-contain desktop:object-cover w-full h-full"
          >
        </div>

        <p>
          {{ $t('page.book-now.info-card.booking.content') }}
          
          <a href="https://sudarrange.com/property/fumel-47500-gite-le-petit-wren-maison-de-vacances-holiday-house/#request_form" class="text-[#93a9c6] font-medium underline cursor-pointer" target="_blank">
              {{  $t('page.book-now.info-card.booking.link')  }}
          </a>
        </p>
      </div>
    </Dialog>
  </div>
</template>

<style>
  .router-link-active, .router-link-exact-active {
    @apply bg-white/20 border border-white/30
  }
</style>
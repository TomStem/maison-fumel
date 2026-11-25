<script></script>    

<template>
  <div class="px-6 md:pt-28 max-w-7xl mx-auto py-16 space-y-10">
    <h1 class="text-2xl md:text-5xl font-bold mb-4 border-l-4 border-[#93a9c6] pl-4">
      {{ $t('navigation.privacy-policy') }}
    </h1>

    <div class="bg-white p-8 desktop:p-12 rounded-3xl shadow-xl space-y-8">
      <div>{{ $t('page.privacy-policy.intro') }}</div>

      <h2 class="text-xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
        {{ $t('page.privacy-policy.visitWebsiteHeader') }}
      </h2>

      <div>{{ $t('page.privacy-policy.visitWebsiteContent') }}</div>

      <h2 class="text-xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
        {{ $t('page.privacy-policy.emailContactHeader') }}
      </h2>

      <i18n-t keypath="page.privacy-policy.emailContactContent" tag="div">
        <template #mailto>
          <a href="mailto:info@lepetitwren.com" class="text-[#93a9c6] font-medium underline cursor-pointer">info@lepetitwren.com</a>
        </template>
      </i18n-t>

      <h2 class="text-xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
        {{ $t('page.privacy-policy.externalHeader') }}
      </h2>

      <div>{{ $t('page.privacy-policy.externalContent') }}</div>

      <h2 class="text-xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
        {{ $t('page.privacy-policy.cookiesHeader') }}
      </h2>

      <div>{{ $t('page.privacy-policy.cookiesContent') }}</div>
    </div>
  </div>  
</template>
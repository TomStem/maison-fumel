<script></script>    

<template>
  <div class="px-6 md:pt-28 max-w-7xl mx-auto py-16 space-y-10">
    <h1 class="text-2xl md:text-5xl font-bold mb-4 border-l-4 border-[#93a9c6] pl-4">
      {{ $t('navigation.contact') }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 bg-villa-beige-300 shadow-xl rounded-3xl overflow-hidden mb-8">
      <div class="h-[400px] md:h-auto p-8">
        <img src="/images/SudArrangeLogo.webp" class="w-full h-full object-cover" >
      </div>

      <div class="p-8 md:p-12 flex flex-col justify-start">
        <h2 class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4">
          {{ $t('page.contact.info-card.booking.header') }}
        </h2>

        <i18n-t keypath="page.contact.info-card.booking.content" tag="p">
          <template #newline>
            <br>
          </template>

          <template #mailto>
            <a href="mailto:info@sudarrange.com" class="text-[#93a9c6] font-medium underline cursor-pointer">info@sudarrange.com</a>
          </template>

          <template #form>
            <a href="https://sudarrange.com/property/fumel-47500-gite-le-petit-wren-maison-de-vacances-holiday-house/#request_form" class="text-[#93a9c6] font-medium underline cursor-pointer" target="_blank">
              {{  $t('page.contact.info-card.booking.form')  }}
            </a>
          </template>
        </i18n-t>
      </div>
    </div>
  </div>  
</template>
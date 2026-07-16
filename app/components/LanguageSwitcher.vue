<script setup>
import 'flag-icons/css/flag-icons.min.css';

const { locales, locale, setLocale } = useI18n();

const localeToFlag = {
  'en-gb': 'gb',
  nl: 'nl',
  fr: 'fr',
};

const currentLocale = computed(() => locale.value);

function isActive(code) {
  return currentLocale.value === code;
}
</script>

<template>
  <ClientOnly>
    <div class="flex gap-2">
      <span
        v-for="language in locales"
        :key="language.code"
        class="cursor-pointer p-1 rounded"
        :class="{
          'border border-white/30 bg-white/20': isActive(language.code),
        }"
        @click.prevent.stop="setLocale(language.code)"
      >
        <span class="fi" :class="`fi-${localeToFlag[language.code]}`" />
      </span>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
defineOptions({
  name: 'InfoCard',
});

interface Props {
  backgroundColorClass?: string;
  imageSourceUrl?: string;
  imageAltTextKey?: string;
  imagePosition?: 'right' | 'left';
}

withDefaults(defineProps<Props>(), {
  backgroundColorClass: 'bg-villa-beige-300',
  imageSourceUrl: '',
  imageAltTextKey: '',
  imagePosition: 'right',
});
</script>

<template>
  <div
    class="grid shadow-xl rounded-3xl overflow-hidden"
    :class="[
      backgroundColorClass,
      imageSourceUrl
        ? 'mobile-ls:grid-cols-2 desktop:grid-cols-2'
        : 'grid-cols-1',
    ]"
  >
    <div
      :class="[
        { imageSourceUrl: 'h-auto desktop:h-[400px]' },
        imagePosition === 'right'
          ? 'desktop:order-last'
          : 'desktop:order-first',
      ]"
    >
      <img
        v-if="imageSourceUrl"
        :src="imageSourceUrl"
        :alt="imageAltTextKey"
        class="w-full h-full object-cover"
      >
    </div>

    <div class="flex flex-col justify-center p-8 desktop:p-12">
      <h2
        v-if="$slots.header"
        class="text-3xl font-serif font-bold mb-6 text-slate-900 text-balance border-l-4 border-villa-beige-400 pl-4"
      >
        <slot name="header" />
      </h2>

      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'HeroBanner',
});

interface Props {
  imageSourceUrl: string;
  imageAltTextKey: string;
  headerTextKey?: string;
  sloganTextKey?: string;
}

withDefaults(defineProps<Props>(), {
  sloganTextKey: '',
  headerTextKey: '',
});
</script>

<template>
  <div
    class="relative flex items-start justify-end p-10 overflow-hidden h-[60vh] mobile-ls:h-[100vh] desktop:h-[85vh]"
  >
    <img
      :src="imageSourceUrl"
      :alt="imageAltTextKey"
      class="absolute inset-0 w-full h-full object-cover scale-105"
    />

		<div class="relative z-10 text-white text-center px-4 max-w-4xl pt-10">
			<h1
				v-if="headerTextKey"
				class="font-bold mb-2 text-4xl desktop:text-5xl drop-shadow-xl"
			>
				{{ $t(headerTextKey) }}
			</h1>

		  <p v-if="sloganTextKey" class="text-2xl italic font-light drop-shadow-xl">
		    {{ $t(sloganTextKey) }}
		  </p>
		</div>
  </div>
</template>

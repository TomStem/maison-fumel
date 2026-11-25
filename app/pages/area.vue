<script setup lang="ts">
defineOptions({
  name: 'AreaPage',
});

const { t } = useI18n();
</script>

<template>
  <div>
    <HeroBanner
      image-source-url="/images/region/20-fumel-en-lot.jpg"
      image-alt-text-key="''"
    />

    <div class="max-w-7xl mx-auto px-6 -mt-40 relative z-20 space-y-32">
      <InfoCard>
        <template #header>
          {{ t('navigation.area') }}
        </template>

        <i18n-t
          keypath="page.area.info-card.the-area.content"
          tag="p"
          class="text-slate-900 leading-relaxed"
        >
          <template #links>
            {{ $t('page.area.info-card.the-area.links-header') }} <br >
            <a
              href="https://www.france-voyage.com/cities-towns/fumel-16500/tourist-office-fumel-vallee-lot-7059.htm"
              target="_blank"
              class="text-[#93a9c6] font-medium underline cursor-pointer"
              >Tourist Office Fumel-Vallée du Lot</a
            >
            <br >
            <a
              href="https://www.guide-du-lot-et-garonne.com/en/tourism/discover/towns-and-villages/fumel-266/fumel-1133.html"
              target="_blank"
              class="text-[#93a9c6] font-medium underline cursor-pointer"
              >Guide du Lot-et-Garonne</a
            >
            <br >
            <a
              href="https://www.france-voyage.com/tourism/fumel-commune-16500.htm"
              target="_blank"
              class="text-[#93a9c6] font-medium underline cursor-pointer"
              >France-Voyage</a
            >
            <br ><br >
          </template>

          <template #footer>
            <strong>{{ $t('page.area.info-card.the-area.footer') }}</strong>
          </template>

          <template #newline>
            <br >
            <br >
          </template>
        </i18n-t>
      </InfoCard>

      <InfoCard
        image-source-url="/images/region/22-bonaguil.jpg"
        image-alt-text-key="''"
        image-position="left"
        background-color-class="bg-white"
      >
        <template #header>
          {{ $t('page.area.info-card.chateau-de-bonaguil.header') }}
        </template>

        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.area.info-card.chateau-de-bonaguil.content') }}
        </p>
      </InfoCard>

      <InfoCard
        image-source-url="/images/region/22-bonaguil.jpg"
        image-alt-text-key="''"
        background-color-class="bg-white"
      >
        <template #header>
          {{ $t('page.area.info-card.monpazier.header') }}
        </template>

        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.area.info-card.monpazier.content') }}
        </p>
      </InfoCard>

      <InfoCard
        image-source-url="/images/region/biron.png"
        image-alt-text-key="''"
        image-position="left"
        background-color-class="bg-white"
      >
        <template #header>
          {{ $t('page.area.info-card.chateau-de-bonaguil.header') }}
        </template>

        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.area.info-card.chateau-de-biron.content') }}
        </p>
      </InfoCard>

      <InfoCard
        image-source-url="/images/region/roca.png"
        image-alt-text-key="''"
        background-color-class="bg-white"
      >
        <template #header>
          {{ $t('page.area.info-card.rocamadour.header') }}
        </template>

        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.area.info-card.rocamadour.content') }}
        </p>
      </InfoCard>

      <InfoCard
        image-source-url="/images/region/gouffre.png"
        image-alt-text-key="''"
        image-position="left"
        background-color-class="bg-white"
      >
        <template #header>
          {{ $t('page.area.info-card.gouffre-de-padirac.header') }}
        </template>

        <p class="text-slate-900 leading-relaxed">
          {{ $t('page.area.info-card.gouffre-de-padirac.content') }}
        </p>
      </InfoCard>
    </div>
  </div>
</template>
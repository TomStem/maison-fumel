<script setup lang="ts">
defineOptions({
  name: 'HomePage',
});

const images = [
  { itemImageSrc: '/images/huis/13-keuken.webp' },
  { itemImageSrc: '/images/huis/19-woonkamer-beneden-stoelen.webp' },
  { itemImageSrc: '/images/huis/20-slaapkamer-bg.webp' },
  { itemImageSrc: '/images/huis/28-slaapkamer-3-achterzijde.webp' },
];
</script>

<template>
  <div>
    <HeroBanner
      image-source-url="/images/huis/1-zwembad-en-achterkant-huis.webp"
      image-alt-text-key="page.home.hero.image-description"
      header-text-key="page.home.hero.header"
      slogan-text-key="page.home.hero.slogan"
    />

    <div class="max-w-7xl mx-auto px-6 -mt-20 relative z-20 space-y-32">
      <div class="space-y-8">
        <InfoCard
          image-source-url="/images/huis/3-voorzijde-vanaf-pad-halverwege.webp"
          :image-alt-text-key="''"
          image-position="left"
        >
          <template #header>
            {{ $t('page.home.info-card.petit-wren.header') }}
          </template>

          <p class="text-slate-900 leading-relaxed">
            {{ $t('page.home.info-card.petit-wren.content') }}
          </p>
        </InfoCard>

        <InfoCard
          image-source-url="/images/regio.jpg"
          :image-alt-text-key="''"
        >
          <template #header>
            {{ $t('page.home.info-card.region.header') }}
          </template>

           <i18n-t
            keypath="page.home.info-card.region.content"
            tag="p"
            class="text-slate-900 leading-relaxed"
          >
            <template #place>
              <strong>Fumel</strong>
            </template>

            <template #region1>
              <strong>Lot-et-Garonne</strong>
            </template>

            <template #region2>
              <strong>Dordogne</strong>
            </template>

            <template #newline>
              <br><br>
            </template>
          </i18n-t>
        </InfoCard>
      </div>

      <SectionGallery
        :images="images"
        header-text-key="page.home.photos.header"
      />

      <SectionComfort />
    </div>
  </div>
</template>
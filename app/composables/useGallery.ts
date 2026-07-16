interface Image {
  itemImageSrc?: string;
  category?: string;
  full?: string;
  thumb?: string;
  caption?: undefined;
}

const isVisible = ref(false);
const activeIndex = ref(0);
const galleryImages = ref<Image[]>([]);

export function useGallery() {
  function openGallery(images: Image[] | any[], index: number = 0) {
    galleryImages.value = images;
    activeIndex.value = index;
    isVisible.value = true;
  }

  function closeGallery() {
    isVisible.value = false;
  }

  return {
    Image,
    isVisible,
    activeIndex,
    galleryImages,
    openGallery,
    closeGallery,
  };
}

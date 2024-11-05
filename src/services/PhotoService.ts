interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
}

export const PhotoService = {
  getImages: async (): Promise<Image[]> => {
    try {
      const images = [];
      for (let i = 1; i <= 15; i++) {
        images.push({
          itemImageSrc: `/images/adopt-${i}.png`,
          thumbnailImageSrc: `/images/adopt-${i}.png`,
          alt: `adopt-${i}`
        });
      }
      return images;
    } catch (error) {
      console.error('Error loading images:', error);
      return [];
    }
  }
};

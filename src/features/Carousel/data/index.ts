/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const settings = (itemsType: string) => {
  return {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 6,
      partialVisibilityGutter: 20,
    },
    laptop: {
      breakpoint: {
        max: 600,
        min: 480,
      },
      items: itemsType === 'PARTNERS' ? 3 : 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: {
        max: 480,
        min: 0,
      },
      items: itemsType === 'PARTNERS' ? 2.1 : 1,
      partialVisibilityGutter: 20,
    },
  };
};

export default settings;

import { VanData } from "types/types";

export const sortedItems = (products: [VanData], sortOptions: string) => {
  switch (sortOptions) {
    case "date: newest first": {
      return products
        .slice()
        .sort((yearA, yearB): number => yearB.year - yearA.year);
    }
    case "oldest year": {
      return products
        .slice()
        .sort((yearA, yearB): number => yearA.year - yearB.year);
    }
    case "lowest cost": {
      return products
        .slice()
        .sort((priceOne, priceTwo): number => priceOne.price - priceTwo.price);
    }
    case "highest cost": {
      return products
        .slice()
        .sort((priceOne, priceTwo): number => priceTwo.price - priceOne.price);
    }
    default:
      return products;
  }
};

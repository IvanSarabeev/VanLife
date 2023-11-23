import { VanData } from "types/types";

export const sortedItems = (products: [VanData], sortOptions: string) => {
  switch (sortOptions) {
    case "newest": {
      return products
        .slice()
        .sort((yearA, yearB): number => yearB.year - yearA.year);
    }
    case "most-recent": {
      return products
        .slice()
        .sort((yearA, yearB): number => yearA.year - yearB.year);
    }
    case "lowest-cost": {
      return products
        .slice()
        .sort((priceOne, priceTwo): number => priceOne.price - priceTwo.price);
    }
    case "highest-cost": {
      return products
        .slice()
        .sort((priceOne, priceTwo): number => priceOne.price - priceTwo.price);
    }
    default:
      return products;
  }
};

export const handleSortChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setSortedItem: (value: React.SetStateAction<string>) => void
) => {
  const selectedOption = e.target.value;
  setSortedItem(selectedOption);
};

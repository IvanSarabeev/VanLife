import { VanData } from "types/types";
import _clone from "lodash/clone";
import _OrderBy from "lodash/orderBy";

export const sortedItems = (products: [VanData], sortOptions: string) => {
  const sortedProducts = _clone(products);

  switch (sortOptions) {
    case "date: newest first": {
      return _OrderBy(sortedProducts, ["year"], ["desc"]);
    }
    case "date: oldest year": {
      return _OrderBy(sortedProducts, ["year"], ["asc"]);
    }
    case "price: lowest cost": {
      return _OrderBy(sortedProducts, ["price"], ["asc"]);
    }
    case "price: highest cost": {
      return _OrderBy(sortedProducts, ["price"], ["desc"]);
    }
    default:
      return products;
  }
};

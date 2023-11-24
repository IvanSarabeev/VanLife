import { VanData } from "types/types";
import _ from "lodash";

export const sortedItems = (products: [VanData], sortOptions: string) => {
  const sortedProducts = _.clone(products);

  switch (sortOptions) {
    case "date: newest first": {
      return _.orderBy(sortedProducts, ["year"], ["desc"]);
    }
    case "oldest year": {
      return _.orderBy(sortedProducts, ["year"], ["asc"]);
    }
    case "lowest cost": {
      return _.orderBy(sortedProducts, ["price"], ["asc"]);
    }
    case "highest cost": {
      return _.orderBy(sortedProducts, ["year"], ["desc"]);
    }
    default:
      return products;
  }
};

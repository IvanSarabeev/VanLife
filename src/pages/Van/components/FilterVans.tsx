import React, { useState } from "react";
import Button from "components/HTML/Button";
import { FaList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { selectOptions } from "constants/data";
import { sortedItems, handleSortChange } from "utils/sortItem";

type FilterProps = {
  handleFetch: () => void;
};

const FilterVans = ({ handleFetch }: FilterProps) => {
  const [sortOption, setSortOption] = useState("newest");

  const handleSortSelect = (e: any) => {
    handleSortChange(e, setSortOption);
    handleFetch();
  };

  return (
    <ul className="flex items-center justify-end text-[#1A3760]">
      <li className="mr-2.5">
        <label htmlFor="select">Sort by:</label>
      </li>
      <li className="mr-4">
        <select
          name="select"
          value={sortOption}
          onChange={handleSortSelect}
          className="w-56 h-10 relative text-[#5F6973] regular-14 pl-4 border-one bg-white cursor-pointer"
        >
          {selectOptions.map((item, index) => {
            return (
              <option
                key={index}
                value={item.value.toLowerCase().replace(/\s+/g, "-")}
                className="text-left regular-14 text-[#1A3760] leading-9 px-7 bg-white hover:text-[#1947e2]"
              >
                {item.value}
              </option>
            );
          })}
        </select>
      </li>
      <li className="filter-btn border-one mr-2">
        <Button>
          <BsFillGridFill height={20} width={14} />
        </Button>
      </li>
      <li className="filter-btn border-one">
        <Button>
          <FaList height={20} width={14} />
        </Button>
      </li>
    </ul>
  );
};

export default FilterVans;

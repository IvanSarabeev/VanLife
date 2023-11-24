import React, { useState } from "react";
import Button from "components/HTML/Button";
import { FaList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { selectOptions } from "constants/data";

type FilterProps = {
  handleFetch: () => void;
  handleSortChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    setSortOption: React.Dispatch<React.SetStateAction<string>>
  ) => Promise<void>;
  handleLayoutChange: (newLayout: string) => void;
  layout: string;
};

const FilterVans = ({
  handleFetch,
  handleSortChange,
  handleLayoutChange,
  layout,
}: FilterProps) => {
  const [sortOption, setSortOption] = useState("date: newest first");

  const handleSortSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSortChange(e, setSortOption);
    handleFetch();
  };

  return (
    <ul className="w-fit flex items-center justify-end text-[#1A3760]">
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
      <li className="hidden md:flex filter-item border-one mr-2">
        <Button
          onClick={() => handleLayoutChange("grid")}
          className={`filter-btn ${layout === "grid" ? "bg-light-coral" : ""}`}
        >
          <BsFillGridFill height={20} width={14} />
        </Button>
      </li>
      <li className="hidden md:flex filter-item border-one">
        <Button
          onClick={() => handleLayoutChange("list")}
          className={`filter-btn ${layout === "list" ? "bg-light-coral" : ""}`}
        >
          <FaList height={20} width={14} />
        </Button>
      </li>
    </ul>
  );
};

export default FilterVans;

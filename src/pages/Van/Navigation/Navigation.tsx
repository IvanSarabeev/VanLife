import React from "react";
import Button from "../../../components/HTML/Button";

const btnTitle = [
  { id: 1, title: "Simple" },
  { id: 2, title: "Luxury" },
  { id: 3, title: "Rugged" },
];

const Navigation = () => {
  return (
    <nav className="flex items-center space-x-4 my-6">
      {btnTitle.map((item) => {
        return (
          <Button
            type="button"
            key={item.id}
            className="inline-flex items-center justify-center flex-shrink-0 py-2 px-6 text-center text-base text-medium font-inter text-[#4D4D4D] leading-6 rounded-md bg-[#FFEAD0]"
          >
            {item.title}
          </Button>
        );
      })}
      <Button
        type="button"
        className="font-inter text-[#4D4D4D] text-base leading-6 font-medium underline"
      >
        Clear filters
      </Button>
    </nav>
  );
};

export default Navigation;

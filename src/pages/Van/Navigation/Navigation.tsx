import React from "react";
import Button from "../../../components/HTML/Button";
import { Link } from "react-router-dom";

const btnTitle = [
  { id: 1, title: "Simple", type: "simple" },
  { id: 2, title: "Luxury", type: "luxury" },
  { id: 3, title: "Rugged", type: "rugged" },
];

type NavProps = {
  typeFilter: string | null;
};

const Navigation = ({ typeFilter }: NavProps) => {
  return (
    <nav className="flex flex-wrap items-center justify-start gap-4 my-6 font-inter text-base text-[#4D4D4D] font-medium">
      {btnTitle.map((item) => {
        return (
          <Button
            type="button"
            key={item.id}
            className={`inline-flex items-center justify-center flex-shrink-0 py-2 lg:py-3 px-6 lg:px-8 text-center rounded-md bg-[#FFEAD0]`}
          >
            {/* I Can also use the useSearchParams hook as an onClick handler
            in order to add the filtering by type, in the button */}
            <Link to={`?type=${item.type}`}>{item.title}</Link>
          </Button>
        );
      })}
      {typeFilter ? (
        <Button type="button" className="pt-4 underline">
          <Link to=".">Clear filters</Link>
        </Button>
      ) : null}
    </nav>
  );
};

export default Navigation;

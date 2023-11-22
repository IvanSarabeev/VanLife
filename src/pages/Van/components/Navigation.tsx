import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/HTML/Button";

const btnTitle = [
  { id: 1, title: "Simple", type: "simple" },
  { id: 2, title: "Luxury", type: "luxury" },
  { id: 3, title: "Rugged", type: "rugged" },
];

type NavProps = {
  typeFilter: string | null;
};

const VansNav = ({ typeFilter }: NavProps) => {
  return (
    <nav className="flex flex-wrap items-center justify-start gap-4 my-6 font-inter text-base text-[#4D4D4D] font-medium">
      {btnTitle.map((item) => {
        return (
          <Link to={`?type=${item.type}`} className="remove-outline">
            <Button
              type="button"
              key={item.id}
              className={`inline-flex items-center justify-center flex-shrink-0 py-2 lg:py-3 px-6 lg:px-8 text-center rounded-md bg-[#FFEAD0]`}
            >
              {item.title}
            </Button>
          </Link>
        );
      })}
      {typeFilter ? (
        <Link to="." className="remove-outline">
          <Button
            type="button"
            className="pt-4 underline outline-none border-none"
          >
            Clear filters
          </Button>
        </Link>
      ) : null}
    </nav>
  );
};

export default VansNav;

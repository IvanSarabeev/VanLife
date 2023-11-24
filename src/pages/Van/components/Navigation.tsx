import React from "react";
import { Link } from "react-router-dom";
import Button from "components/HTML/Button";
import { categoryNav } from "constants/data";

type NavProps = {
  typeFilter: string | null;
};

const VansNav = ({ typeFilter }: NavProps) => {
  return (
    <span className="w-fit flex flex-wrap items-center justify-between gap-4 my-6 text-base text-[#4D4D4D] font-semibold">
      {categoryNav.map((item, index) => {
        return (
          <Link
            key={index}
            to={`?type=${item.type}`}
            className="remove-outline"
          >
            <Button
              type="button"
              key={item.id}
              className={`inline-flex items-center justify-center flex-shrink-0 py-2 lg:py-3 px-3.5 md:px-6 lg:px-8 text-[#1A3760] text-center rounded-md bg-[#FFEAD0]`}
            >
              {item.title}
            </Button>
          </Link>
        );
      })}
      {typeFilter ? (
        <Link to="." className="remove-outline">
          <Button type="button" className="underline outline-none border-none">
            Clear filters
          </Button>
        </Link>
      ) : null}
    </span>
  );
};

export default VansNav;

import React from "react";
import { VanDataExtended } from "types/types";
import Button from "components/HTML/Button";

type DContentProps = {
  item: VanDataExtended;
};

const DetailContent = ({ item }: DContentProps) => {
  return (
    <>
      <div className="gap-x-3 sm:gap-x-5 lg:gap-y-6 flex items-center lg:flex-col lg:items-start">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-32 w-32 md:h-44 md:w-44 lg:w-full rounded-lg aspect-auto object-cover shadow-lg transition-all ease-in-out hover:scale-105 hover:rounded-xl hover:drop-shadow-2xl"
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-2">
          <h4 className="text-2xl font-bold text-custom-black">{item.name}</h4>
          <span className="flex items-start justify-between">
            <Button
              type="button"
              className={`${item.type} capitalize transition-all ease-in-out hover:scale-105`}
            >
              {item.type}
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailContent;

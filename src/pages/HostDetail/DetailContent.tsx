import React from "react";
import { VanDataExtended } from "../../types/types";
import Button from "../../components/HTML/Button";

type DContentProps = {
  item: VanDataExtended;
};

const DetailContent = ({ item }: DContentProps) => {
  return (
    <>
      <div className="flex space-x-4 items-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-40 w-40 rounded-md aspect-auto object-cover"
        />
        <div className="space-y-2">
          <h4 className="text-2xl leading-7 font-bold text-custom-black">
            {item.name}
          </h4>
          <span className="flex items-center justify-between">
            <Button className={`${item.type} capitalize`}>{item.type}</Button>
            <h5 className="text-xl font-bold leading-9 text-custom-black">
              ${item.price}/day
            </h5>
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailContent;

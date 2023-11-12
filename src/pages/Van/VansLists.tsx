import React from "react";
import Button from "../../components/html/Button";
import { VanData } from "../../types/types";
import { Link } from "react-router-dom";

type VansListProps = {
  item: VanData;
};

const VansLists = ({ item }: VansListProps) => {
  return (
    <div className="group w-fit h-auto hover:drop-shadow-lg hover:scale-105 xl:hover:scale-110 delay-100 ease-in-out transition-all">
      <Link to={item.id}>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-56 h-56 md:w-64 md:h-64 aspect-auto object-cover rounded-md group-hover:rounded-lg transition-all"
        />
        <span className="flex justify-between font-inter pt-2 text-custom-black font-semibold">
          <h4 className="text-xl lg:text-2xl">{item.name}</h4>
          <h5 className="text-right text-base lg:text-lg">
            ${item.price} <pre className="text-sm lg:text-base">/day</pre>
          </h5>
        </span>
        <Button className={`${item.type} text-base lg:text-lg capitalize`}>
          {item.type}
        </Button>
      </Link>
    </div>
  );
};

export default VansLists;

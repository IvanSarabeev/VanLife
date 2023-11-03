import React from "react";
import Button from "../../../components/HTML/Button";
import { VanData } from "../../../types/types";
import { Link } from "react-router-dom";

type VanListProps = {
  item: VanData;
};

const VanLists = ({ item }: VanListProps) => {
  return (
    <div className="w-auto h-auto">
      <Link to={`/vans/${item.id}`}>
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          className="w-56 h-56 aspect-auto object-cover rounded-md"
        />
        <span className="flex justify-between font-inter pt-2 text-xl text-custom-black font-semibold leading-8">
          <h4 className="">{item.name}</h4>
          <h5 className="text-right">
            {item.price} <pre className="text-sm">/day</pre>
          </h5>
        </span>
        <Button className={`${item.type} capitalize`}>{item.type}</Button>
      </Link>
    </div>
  );
};

export default VanLists;

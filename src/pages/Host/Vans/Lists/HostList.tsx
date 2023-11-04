import React from "react";
import { VanData } from "../../../../types/types";
import { NavLink } from "react-router-dom";

type HostVanProps = {
  item: VanData;
};

const HostList = ({ item }: HostVanProps) => {
  return (
    <NavLink end to={`/host/vans/${item.id}`}>
      <div className="w-[412px] lg:w-[524px] h-28 flex items-center justify-start rounded-md py-4 px-6 mb-4 space-x-4 shadow-md bg-white">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-16 h-16 rounded-md aspect-auto object-contain"
        />
        <div className="">
          <h4 className="text-xl font-semibold leading-8 text-custom-black">
            {item.name}
          </h4>
          <p className="text-base font-medium leading-8 text-[#4D4D4D]">
            ${item.price}/day
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default HostList;

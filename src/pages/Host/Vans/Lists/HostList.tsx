import React from "react";
import { VanData } from "../../../../types/types";
import { NavLink } from "react-router-dom";

type HostVanProps = {
  item: VanData;
};

const HostList = ({ item }: HostVanProps) => {
  return (
    <NavLink end to={item.id}>
      <div className="group w-auto md:max-w-sm lg:max-w-md h-28 flex items-center justify-start rounded-md py-4 px-6 mb-4 space-x-4 sm:space-x-6 md:space-x-8 shadow-md bg-white hover:scale-105 hover:shadow-lg transition-all ease-in-out">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-16 h-16 rounded-md aspect-auto object-contain group-hover:w-20 group-hover:h-20 group-hover:rounded-lg transition-all ease-in-out delay-100"
        />
        <div className="leading-8">
          <h4 className="text-lg sm:text-xl font-semibold text-custom-black">
            {item.name}
          </h4>
          <p className="text-base font-medium text-[#4D4D4D]">
            ${item.price}/day
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default HostList;

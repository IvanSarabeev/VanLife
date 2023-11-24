import React from "react";
import { Link } from "react-router-dom";
import { VanData } from "types/types";
import { FaRoad } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";

type VansListProps = {
  item: VanData;
};

const VansLists = ({ item }: VansListProps) => {
  return (
    <div className="group h-auto mb-6 p rounded-lg border-one bg-[#f9f9f9]">
      <Link to={item.id}>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-96 h-[290px] sm:w-full sm:h-56 rounded-lg aspect-auto object-cover hover:rounded-md overflow-hidden mx-auto group-hover:rounded-lg transition-all"
        />
        <div className="flex flex-col items-start justify-center py-4 px-2">
          <div className="w-full flex items-center justify-between pb-4 text-[#1A3760]">
            <h4 className="regular-14 font-semibold overflow-hidden truncate">
              {item.model} - {item.year}
            </h4>
            <p className="regular-16 font-semibold leading-6">
              ${item.price} /day
            </p>
          </div>
          {/* <Button className={`${item.type} text-base lg:text-lg capitalize`}>
          {item.type}
        </Button> */}
          <div className="w-full pt-5 border-t border-solid border-[#EAEAEA]">
            <ul className="gap-3 flex items-center justify-start text-xs font-normal capitalize">
              <li className="flex gap-2">
                <FaRoad height={14} width={16} />
                {item.mileage}
              </li>
              <li className="flex gap-2 ">
                <BsFillFuelPumpFill height={14} width={16} />
                {item.fuel}
              </li>
              <li className="flex gap-2">
                <GiGearStickPattern height={14} width={16} />
                {item.gearType}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VansLists;

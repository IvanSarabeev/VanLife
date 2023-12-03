import React, { memo } from "react";
import { Link } from "react-router-dom";
import { VanData } from "types/types";
import { FaRoad, FaStar } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import Button from "components/HTML/Button";

type GridVansProps = {
  item: VanData;
};

const GridVans = ({ item }: GridVansProps) => {
  return (
    <div className="group h-auto mb-6 p rounded-xl border-one bg-[#f9f9f9]">
      <Link to={item.id}>
        <div className="p-2">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-96 h-[290px] sm:w-full sm:h-56 rounded-md aspect-auto object-cover mx-auto"
          />
        </div>
        <div className="flex flex-col items-start justify-center py-4 px-2">
          <div className="w-full flex items-center justify-between text-[#1A3760]">
            <h4 className="regular-14 font-semibold overflow-hidden truncate">
              {item.model} - {item.year}
            </h4>
            <p className="regular-16 font-semibold leading-6">
              ${item.price} /day
            </p>
          </div>
          <div className="w-full flex items-center justify-between text-xs py-2">
            <span>
              <strong>Category:</strong>{" "}
              <Button type="button" className={`regular-14 capitalize`}>
                {item.type}
              </Button>
            </span>
            <span className="gap-1 flex items-center justify-center">
              {[...Array(5)].map((item, index) => {
                return (
                  <FaStar
                    key={index}
                    height={14}
                    width={14}
                    className="fill-yellow-500"
                  />
                );
              })}
              <p className="text-[#1A3760] regular-14">({item.star})</p>
            </span>
          </div>
          <div className="w-full pt-5 border-t border-solid border-[#EAEAEA]">
            <ul className="gap-3 flex items-center justify-start text-xs font-normal capitalize">
              <li className="flex gap-2 items-center justify-center">
                <FaRoad height={14} width={16} />
                {item.mileage}
              </li>
              <li className="flex gap-2 items-center justify-center">
                <BsFillFuelPumpFill height={14} width={16} />
                {item.fuel}
              </li>
              <li className="flex gap-2 items-center justify-center">
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

export default memo(GridVans);

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { VanData } from "types/types";
import { FaRoad, FaStar } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import Button from "components/HTML/Button";

type ListVansProps = {
  item: VanData;
};

const ListVans = ({ item }: ListVansProps) => {
  return (
    <Link to={item.id}>
      <div className="group w-full h-auto gap-y-0 md:gap-y-6 flex flex-col md:flex-row items-center justify-start rounded-xl border-one bg-[#f9f9f9]">
        <div className="relative p-2 md:p-3 lg:p-3.5 xl:p-4 2xl:p-6">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-96 h-[290px] sm:w-full sm:h-[360px] md:w-fit md:max-w-[360px] md:h-fit md:max-h-[360px] xl:w-11/12 xl:h-full rounded-md aspect-auto object-cover object-center mx-auto"
          />
        </div>
        <div className="w-full md:gap-4 lg:gap-2 flex flex-col items-start justify-between md:justify-center p-4">
          <div className="w-full flex items-center justify-between text-[#1A3760]">
            <h4 className="regular-16 xl:regular-18 font-semibold overflow-hidden truncate">
              {item.model} - {item.year}
            </h4>
            <p className="regular-18 lg:bold-20 xl font-semibold leading-6">
              ${item.price} /day
            </p>
          </div>
          <div className="w-full flex items-center justify-between text-sm xl:text-base py-2">
            <span>
              <strong>Category:</strong>{" "}
              <Button
                type="button"
                className="regular-16 xl:regular-18 capitalize"
              >
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
              <p className="text-[#1A3760] regular-14 xl:regular-16">
                ({item.star})
              </p>
            </span>
          </div>
          <p className="w-full max-w-2xl text-justify text-sm xl:text-justify xl:text-base mb-4 md:mb-2 lg:mb-0">
            <strong>Description: </strong> {item.description}
          </p>
          <div className="w-full pt-5 border-t border-solid border-[#EAEAEA]">
            <ul className="gap-3 flex items-center justify-start text-sm xl:text-base font-normal capitalize">
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
      </div>
    </Link>
  );
};

export default memo(ListVans);

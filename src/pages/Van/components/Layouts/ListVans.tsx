import React from "react";
import { Link } from "react-router-dom";
import { VanData } from "types/types";
import { FaRoad } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import Button from "components/HTML/Button";

type ListVansProps = {
  item: VanData;
};

const ListVans = ({ item }: ListVansProps) => {
  return (
    <Link to={item.id}>
      <div className="group h-auto gap-y-0 md:gap-y-6 flex flex-col md:flex-row items-center justify-start rounded-xl border-one bg-[#f9f9f9]">
        <div className="relative p-2 xl:p-4 2xl:p-6">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-96 h-[290px] sm:w-[480px] sm:h-[360px] rounded-md aspect-auto object-cover object-center mx-auto"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-between md:justify-center p-4">
          <div className="w-full flex items-center justify-between text-[#1A3760]">
            <h4 className="regular-14 font-semibold overflow-hidden truncate">
              {item.model} - {item.year}
            </h4>
            <p className="regular-16 font-semibold leading-6">
              ${item.price} /day
            </p>
          </div>
          <div className="w-full flex items-center justify-between text-xs py-2">
            <p>
              <strong>Category:</strong>{" "}
              <Button className="regular-14 capitalize"> {item.type}</Button>
            </p>
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
          <div className="text-xs text-justify">
            <p>
              <strong>Description: </strong> {item.description}
            </p>
          </div>
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
      </div>
    </Link>
  );
};

export default ListVans;

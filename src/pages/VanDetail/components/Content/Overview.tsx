import React from "react";
import { VanDataExtended } from "types/types";

type OverviewProps = {
  vanInfo: VanDataExtended;
};

const Overview = ({ vanInfo }: OverviewProps) => {
  return (
    <>
      <h5 className="regular-16 xl:regular-18 text-[#1a3760] font-semibold mb-6">
        Overview
      </h5>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Model:</strong>
        <p className="text-[#5F6973] font-normal capitalize">{vanInfo.model}</p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Condition:</strong>
        <p className="text-[#5F6973] font-normal capitalize">Good</p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Year:</strong>
        <p className="text-[#5F6973] font-normal capitalize">{vanInfo.year}</p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Mileage:</strong>
        <p className="text-[#5F6973] font-normal capitalize">
          {vanInfo.mileage}
        </p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Fuel Type:</strong>
        <p className="text-[#5F6973] font-normal capitalize">{vanInfo.fuel}</p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Consumption:</strong>
        <p className="text-[#5F6973] font-normal capitalize">
          {vanInfo.consumption}
        </p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Eng Power:</strong>
        <p className="text-[#5F6973] font-normal capitalize">
          {vanInfo.engPower}
        </p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">Gear Type:</strong>
        <p className="text-[#5F6973] font-normal capitalize">
          {vanInfo.gearType}
        </p>
      </div>
      <div className="py-1.5 md:py-2 xl:py-2.5 w-full flex items-center justify-between border-b-[1px] border-solid border-[#EAEAEA]">
        <strong className="text-[#1a3760] font-semibold">№ Gear:</strong>
        <p className="text-[#5F6973] font-normal capitalize">{vanInfo.gears}</p>
      </div>
    </>
  );
};

export default Overview;

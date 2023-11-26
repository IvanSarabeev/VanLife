import React from "react";
import { VanDataExtended } from "types/types";
import ImgCollection from "./ImgCollection";
import ScheduleForm from "./ScheduleForm";
import Overview from "./Overview";
import Description from "./Description";
import Location from "./Location";

type SingleVanProps = {
  vanInfo: VanDataExtended;
};

const ProductShowcase = ({ vanInfo }: SingleVanProps) => {
  return (
    <div
      key={vanInfo.id}
      className="gap-4 lg:gap-6 xl:gap-8 flex flex-col items-start justify-between py-8"
    >
      <span className="w-full h-fit flex items-center justify-between mb:4 lg:mb-6">
        <div className="gap-2 flex flex-col items-start justify-start">
          <h3 className=" text-2xl md:text-3xl xl:text-4xl font-semibold text-[#1a3760]">
            {vanInfo.model}
          </h3>
        </div>
        <h4 className="text-xl md:text-2xl font-semibold text-[#1a3760] text-right">
          ${vanInfo.price} <strong className="text-gray-500/90">/day</strong>
        </h4>
      </span>
      <div className="w-full max-w-7xl gap-5 flex flex-col lg:flex-row items-center justify-center">
        <ImgCollection vanInfo={vanInfo} />
        <aside className="w-full max-w-sm gap-y-2.5 xl:gap-y-3.5 flex flex-col items-end justify-end regular-14 xl:regular-16">
          <ScheduleForm />
        </aside>
      </div>
      <article className="gap-6 w-full flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start regular-14">
        <div className="w-full lg:w-2/4 flex flex-col items-start justify-start border-one rounded-lg bg-white p-6">
          <Overview vanInfo={vanInfo} />
        </div>
        <div className="w-full lg:w-2/4 flex flex-col items-start justify-start border-one rounded-lg bg-white p-6">
          <Description vanInfo={vanInfo} />
          <Location />
        </div>
      </article>
    </div>
  );
};

export default ProductShowcase;

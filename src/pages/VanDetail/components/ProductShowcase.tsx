import React from "react";
// import Button from "components/HTML/Button";
import { VanDataExtended } from "types/types";
import ImgCollection from "./ImgCollection";
import Overview from "./Overview";

type SingleVanProps = {
  vanInfo: VanDataExtended;
};

const ProductShowcase = ({ vanInfo }: SingleVanProps) => {
  return (
    <div key={vanInfo.id} className="flex flex-col items-center justify-center">
      <span className="w-full h-fit flex items-center justify-between mb:4 lg:mb-6">
        <div className="gap-2 flex flex-col items-start justify-start">
          <h3 className=" text-2xl md:text-3xl xl:text-4xl font-semibold text-[#1a3760]">
            {vanInfo.model}
          </h3>
        </div>
        <h4 className="text-xl md:text-2xl font-semibold text-[#1a3760] text-right">
          ${vanInfo.price}
        </h4>
      </span>
      <div className="gap-5 flex items-center justify-center">
        <ImgCollection vanInfo={vanInfo} />
      </div>
      <article className="flex flex-col items-start justify-between p-6 border-one rounded-lg">
        <Overview vanInfo={vanInfo} />
      </article>
    </div>
  );
};

export default ProductShowcase;

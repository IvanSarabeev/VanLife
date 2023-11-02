import React from "react";
import Button from "../../../components/HTML/Button";
import { VanDataExtended } from "../../../types/types";

type SingleVanProps = {
  vanInfo: VanDataExtended;
};

const ProductDetail = ({ vanInfo }: SingleVanProps) => {
  return (
    <>
      <aside className="flex flex-col lg:flex-row-reverse lg:gap-x-10 items-center justify-center space-y-4 mx-auto">
        <div className="relative z-10">
          <img
            src={vanInfo.imageUrl}
            alt={vanInfo.name}
            loading="lazy"
            className="w-96 h-auto rounded-md mx-auto shadow-xl aspect-auto object-cover"
          />
          <Button
            type="button"
            className={`absolute right-2.5 top-5 z-20 inline-flex ${vanInfo.type}`}
          >
            {vanInfo.price}
            <pre>/day</pre>
          </Button>
        </div>
        <article className="flex flex-col flex-1 flex-shrink-0 space-y-6">
          <span className="inline-flex items-center justify-between">
            <h3 className="text-4xl font-bold text-[#161616] leading-8">
              {vanInfo.name}
            </h3>
            <Button className={`${vanInfo.type} capitalize`}>
              {vanInfo.type}
            </Button>
          </span>
          <p className="max-w-md text-base font-medium leading-6 text-left indent-2">
            {vanInfo.description}
          </p>
          <Button className="text-lg font-bold text-white leading-8 text-center py-[10px] px-36 rounded bg-[#FF8C38] hover:scale-105 transition">
            Rent this van
          </Button>
        </article>
      </aside>
    </>
  );
};

export default ProductDetail;

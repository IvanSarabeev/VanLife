import React from "react";
import Button from "components/HTML/Button";
import { VanDataExtended } from "types/types";

type SingleVanProps = {
  vanInfo: VanDataExtended;
};

const ProductDetail = ({ vanInfo }: SingleVanProps) => {
  return (
    <>
      <aside className="flex flex-col lg:flex-row-reverse lg:gap-x-10 xl:gap-x-14 items-center justify-center mx-auto">
        <div className="relative z-10">
          <img
            src={vanInfo.imageUrl}
            alt={vanInfo.name}
            loading="lazy"
            className="w-64 md:w-72 lg:w-80 xl:w-96 h-auto rounded-md mx-auto shadow-xl aspect-auto object-cover"
          />
          <Button
            type="button"
            className={`absolute right-2.5 top-2.5 lg:top-5 z-20 inline-flex text-sm md:text-base ${vanInfo.type}`}
          >
            ${vanInfo.price}
            <pre>/day</pre>
          </Button>
        </div>
        <article className="flex flex-col flex-1 flex-shrink-0 gap-6">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-custom-black">
            {vanInfo.name}
          </h3>
          <p className="md:max-w-md lg:max-w-lg text-sm md:text-base font-normal text-left indent-2">
            {vanInfo.description}
          </p>
          <Button className="w-fit text-sm xl:text-base font-bold text-white leading-8 text-center py-[10px] px-20 sm:px-24 md:px-28 rounded-md bg-dark-coral transition-all hover:scale-105 hover:rounded-lg">
            Rent this van
          </Button>
        </article>
      </aside>
    </>
  );
};

export default ProductDetail;

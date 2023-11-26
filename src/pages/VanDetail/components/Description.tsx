import React from "react";
import { VanDataExtended } from "types/types";

type DescriptionProps = {
  vanInfo: VanDataExtended;
};

const Description = ({ vanInfo }: DescriptionProps) => {
  return (
    <>
      <span className="w-full flex items-center justify-between mb-6 text-[#1a3760]">
        <strong className="regular-16 xl:regular-18 font-semibold">
          Description{" "}
        </strong>
        <p className="regular-16">{vanInfo.name}</p>
      </span>
      <p className="regular-14 text-justify indent-1">{vanInfo.description}</p>
    </>
  );
};

export default Description;

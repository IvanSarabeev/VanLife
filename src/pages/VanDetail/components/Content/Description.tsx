import React from "react";
import { VanDataExtended } from "types/types";

type DescriptionProps = {
  vanInfo: VanDataExtended;
};

const Description = ({ vanInfo }: DescriptionProps) => {
  return (
    <>
      <div className="w-full block mb-6">
        <strong className="regular-16 xl:regular-18 font-semibold text-[#1a3760]">
          Description{" "}
        </strong>
      </div>
      <p className="regular-14 text-justify indent-1">{vanInfo.description}</p>
    </>
  );
};

export default Description;

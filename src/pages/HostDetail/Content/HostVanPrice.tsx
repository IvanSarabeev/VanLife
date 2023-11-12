import React from "react";
import { useVanContext } from "../HostDetailsPage";

const HostVanPrice = () => {
  const { vanDetail } = useVanContext();
  return (
    <>
      <h4 className="inline-flex text-2xl font-medium text-custom-black leading-6">
        ${vanDetail?.price}
        <pre className="text-base text-[#4D4D4D]">/day</pre>
      </h4>
    </>
  );
};

export default HostVanPrice;

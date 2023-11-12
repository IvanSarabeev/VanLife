import React from "react";
import { useVanContext } from "../HostDetailsPage";

const HostVanInfo = () => {
  const { vanDetail } = useVanContext();

  return (
    <article className="flex flex-col gap-y-4 text-sm lg:text-base text-custom-black">
      <h4 className="font-normal">
        <strong className="font-black">Name:</strong> {vanDetail?.name}
      </h4>
      <span className="inline-flex space-x-4">
        <h4 className="font-normal capitalize">
          <strong className="font-black">Visibility: </strong>
          {vanDetail?.visiblity}
        </h4>
        <h4 className="font-normal capitalize">
          <strong className="font-black">Category: </strong>
          {vanDetail?.type}
        </h4>
      </span>
      <p className="font-normal">
        <strong className="font-black">Description: </strong>
        {vanDetail?.description}
      </p>
    </article>
  );
};

export default HostVanInfo;

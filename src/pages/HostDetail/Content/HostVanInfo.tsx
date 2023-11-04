import React from "react";
import { useVanContext } from "../HostDetails";

const HostVanInfo = () => {
  const { vanDetail } = useVanContext();

  return (
    <article className="flex flex-col space-y-4 text-sm text-custom-black leading-5">
      <h4 className="font-medium">
        <strong className="font-bold">Name:</strong> {vanDetail?.name}
      </h4>
      <h4 className="font-medium capitalize">
        <strong className="font-bold">Category: </strong>
        {vanDetail?.type}
      </h4>
      <p className="font-medium">
        <strong className="font-bold">Description: </strong>
        {vanDetail?.description}
      </p>
    </article>
  );
};

export default HostVanInfo;

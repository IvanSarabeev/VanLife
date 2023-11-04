import React from "react";
import { useVanContext } from "../HostDetails";

const HostVanPhotos = () => {
  const { vanDetail } = useVanContext();
  return (
    <>
      <img
        src={vanDetail?.imageUrl}
        alt={vanDetail?.name}
        className="w-28 h-28 aspect-auto object-contain rounded"
      />
    </>
  );
};

export default HostVanPhotos;

import React from "react";
import { useVanContext } from "../HostDetails";

const HostVanPhotos = () => {
  const { vanDetail } = useVanContext();
  return (
    <>
      <div className="flex gap-x-2 items-center overflow-auto touch-pan-x">
        {vanDetail?.imgGallery.map((image) => {
          return (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-24 h-auto md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 aspect-auto object-contain rounded-md"
            />
          );
        })}
      </div>
    </>
  );
};

export default HostVanPhotos;

import React, { useState } from "react";
import Button from "components/HTML/Button";
import { VanDataExtended } from "types/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ImgProps = {
  vanInfo: VanDataExtended;
};

const ImgCollection = ({ vanInfo }: ImgProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const switchImage = (index: number) => {
    const newIndex =
      (currentIndex + index + vanInfo.imgGallery.length) %
      vanInfo.imgGallery.length;
    setCurrentIndex(newIndex);
  };

  return (
    <span className="w-full gap-2.5 flex flex-col">
      <div className="relative z-10">
        <img
          src={vanInfo.imgGallery[currentIndex].src}
          alt={vanInfo.imgGallery[currentIndex].alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full max-w-lg rounded-lg aspect-auto object-cover object-center"
        />
        <Button
          type="button"
          className={`absolute top-2.5 right-2.5 capitalize font-black cursor-auto ${vanInfo.type}`}
        >
          {vanInfo.type}
        </Button>
        <span className="absolute inset-y-2/4 inset-x-auto w-full h-fit z-20 flex items-center justify-between px-2">
          <Button
            type="button"
            className="prev-next-btns"
            onClick={() => switchImage(-1)}
          >
            <FaArrowLeft height={13} width={16} color="#fff" />
          </Button>
          <Button
            type="button"
            className="prev-next-btns"
            onClick={() => switchImage(1)}
          >
            <FaArrowRight height={13} width={16} color="#fff" />
          </Button>
        </span>
      </div>
      <div className="w-full gap-2.5 flex flex-wrap items-center">
        {vanInfo.imgGallery.map((imgSrc, index) => {
          return (
            <img
              key={imgSrc.id}
              src={imgSrc.src}
              alt={imgSrc.alt}
              decoding="async"
              loading="lazy"
              onClick={() => setCurrentIndex(index)}
              className={`${
                index === currentIndex ? "h-20 w-fit opacity-100" : ""
              }h-20 w-fit rounded-md opacity-60 object-cover object-center aspect-square`}
            />
          );
        })}
      </div>
    </span>
  );
};

export default ImgCollection;

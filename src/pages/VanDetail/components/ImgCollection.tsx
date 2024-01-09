import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <span className="w-full h-fit gap-2.5 flex flex-col">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full h-fit max-h-[650px]"
      >
        <img
          src={vanInfo.imgGallery[currentIndex].src}
          alt={vanInfo.imgGallery[currentIndex].alt}
          loading="lazy"
          decoding="async"
          className="group w-full h-full max-h-[700px] rounded-lg aspect-auto object-cover object-center transition-all ease-in-out scale-95 hover:scale-100"
        />
        <Button
          type="button"
          className={`absolute top-4 right-7 capitalize font-black cursor-auto ${vanInfo.type}`}
        >
          {vanInfo.type}
        </Button>
        <span className="absolute inset-y-2/4 inset-x-auto w-full h-fit z-20 flex items-center justify-between px-4">
          <Button
            type="button"
            className="prev-next-btns"
            onClick={() => switchImage(-1)}
          >
            <FaArrowLeft height={13} width={16} color="currentColor" />
          </Button>
          <Button
            type="button"
            className="prev-next-btns"
            onClick={() => switchImage(1)}
          >
            <FaArrowRight height={13} width={16} color="currentColor" />
          </Button>
        </span>
      </motion.div>
      <div className="w-full gap-2.5 px-2 lg:px-4 xl:px-6 2xl:px-8 flex flex-wrap items-center justify-center">
        {vanInfo.imgGallery.map((imgSrc, index) => {
          return (
            <motion.img
              key={imgSrc.id}
              src={imgSrc.src}
              alt={imgSrc.alt}
              decoding="async"
              loading="lazy"
              onClick={() => setCurrentIndex(index)}
              className={`${
                index === currentIndex ? "h-20 xl:h-24 w-fit opacity-100" : ""
              } w-fit h-20 xl:h-24 2xl:w-40 rounded-md opacity-60 object-cover object-center aspect-square cursor-pointer hover:opacity-100`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          );
        })}
      </div>
    </span>
  );
};

export default ImgCollection;

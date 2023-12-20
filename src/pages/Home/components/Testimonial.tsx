import React, { useRef, useState, MouseEvent, TouchEvent } from "react";
import { testimonial } from "../../../constants/data";
import IconBxsQuoteAltLeft from "../../../assets/icons/Quote";
import { ReactComponent as IconStar } from "../../../assets/svgs/star.svg";
import { handleTouchMove, handleTouchStart } from "../../../utils/touchEvent";
import { onMouseDown, onMouseUp, onMouseMove } from "../../../utils/dragEvent";

const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    handleTouchStart(e, setStartX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    handleTouchMove(e, containerRef, startX, setStartX);
  };

  const onMouseStart = (e: MouseEvent<HTMLDivElement>) => {
    onMouseDown(e, setStartX, setIsGrabbing);
  };

  const onMouseEnd = (e: MouseEvent<HTMLDivElement>) => {
    onMouseUp(e, setIsGrabbing);
  };

  const onMouseMoving = (e: MouseEvent<HTMLDivElement>) => {
    onMouseMove(e, containerRef, isGrabbing, setStartX, startX);
  };

  return (
    <>
      <h3 className="text-3xl xl:text-4xl font-semibold text-center padding-container">
        What our customers say about
        <strong className="ml-2 font-black"> #VANLIFE</strong>
      </h3>
      <aside
        aria-grabbed={true}
        ref={containerRef}
        onMouseUp={onMouseEnd}
        onMouseMove={onMouseMoving}
        onMouseDown={onMouseStart}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        //  max-w-[1440px] ChatGPT ->  sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]
        className="relative py-4 mb-0 md:mb-4 lg:mb-6 xl:mb-8 max-w-full mx-auto 2xl:min-w-[1440px] min-w-[1200px] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] touch-pan-x overflow-x-auto overflow-y-clip focus:touch-pan-right"
      >
        <div className="h-full w-full flex flex-row items-start justify-between mt-4 lg:mt-6 xl:mt-8 text-black select-none cursor-grab">
          {testimonial.map((item, index) => {
            return (
              <div
                key={index}
                className="group min-w-[25%] sm:min-w-[25%] lg:min-w-[40%] h-auto flex flex-col justify-stretch my-4 md:my-6 lg:my-8 mx-4 py-6 md:py-8 lg:py-10 px-8 md:px-10 lg:px-12 text-left rounded-2xl bg-light-coral hover:bg-dark-coral transition-all ease-in-out delay-100"
              >
                <IconBxsQuoteAltLeft className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 mb-3 fill-[#d8e0e9] group-hover:fill-[#050505] delay-150" />
                <p className="flex-1 regular-14 md:regular-16 italic group-hover:text-[#f5f5f5] first-letter:text-lg lg:first-letter:text-xl first-letter:uppercase">
                  {item.text}
                </p>
                <div className="gap-4 flex items-center mt-6">
                  <img
                    src={item.imgSrc}
                    alt="portrait"
                    loading="lazy"
                    decoding="async"
                    height={63}
                    width={63}
                    className="rounded-full border-2 border-white shadow-md"
                  />
                  <p className="text-xs md:regular-14 group-hover:font-medium">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
      <div className="flex flex-col items-center justify-center mx-auto padding-container">
        <h4 className="text-xl md:text-2xl font-bold text-center mb-2 xl:mb-4">
          More than 10,000 travellers were ahead of you
        </h4>
        <span className="gap-2 flex items-center justify-center">
          {[...Array(5)].map((_, index) => (
            <IconStar
              key={index}
              width={20}
              height={20}
              className="fill-yellow-400 bg-transparent"
            />
          ))}
          <p className="regular-14 xl:regular-16">
            5/5 • Based on 12,819 reviews
          </p>
        </span>
      </div>
    </>
  );
};

export default Testimonial;

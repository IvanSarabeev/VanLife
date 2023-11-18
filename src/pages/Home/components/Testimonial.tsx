import React, { useRef, useState, MouseEvent } from "react";
import { testimonial } from "../../../constants/data";
import IconBxsQuoteAltLeft from "../../../assets/icons/Quote";
import { ReactComponent as IconStar } from "../../../assets/svgs/star.svg";

const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const handleGrabStart = (e: MouseEvent<HTMLDivElement>) => {
    setIsGrabbing(true);
    setStartX(e.clientX);
  };

  const handleGrabEdnd = (e: MouseEvent<HTMLDivElement>) => {
    setIsGrabbing(false);
  };

  const handleGrabbing = (e: MouseEvent<HTMLDivElement>) => {
    if (isGrabbing && containerRef.current) {
      const delta = startX - e.clientX;
      containerRef.current.scrollLeft += delta;
      setStartX(e.clientX);
    }
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
        onMouseUp={handleGrabEdnd}
        onMouseMove={handleGrabbing}
        onMouseDown={handleGrabStart}
        className="relative min-w-full py-4 mb-0 md:mb-4 lg:mb-6 xl:mb-8 max-container touch-pan-x overflow-x-auto focus:touch-pan-right"
      >
        <div className="h-full w-auto flex flex-col lg:flex-row items-start justify-between mt-4 lg:mt-6 xl:mt-8 text-black select-none cursor-grab">
          {testimonial.map((item, index) => {
            return (
              <div
                key={index}
                className="group min-w-[250px] sm:min-w-[350px] lg:min-w-[540px] h-auto flex flex-col justify-stretch my-4 md:my-6 lg:my-8 mx-4 py-6 md:py-8 lg:py-10 px-8 md:px-10 lg:px-12 text-left rounded-2xl bg-light-coral hover:bg-dark-coral transition-all ease-in-out delay-100"
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
          More than 100,000 travellers were ahead of you
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
            5/5 • Based on 75,819 reviews
          </p>
        </span>
      </div>
    </>
  );
};

export default Testimonial;

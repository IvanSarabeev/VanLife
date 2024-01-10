import React from "react";
import { vanStaff } from "../../../constants/data";

const MeetTeam = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center pb-6">
        <h4 className="text-[40px] lg:text-[48px] heading-attr xl:max-w-[640px]">
          Meet our excellent team
        </h4>
        {/* <p className="max-w-md regular-14 lg:regular-16 text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, alias ut
          deserunt modi dolorum magnam. Saepe doloremque magnam.
        </p> */}
      </div>
      <div className="gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 flex flex-wrap flex-col sm:flex-row items-center justify-center 2xl:flex-nowrap">
        {vanStaff.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={item.imgSrc}
                alt={item.name}
                decoding="async"
                loading="lazy"
                className="group z-10 h-60 lg:h-64 2xl:h-80 w-full rounded-xl shadow-lg transition-transform transform aspect-auto object-cover object-center duration-300 hover:scale-105"
              />
              <div className="z-20 text-[#102742] px-4 py-3.5 -mt-6 rounded-lg bg-light-coral">
                <h5 className="text-base md:text-lg xl:text-xl font-black">
                  {item.name}
                </h5>
                <h6 className="text-sm md:text-base font-normal text-custom-black">
                  {item.title}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MeetTeam;

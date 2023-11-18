import React from "react";
import { ReactComponent as IconMap } from "../../../assets/svgs/map.svg";

const GallerySlider = () => {
  return (
    <>
      <div className="w-full h-80 lg:h-[400px] xl:h-[600px] flex items-start justify-start gap-8 text-white touch-pan-x overflow-x-auto focus:touch-pan-right">
        <div className="h-full w-full min-w-[450px] xl:min-w-[1000px] bg-van bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
          <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
            <div className="flexCenter gap-4">
              <div className="rounded-full bg-dark-coral p-4">
                <IconMap width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base md:text-lg font-bold shadow-2xl">
                  Putuk Truno Camp
                </h4>
                <p className="regular-14">NA, Carolina</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full min-w-[450px] xl:min-w-[1000px] bg-capture bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
          <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
            <div className="flexCenter gap-4">
              <div className="rounded-full bg-dark-coral p-4">
                <IconMap width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base md:text-lg font-bold shadow-2xl">
                  Capture The Moment{" "}
                </h4>
                <p className="regular-14">Moments to Live</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full min-w-[450px] xl:min-w-[1000px] bg-home bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
          <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
            <div className="flexCenter gap-4">
              <div className="rounded-full bg-dark-coral p-4">
                <IconMap width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1 ">
                <h4 className="text-lg font-bold">Moutain View</h4>
                <p className="regular-14">Somewhere in the Wildness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden text-white rounded-3xl bg-dark-coral hover:bg-coral hover:border-[#FF8C38] hover:border-[1px] hover:text-dark-coral transition-all ease-in-out duration-75 delay-75">
          <h2 className="text:2xl md:text-3xl lg:text-4xl xl:text-[56px] xl:leading-[120%] xl:font-bold capitalize">
            <strong className="font-black">Feeling Lost </strong>
            and not knowing the way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 indent-1">
            Starting with anxiety of which vans suites you best depending on
            your location, the possibility of getting confused of too many
            arangments is high. That's why we are here for those of you who want
            to start the adventure immediately
          </p>
        </div>
      </aside>
    </>
  );
};

export default GallerySlider;

import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Button from "../components/html/Button";
import { ReactComponent as IconStar } from "../assets/svgs/star.svg";
import { ReactComponent as IconMapPin } from "../assets/svgs/map-pin.svg";
import { ReactComponent as IconMap } from "../assets/svgs/map.svg";
import PhoneImg from "../assets/images/phone.png";
import { featuresData } from "../constants/data";

const HomePage = () => {
  return (
    <>
      <Layout>
        <main className="relative overflow-hidden font-inter text-custom-black bg-coral">
          <section className="max-container px-6 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="absolute top-0 right-0 md:right-[-7rem] h-screen w-screen bg-hero bg-cover bg-center object-cover aspect-auto"></div>
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
              <h1 className="text-[52px] lg:text-[68px] heading-attr">
                You got the travel plans, we got the travel vans.
              </h1>
              <p className="indent-1 lg:indent-0 regular-16 md:text-lg mt-6 xl:max-w-lg">
                Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
              </p>
              <div className="flex flex-wrap gap-5 my-11">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <IconStar
                      key={index}
                      width={24}
                      height={24}
                      className="fill-yellow-400 bg-transparent"
                    />
                  ))}
                </div>
                <p className="regular-16 lg:text-xl">
                  <strong className="text-[#252525] text-base lg:text-xl font-bold mr-1">
                    +100
                  </strong>
                  Excellent Reviews
                </p>
              </div>
              <Button type="button" className="primary-btn">
                <Link to="vans" className="link-attr">
                  Find Your Van
                </Link>
              </Button>
            </div>
            <aside className="relative flex flex-1 items-start">
              <div className="group relative z-20 w-[268px] h-fit flex flex-col gap-8 rounded-3xl px-7 py-8 bg-[#2C2927] transition-all ease-in-out hover:text-white hover:bg-dark-coral">
                <div className="flexBetween">
                  <p className="regular-16 text-gray-500/90 group-hover:text-gray-200/80">
                    Location
                  </p>
                  <IconMapPin width={24} height={24} className="text-white" />
                </div>
                <p className="text-xl font-bold text-white">
                  Your Desired Place
                </p>
                <div className="flexBetween">
                  <div className="flex flex-col">
                    <h4 className="regular-16 block text-gray-500/90 group-hover:text-gray-200/80">
                      Distance
                    </h4>
                    <p className="text-xl text-white">173.28 mi</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="regular-16 block text-gray-500/90 group-hover:text-gray-200/80">
                      Elevation
                    </h4>
                    <p className="text-xl text-white">2.040 km</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
          <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-10">
            <div className="w-full h-80 lg:h-[400px] xl:h-[600px] flex items-start justify-start gap-8 touch-pan-x overflow-x-auto focus:touch-pan-right">
              <div className="h-full w-full min-w-[1000px] bg-van bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
                <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                  <div className="flexCenter gap-4">
                    <div className="rounded-full bg-dark-coral p-4">
                      <IconMap width={28} height={28} className="text-white" />
                    </div>
                    <div className="flex flex-col gap-1 text-white">
                      <h4 className="text-lg font-bold">Putuk Truno Camp</h4>
                      <p className="regular-14">NA, Carolina</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full min-w-[1000px] bg-capture bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
                <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                  <div className="flexCenter gap-4">
                    <div className="rounded-full bg-dark-coral p-4">
                      <IconMap width={28} height={28} className="text-white" />
                    </div>
                    <div className="flex flex-col gap-1 text-white">
                      <h4 className="text-lg font-bold drop-shadow-2xl">
                        Capture The Moment{" "}
                      </h4>
                      <p className="regular-14">Moments to Live</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full min-w-[1000px] bg-home bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
                <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                  <div className="flexCenter gap-4">
                    <div className="rounded-full bg-dark-coral p-4">
                      <IconMap width={28} height={28} className="text-white" />
                    </div>
                    <div className="flex flex-col gap-1 text-white">
                      <h4 className="text-lg font-bold">Moutain View</h4>
                      <p className="regular-14">Somewhere in the Wildness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
              <div className="p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden text-white rounded-3xl bg-dark-coral">
                <h2 className="text-2xl md:text-3xl xl:text-[64] xl:heading-attr font-medium capitalize">
                  <strong className="">Feeling Lost </strong>
                  and not knowing the way?
                </h2>
                <p className="regular-14 xl:regular-16 mt-5">
                  Starting from the anxiety of the climbers when visiting a new
                  climbing location, the possibility of getting lost is very
                  large. That's why we are here for those of you who want to
                  start an adventure
                </p>
              </div>
            </div>
          </section>
          <section className="flexCenter flex-col py-24 overflow-hidden bg-white bg-feature bg-center bg-no-repeat">
            <div className="w-full relative max-container padding-container flex justify-end">
              <div className="flex flex-1 lg:min-h-[800px]">
                <img
                  src={PhoneImg}
                  alt="phone"
                  loading="lazy"
                  className="hidden lg:flex feature-phone"
                  decoding="async"
                />
              </div>
              <article className="z-20 w-full lg:w-[60%] flex flex-col">
                <h2 className="text-4xl lg:text-[64px] heading-attr font-bold">
                  Our Features
                </h2>
                <ul className="gap-10 lg:gap-20 grid md:grid-cols-2 mt-10 lg:mt-20">
                  {featuresData.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.id}
                        className="w-full flex flex-1 flex-col items-start"
                      >
                        <div className="text-white p-4 lg:p-7 rounded-full bg-dark-coral">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl lg:text-3xl mt-5 capitalize">
                          {item.title}
                        </h3>
                        <p className="regular-16 text-gray-600 bg-white/80 mt-5 lg:mt-7 lg:bg-none">
                          {item.text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <Button type="button" className="primary-btn">
                  <Link to="about" className="link-attr">
                    Who are we &rarr;
                  </Link>
                </Button>
              </article>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default HomePage;

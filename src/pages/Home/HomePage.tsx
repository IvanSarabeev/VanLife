import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/HTML/Button";
import { ReactComponent as IconStar } from "../../assets/svgs/star.svg";
import { ReactComponent as IconMapPin } from "../../assets/svgs/map-pin.svg";
import HeroImg from "../../assets/images/hero.webp";
import Layout from "components/Layouts/Layout";
import Testimonial from "./components/Testimonial";
import Features from "./components/Features";
import GallerySlider from "./components/GallerySlider";

const HomePage = () => {
  return (
    <>
      <Layout>
        <main className="relative overflow-hidden font-inter text-custom-black bg-coral">
          <section className="max-container px-6 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <img
              src={HeroImg}
              alt="hero"
              decoding="async"
              loading="eager"
              className="absolute top-0 right-0 md:right-[-7rem] h-screen w-screen bg-cover bg-center object-cover aspect-auto"
            />
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
              <Link to="vans" className="remove-outline">
                <Button type="button" className="primary-btn">
                  Find Your Van &rarr;
                </Button>
              </Link>
            </div>
            <aside className="relative flex flex-1 items-start">
              <div className="group relative z-20 w-[268px] h-fit flex flex-col gap-8 rounded-3xl px-7 py-8 bg-[#2C2927] transition-all ease-in-out hover:text-white hover:bg-dark-coral">
                <div className="flexBetween">
                  <p className="gray-subheading">Location</p>
                  <IconMapPin width={24} height={24} className="text-white" />
                </div>
                <p className="text-xl font-bold text-white">
                  Your Desired Place
                </p>
                <div className="flexBetween">
                  <div className="flex flex-col">
                    <p className="gray-subheading">Distance</p>
                    <p className="text-xl text-white">173.28 mi</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="gray-subheading">Elevation</p>
                    <p className="text-xl text-white">2.040 km</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
          <section className="2xl:max-container relative flex flex-col py-10 lg:mb-6">
            <GallerySlider />
          </section>
          <section className="w-full flexCenter flex-col py-10 lg:py-20">
            <Testimonial />
          </section>
          <section className="flexCenter flex-col py-16 overflow-hidden bg-white bg-feature bg-center bg-no-repeat">
            <Features />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default HomePage;

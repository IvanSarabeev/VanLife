import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/html/Button";
import Meter from "../assets/images/meter.png";
import Polite from "../assets/images/about.jpg";
import AboutHero from "../assets/images/about-hero.jpg";
import { ReactComponent as IconCheck } from "../assets/svgs/check.svg";
import { ReactComponent as IconMapPin } from "../assets/svgs/map-pin.svg";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <main className="w-full min-h-screen relative overflow-hidden flexCenter flex-col font-inter bg-coral">
          <section className="flexCenter flex-col lg:flex-row gap-10  py-10 xl:py-20 max-container padding-container">
            <article className="w-full lg:w-8/12 flex flex-wrap flex-col items-start justify-start max-container">
              <p className="regular-18 text-dark-coral mb-1.5 uppercase">
                We think for you
              </p>
              <h2 className="text-[40px] xl:text-[64px] heading-attr xl:max-w-[800px]">
                Don’t squeeze in a SUV, when you could relax in van
              </h2>
              <p className="max-w-[620px] regular-14 sm:regular-16 mt-2">
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. (Hitch costs extra
                😉). <br /> Our team is full of vanlife enthusiasts who know
                from firsthand the magic of touring the world on Van.
              </p>
            </article>
            <div className="relative z-20 w-full h-full lg:w-4/12">
              <img
                src={AboutHero}
                alt="about-hero"
                loading="lazy"
                decoding="async"
                className="w-fit h-fit lg:w-fit lg:h-full rounded-3xl mx-auto object-cover object-center aspect-auto"
              />
              <Button className="absolute top-2.5 right-2.5 xl:right-5 z-10 text-white p-2.5 rounded-full bg-dark-coral group-hover:border-black hover:border-gray-950 grouo-hover:border-2 hover:text-white hover:font-bold hover:bg-[#2C2927] hover transition-all ease-in-out">
                <Link to="/vans">
                  <IconMapPin />
                </Link>
              </Button>
            </div>
          </section>
          <section className="max-container flexCenter flex-col">
            <aside className="w-full max-container padding-container pb-20">
              <p className="regular-18 text-[#FF8C38] -mt-1 mb-3 uppercase">
                We are here for you
              </p>
              <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                <h3 className="text-[40px] lg:text-[64px] heading-attr xl:max-w-[640px]">
                  We Guide You throught Everything
                </h3>
                <p className=" xl:max-w-xl regular-16">
                  Only with the hilink application you will no longer get lost
                  and get lost again, because we already support offline maps
                  when there is no internet connection in the field. Invite your
                  friends, relatives and friends to have fun in the wilderness
                  through the valley and reach the top of the mountain
                </p>
              </div>
            </aside>
            <div className="w-full relative flexCenter max-container">
              <img
                src={Polite}
                alt="polite"
                loading="lazy"
                decoding="async"
                className="w-full h-fit xl:max-h-[600px] object-cover object-center aspect-auto xl:rounded-3xl"
              />
              <div className="hidden absolute md:left-[5%] lg:top-20 gap-4 md:flex py-8 pl-5 pr-7 rounded-3xl shadow-md bg-white">
                <img
                  src={Meter}
                  alt="meter"
                  width={25}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="object-contain aspect-auto"
                />
                <article className="flexBetween flex-col">
                  <div className="w-full flex flex-col">
                    <span className="w-full flexBetween">
                      <h4 className="regular-16 text-gray-500/90">
                        Destination
                      </h4>
                      <IconCheck className="w-6 h-6 text-dark-coral" />
                    </span>
                    <p className="bold-20 mt-2"> Where Next ?</p>
                  </div>
                  <div className="w-full flex flex-col">
                    <p className="regular-16 text-gray-500/90">Start</p>
                    <h4 className="bold-20 mt-2 whitespace-nowrap">
                      Your Place
                    </h4>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="flexCenter flex-col">
            {/* <div className="flexCenter flex-wrap gap-10 lg:gap-20">
              <div className="">
                <h4></h4>
                <p></p>
              </div>
              <div className="">
                <h4></h4>
                <p></p>
              </div>
              <div className="">
                <h4></h4>
                <p></p>
              </div>
            </div> */}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default AboutPage;

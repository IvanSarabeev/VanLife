import React from "react";
import { Link } from "react-router-dom";
import Layout from "components/Layouts/Layout";
import Button from "components/HTML/Button";
import Meter from "../../assets/images/meter.png";
import Polite from "../../assets/images/about.jpg";
import AboutHero from "../../assets/images/about-hero.jpg";
import { ReactComponent as IconCheck } from "../../assets/svgs/check.svg";
import { ReactComponent as IconMapPin } from "../../assets/svgs/map-pin.svg";
import { partnersLists, showcaseTrip } from "../../constants/data";
import ProviderBenefits from "./components/Benefits";
import MeetTeam from "./components/MeetTeam";
import SubscribeBanner from "components/Banner/SubscribeBanner";
import Community from "./components/Community";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <main className="w-full min-h-screen relative overflow-hidden flexCenter flex-col font-inter padding-container bg-coral">
          <section className="flexCenter flex-col lg:flex-row gap-10 py-10 xl:py-20 max-container">
            <article className="w-full lg:w-8/12 flex flex-wrap flex-col items-start justify-start max-container">
              <p className="regular-18 text-dark-coral mb-1.5 uppercase">
                We think for you
              </p>
              <h2 className="text-[40px] xl:text-[64px] heading-attr xl:max-w-[700px]">
                Don’t squeeze in SUV, when you could relax in van
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
          <section className="flexCenter flex-col lg:padding-container max-container py-8">
            {/* <h3 className="text-2xl md:text-3xl xl:text-4xl text-custom-black text-center font-bold py-4">
              Nº 1 road trip provider in Europe
            </h3> */}
            <aside className="gap-4 lg:gap-0 flex flex-wrap lg:flex-nowrap items-center justify-center my-8 bg-transparent">
              {showcaseTrip.map((item, index) => {
                const Icon = item.icon;
                return <ProviderBenefits key={index} item={item} Icon={Icon} />;
              })}
            </aside>
          </section>
          <section className="max-container flexCenter flex-col">
            <aside className="w-full pb-20">
              <p className="regular-18 text-[#FF8C38] -mt-1 mb-3 uppercase">
                We are here for you
              </p>
              <div className="flex flex-wrap items-center justify-between gap-5 lg:gap-10">
                <h3 className="text-[40px] lg:text-[64px] heading-attr xl:max-w-[640px]">
                  We Guide You throught Everything
                </h3>
                <p className="xl:max-w-xl 2xl:max-w-2xl 2xl:indent-1 first-letter:regular-18 regular-16">
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
          <section className="gap-4 md:gap-6 lg:gap-8 flex flex-col-reverse lg:flex-row items-center padding-container max-container py-8 max-w-5xl">
            <img
              src="https://images.prismic.io/indiecampers-demo/aba40e74-c8fd-4dcc-8590-76098cdd2b6d_IndieCampersSSDSC07995.jpg?auto=compress,format&rect=0,0,4980,3320&w=1200&h=800"
              alt="the-cruiser"
              decoding="async"
              loading="lazy"
              className="relative w-[490px] h-fit rounded-2xl aspect-auto object-cover object-center"
            />
            <div className="w-full relative gap-2 flex flex-col items-center justify-center mx-auto">
              <div className="relative ml-0 lg:-ml-28 -mt-16 lg:mt-0 pt-8 lg:pr-0 px-6 lg:pl-5 pb-5 text-left rounded-3xl bg-coral">
                <p className="regular-16 text-[#FF8C38] mb-1 uppercase">
                  Your trusted partner
                </p>
                <h4 className="text-[28px] lg:text-[44px] heading-attr capitalize">
                  We are here 24/7
                </h4>
              </div>
              <div className="flex gap-8">
                <ul className="gap-2 flex flex-col items-start justify-start">
                  {partnersLists.map((label, index) => {
                    return (
                      <li
                        key={index}
                        className="group gap-2 flex items-center justify-center regular-16 hover:underline underline-offset-4 hover:text-dark-coral transition-all ease-in-out duration-100 delay-100"
                      >
                        <IconCheck
                          width={24}
                          height={24}
                          className="group-hover:fill-[#FF8C38] text-black transition-all ease-in duration-100 "
                        />
                        {label.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <Link to="/vans" className="w-full remove-outline mt-2 ">
                <Button type="button" className="primary-btn">
                  Continue &rarr;
                </Button>
              </Link> */}
            </div>
          </section>
          <section className="gap-6 flex flex-col md:flex-row items-center justify-center py-10 max-container">
            <Community />
          </section>
          <section className="gap-6 flex flex-col items-center justify-center py-10 max-container padding-container">
            <MeetTeam />
          </section>
          <section className="hidden md:flex py-10 max-container">
            <SubscribeBanner />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default AboutPage;

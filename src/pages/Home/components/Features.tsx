import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/HTML/Button";
import { featuresData } from "../../../constants/data";
import ImgMockup from "../../../assets/images/design.png";

const Features = () => {
  return (
    <>
      <div className="w-full relative max-container padding-container flex justify-end">
        <div className="flex flex-1 lg:min-h-[800px]">
          <img
            src={ImgMockup}
            alt="phone"
            loading="lazy"
            className="mockup-img"
            decoding="async"
          />
        </div>
        <article className="z-20 w-full lg:w-[60%] flex flex-col">
          <h2 className="relative text-4xl lg:text-[64px] heading-attr font-bold">
            Your Experience
            <p className="absolute -top-8 left-0 regular-18 text-dark-coral uppercase">
              we care about
            </p>
          </h2>
          <ul className="gap-10 lg:gap-20 grid md:grid-cols-2 mt-10 lg:mt-20">
            {featuresData.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="w-full flex flex-1 flex-col items-start"
                >
                  <div className="group flex items-center justify-center text-white p-4 lg:p-7 rounded-full bg-dark-coral hover:bg-black transition-all ease-in-out">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 group-hover:text-dark-coral" />
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
          <Link to="about" className="remove-outline">
            <Button type="button" className="primary-btn">
              Who are we &rarr;
            </Button>
          </Link>
        </article>
      </div>
    </>
  );
};

export default Features;

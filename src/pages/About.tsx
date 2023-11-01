import React from "react";
import Layout from "../components/Layout";
import AboutBg from "../assets/images/bg-about.png";
import Button from "../components/html/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Layout>
        <img
          src={AboutBg}
          alt="about-wallpaper"
          className="w-full h-60 bg-center bg-cover object-cover aspect-auto"
        />
        <main className="w-full h-screen flex flex-col lg:flex-row items-center justify-center font-inter text-[#161616] bg-[#FFF7ED]">
          <section className="w-auto h-auto lg:max-w-3xl flex flex-col px-12 py-20 space-y-6">
            <h2 className="text-3xl font-bold leading-9 indent-2">
              Don’t squeeze in a sedan when you could relax in a van.
            </h2>
            <div className="font-inherit text-base leading-6 font-medium space-y-4 indent-1">
              <p>
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. (Hitch costs extra
                😉)
              </p>
              <p>
                Our team is full of vanlife enthusiasts who know firsthand the
                magic of touring the world on 4 wheels.
              </p>
            </div>
          </section>
          <aside className="w-auto h-52 rounded-md bg-[#FFCC8D] flex-shrink-0 font-inter mx-auto">
            <h3 className="text-2xl font-bold leading-8 py-8 px-9">
              Your destination is waiting. <br />
              Your van is ready.
            </h3>
            <Button className="text-white py-3 px-6 ml-9 rounded-xl bg-[#161616] hover:border-gray-950 hover:border-2 hover:text-[#161616] hover:bg-white hover:scale-105 transition-all ease-in-out">
              <Link to="/vans">Explore our vans</Link>
            </Button>
          </aside>
        </main>
      </Layout>
    </>
  );
};

export default About;

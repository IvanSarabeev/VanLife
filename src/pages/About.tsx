import React from "react";
import Layout from "../components/Layout";
import AboutBg from "../assets/images/vans.jpg";
import Button from "../components/HTML/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Layout>
        <main className="w-full h-screen flex flex-col-reverse lg:flex-row-reverse items-center justify-center font-inter text-custom-black bg-coral">
          <img
            src={AboutBg}
            alt="about-wallpaper"
            className="w-full h-48 lg:h-full bg-center bg-cover object-cover aspect-auto rounded-tl-3xl"
          />
          <section className="w-auto h-auto lg:max-w-4xl flex flex-col px-12 py-20 text-left space-y-6">
            <h2 className="max-w-xl text-2xl lg:text-3xl xl:text-4xl font-bold indent-1">
              Don’t squeeze in a sedan when you could relax in a van.
            </h2>
            <div className="font-normal text-sm sm:text-base md:text-lg space-y-4 indent-1">
              <p>
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. (Hitch costs extra
                😉)
              </p>
              <p>
                Our team is full of vanlife enthusiasts who know from firsthand
                the magic of touring the world on Van.
              </p>
            </div>
            <aside className="group w-auto h-52 text-center lg:text-left rounded-md py-8 px-9 flex-shrink-0 font-inter mx-auto bg-light-coral transition-all ease-in-out delay-75 hover:bg-dark-coral">
              <h3 className="text-2xl font-bold group-hover:text-white delay-75 mb-4">
                Your destination is waiting. <br />
                Your van is ready.
              </h3>
              <Button className="text-white py-3 px-6 rounded-xl bg-[#161616] group-hover:border-black hover:border-gray-950 grouo-hover:border-2 hover:text-custom-black hover:font-bold hover:bg-white hover transition-all ease-in-out">
                <Link to="/vans">Explore our vans</Link>
              </Button>
            </aside>
          </section>
        </main>
        {/* <section className="w-full h-screen">
          
        </section> */}
      </Layout>
    </>
  );
};

export default About;

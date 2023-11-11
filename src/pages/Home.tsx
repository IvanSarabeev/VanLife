import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Button from "../components/HTML/Button";

const Home = () => {
  return (
    <>
      <Layout>
        <main className="w-full h-fit md:h-screen flex items-center justify-center font-inter text-white bg-home bg-cover bg-center object-cover aspect-auto">
          <section className="w-auto md:max-w-xl h-auto lg:max-w-3xl xl:max-w-4xl flex flex-col items-center px-8 md:px-10 lg:px-12 py-20 space-y-6">
            <h1 className="font-extrabold text-3xl md:text-4xl xl:text-5xl">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="indent-1 font-medium text-base md:text-lg leading-6">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Button className="w-auto h-auto text-center py-3.5 md:py-5 lg:py-7 px-16 md:px-32 lg:px-40 font-bold text-base md:text-lg rounded bg-dark-coral transition-all hover:font-black hover:scale-105 md:hover:rounded-md lg:hover:rounded-lg">
              <Link to="/vans">Find your van</Link>
            </Button>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;

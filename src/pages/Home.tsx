import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Button from "../components/HTML/Button";

const Home = () => {
  return (
    <>
      <Layout>
        <main className="w-full h-screen flex items-center justify-center font-inter text-white bg-home bg-cover bg-center object-cover aspect-auto">
          <section className="w-auto h-auto lg:max-w-3xl flex flex-col px-12 py-20 space-y-6">
            <h1 className="font-extrabold text-4xl leading-10">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="font-medium text-base leading-6">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Button className="w-auto h-auto font-bold text-base leading-8 text-center bg-[#FF8C38] py-2.5 lg:py-5 px-16 lg:px-32 rounded hover:scale-105 transition-all">
              <Link to="/vans">Find your van</Link>
            </Button>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { VanData } from "../types/types";
import { fetchVansData } from "../services/apiService";
import VanLists from "../components/Card/VanLists";
import Navigation from "../components/Card/Navigation";

const Vans = () => {
  const [van, setVan] = useState<VanData[]>([]);

  const handleFetch = async () => {
    try {
      const data = await fetchVansData();
      setVan(data.vans);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Layout>
        <main className="bg-[#FFF7ED] px-6 pb-10">
          <h2 className="text-3xl font-bold leading-8 text-[#161616] pt-14">
            Explore our van options
          </h2>
          <Navigation />
          <section className="flex flex-wrap lg:flex-row items-center justify-around space-y-4">
            {van.map((item) => {
              return <VanLists key={item.id} item={item} />;
            })}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Vans;

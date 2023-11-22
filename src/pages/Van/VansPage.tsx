import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { VanData } from "../../types/types";
import { fetchVansData } from "../../services/apiService";
import ListedVans from "./components/ListedVans";
import Navigation from "./components/Navigation";
import { useSearchParams } from "react-router-dom";

const VansPage = () => {
  const [van, setVan] = useState<VanData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? van.filter((char) => char.type === typeFilter)
    : van;

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
        <main className="px-4 md:px-6 lg:px-8 xl:px-10 pb-10 bg-coral">
          <h2 className="text-2xl lg:text-[36px] font-bold capitalize">
            Explore Listed Vans
          </h2>
          <Navigation typeFilter={typeFilter} />
          <section className="vans-container">
            {van.length > 0 ? (
              displayedVans.map((item) => {
                return <ListedVans key={item.id} item={item} />;
              })
            ) : (
              <p>Loading data</p>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default VansPage;

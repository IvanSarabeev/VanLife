import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "components/Layouts/Layout";
import { VanData } from "types/types";
import { fetchVansData } from "services/apiService";
import ListedVans from "./components/ListedVans";
import Navigation from "./components/Navigation";
import FilterVans from "./components/FilterVans";
import { sortedItems } from "utils/sortItem";

const VansPage = () => {
  const [van, setVan] = useState<VanData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? van.filter((char) => char.type === typeFilter)
    : van;

  const handleFetch = async () => {
    try {
      const sortBy = searchParams.get("sortBy") || "newest";
      const sortOrder = searchParams.get("sortOrder") || "asc";

      const data = await fetchVansData(sortBy, sortOrder);
      const sortedData = sortedItems(data.vans, sortBy);

      if (sortOrder.toLocaleLowerCase() === "desc") {
        sortedData.reverse();
      }

      setVan(data.vans);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [searchParams]);

  return (
    <>
      <Layout>
        <main className="px-4 md:px-6 lg:px-8 xl:px-10 pb-10 bg-coral">
          <h2 className="text-2xl lg:text-[36px] font-bold capitalize">
            Featured Listings
          </h2>
          <nav className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <Navigation typeFilter={typeFilter} />
            <FilterVans handleFetch={handleFetch} />
          </nav>
          <section className="product-container selection:bg-[#1A3760] selection:text-white selection:drop-shadow-none">
            {van.length > 0 ? (
              displayedVans.map((item, index) => {
                return <ListedVans key={index} item={item} />;
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

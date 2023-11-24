import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { VanData } from "types/types";
import { sortedItems } from "utils/sortItem";
import { fetchVansData } from "services/apiService";
import Layout from "components/Layouts/Layout";
import Navigation from "./components/Navigation";
import FilterVans from "./components/FilterVans";
import GridVans from "./components/Layouts/GridVans";
import ListVans from "./components/Layouts/ListVans";

const VansPage = () => {
  const [van, setVan] = useState<VanData[]>([]);
  const [sortBy, setSortBy] = useState<string>("newest");
  const [searchParams, setSearchParams] = useSearchParams();
  const [layout, setLayout] = useState<string>("grid");

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? van.filter((char) => char.type === typeFilter)
    : van;

  const handleFetch = useCallback(async () => {
    try {
      const sortOrder = searchParams.get("sortOrder") || "asc";

      const data = await fetchVansData(sortBy, sortOrder);
      let sortedData = sortedItems(data.vans, sortBy);

      if (sortOrder.toLowerCase() === "desc") {
        sortedData = sortedData.reverse();
      }

      setVan(sortedData);
    } catch (error) {
      console.error(error);
    }
  }, [searchParams, sortBy]);

  const handleSortChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    setSortOption: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    setSortBy(selectedOption.replace(/-/g, " "));
  };

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const handleLayoutChange = (newLayout: string) => {
    setLayout(newLayout);
  };

  const vanLength = van.length;

  // const handleSortFilter = () => {
  //   const updatedSearchParams: { type?: string } = {};

  //   if (typeFilter !== null) {
  //     updatedSearchParams.type = typeFilter;
  //   }

  //   setSearchParams(updatedSearchParams);
  //   setSortBy("newest");
  //   handleToggle(!on);
  // };

  return (
    <>
      <Layout>
        <main className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pb-10 bg-coral">
          <h2 className="text-2xl lg:text-4xl font-bold capitalize">
            Featured Listings
          </h2>
          <p className="regular-14 lg:regular-16 text-center lg:text-left mt-3">
            We found <strong className="text-[#1A3760]">{vanLength}</strong>{" "}
            vans available for you
          </p>
          <nav className="flex flex-col-reverse sm:flex-row items-center justify-between mt-4 md:mt-0 md:mb-4">
            <Navigation typeFilter={typeFilter} />
            <FilterVans
              layout={layout}
              handleFetch={handleFetch}
              handleSortChange={handleSortChange}
              handleLayoutChange={handleLayoutChange}
            />
          </nav>
          <section
            className={`${
              layout === "grid" ? "product-container" : "flexProduct-container"
            } selection:bg-[#1A3760] selection:text-white selection:drop-shadow-none`}
          >
            {van.length > 0 ? (
              displayedVans.map((item, index) => {
                // return <GridVans key={index} item={item} />;
                return <ListVans key={index} item={item} />;
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

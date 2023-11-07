import React, { useEffect, useState } from "react";
import { VanData } from "../../../types/types";
import { fetchVansData } from "../../../services/apiService";
import HostList from "./Lists/HostList";

const HostVans = () => {
  const [van, setVan] = useState<VanData[]>([]);

  const handleFetch = async () => {
    try {
      const data = await fetchVansData();
      if (data) {
        setVan(data.vans);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <h3 className="text-3xl font-bold leading-8 text-custom-black">
        Your listed vans
      </h3>
      <section className="flex flex-col items-center justify-center py-6 font-inter">
        {van.length > 0 ? (
          van.map((item, index) => {
            return <HostList key={index} item={item} />;
          })
        ) : (
          <p>Loading data</p>
        )}
      </section>
    </>
  );
};

export default HostVans;

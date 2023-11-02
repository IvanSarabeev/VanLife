import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVanIdData } from "../services/apiService";
import { VanDataExtended } from "../types/types";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/html/Button";

const VanDetail = () => {
  const { id } = useParams();
  const [vanInfo, setVanInfo] = useState<VanDataExtended | null>(null);

  useEffect(() => {
    const handleVanIdFetch = async () => {
      if (id) {
        try {
          const data = await fetchVanIdData(id);
          if (data) {
            setVanInfo(data.van);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleVanIdFetch();
  }, [id]);

  return (
    <>
      <Layout>
        <main className="h-screen w-full pt-10 mb-10 font-inter bg-[#FFF7ED]">
          <Button type="button" className="ml-12 mr-auto">
            <Link
              to="/vans"
              className="text-[#201F1D] text-base font-medium leading-6 underline"
            >
              Back to all vans
            </Link>
          </Button>
          <section className="h-auto w-full flex items-center justify-center">
            {vanInfo !== null ? (
              <article className="flex flex-col lg:flex-row-reverse lg:gap-x-10 items-center justify-center space-y-4 mx-auto">
                <img
                  src={vanInfo.imageUrl}
                  alt={vanInfo.name}
                  loading="lazy"
                  className="w-96 h-auto rounded-md mx-auto shadow-xl aspect-auto object-cover"
                />
                <div className="flex flex-col flex-1 flex-shrink-0 space-y-6">
                  <span className="inline-flex items-center justify-between">
                    <h3 className="text-4xl font-bold text-[#161616] leading-8">
                      {vanInfo.name}
                    </h3>
                    <Button className={`${vanInfo.type} capitalize`}>
                      {vanInfo.type}
                    </Button>
                  </span>
                  <p className="max-w-md text-base font-medium leading-6 text-left indent-2">
                    {vanInfo.description}
                  </p>
                  <Button className="text-lg font-bold text-white leading-8 text-center py-[10px] px-36 rounded bg-[#FF8C38] hover:scale-105 transition">
                    Rent this van
                  </Button>
                </div>
              </article>
            ) : (
              <p>Loading data</p>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default VanDetail;

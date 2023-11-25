import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVanIdData } from "services/apiService";
import { VanDataExtended } from "types/types";
import Layout from "components/Layouts/Layout";
import Button from "components/HTML/Button";
import Loader from "components/Loader/Loader";
// import ProductDetail from "./Detail/ProductDetail";
import { ReactComponent as IconLeft } from "../../assets/svgs/arrow-left.svg";
import ProductShowcase from "./components/ProductShowcase";

const VanDetailPage = () => {
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
        <main className="w-full min-h-screen font-inter padding-container bg-coral">
          <Button
            type="button"
            className="flex items-center space-x-1 pb-0 lg:pb-6"
          >
            <IconLeft className="w-4 h-auto" />
            <Link
              to=".."
              relative="path"
              className="text-[#201F1D] text-base font-medium leading-6 underline"
            >
              Back to all vans
            </Link>
          </Button>
          <section className="w-full h-full flex flex-col items-center justify-center">
            {vanInfo !== null ? (
              <ProductShowcase vanInfo={vanInfo} />
            ) : (
              <>
                <Loader />
              </>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default VanDetailPage;

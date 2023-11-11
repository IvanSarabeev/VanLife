import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVanIdData } from "../../services/apiService";
import { VanDataExtended } from "../../types/types";
import Layout from "../../components/Layout";
import Button from "../../components/HTML/Button";
import ProductDetail from "./Detail/ProductDetail";
import { ReactComponent as IconSpinner } from "../../assets/svgs/spinner.svg";
import { ReactComponent as IconLeft } from "../../assets/svgs/arrow-left.svg";

const VanDetail = () => {
  const { id } = useParams();

  const [vanInfo, setVanInfo] = useState<VanDataExtended | null>(null);

  useEffect(() => {
    const handleVanIdFetch = async () => {
      if (id) {
        //check if there is any id
        try {
          const data = await fetchVanIdData(id);
          if (data) {
            //if data is not empty
            setVanInfo(data.van); //set the state to the coresponding van
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
        <main className="w-full h-auto pb-0 px-4 md:px-6 lg:px-8 xl:px-10 lg:pb-20 font-inter bg-coral">
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
          <section className="h-screen lg:h-auto w-full flex items-center justify-center">
            {vanInfo !== null ? (
              <ProductDetail vanInfo={vanInfo} />
            ) : (
              <>
                <h4 className="text-4xl text-custom-black font-bold font-inter">
                  <IconSpinner className="fill-blue-600 animate-ping" />
                  Loading data ..
                </h4>
              </>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default VanDetail;

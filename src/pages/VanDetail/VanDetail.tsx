import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVanIdData } from "../../services/apiService";
import { VanDataExtended } from "../../types/types";
import Layout from "../../components/Layout";
import Button from "../../components/HTML/Button";
import ProductDetail from "./Detail/ProductDetail";
import { ReactComponent as IconSpinner } from "../../assets/svgs/spinner.svg";

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
        <main className="min-h-screen w-full pb-20 lg:mb-0 font-inter bg-coral">
          <Button type="button" className="pb-6 ml-12 mr-auto">
            <Link
              to="/vans"
              className="text-[#201F1D] text-base font-medium leading-6 underline"
            >
              Back to all vans
            </Link>
          </Button>
          <section className="h-auto w-full flex items-center justify-center">
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

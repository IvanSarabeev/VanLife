import React, { useEffect, useState } from "react";
import { VanDataExtended } from "../../types/types";
import { useParams, Link } from "react-router-dom";
import { fetchVanIdData } from "../../services/apiService";
import Button from "../../components/HTML/Button";
import DetailContent from "./Content/DetailContent";

const HostDetails = () => {
  const { id } = useParams();

  const [vanDetail, setVanDetail] = useState<VanDataExtended | null>(null);

  useEffect(() => {
    const handleFetchId = async () => {
      if (id) {
        console.log(id);
        try {
          const data = await fetchVanIdData(id);
          console.log(data);
          if (data) {
            setVanDetail(data.van);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleFetchId();
  }, [id]);
  return (
    <>
      <Button type="button" className="pb-6">
        <Link
          to="/host/vans"
          className="text-[#201F1D] pb-6 text-base font-medium leading-6 underline"
        >
          Back to all vans
        </Link>
      </Button>
      <section className="h-auto w-auto md:w-[512px] py-6 px-7 font-inter rounded-md bg-white">
        {vanDetail !== null ? (
          <DetailContent item={vanDetail} />
        ) : (
          <p>Loading Data</p>
        )}
      </section>
    </>
  );
};

export default HostDetails;

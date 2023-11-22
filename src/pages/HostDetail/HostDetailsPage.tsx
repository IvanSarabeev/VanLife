import React, { useEffect, useState } from "react";
import { VanDataExtended } from "../../types/types";
import { useParams, NavLink, Outlet, useOutletContext } from "react-router-dom";
import { fetchVanIdData } from "../../services/apiService";
import { ReactComponent as IconLeft } from "../../assets/svgs/arrow-left.svg";
import Button from "../../components/HTML/Button";
import DetailContent from "./DetailContent";
import OutletNav from "./OutletNav/OutletNav";

type ContextType = { vanDetail: VanDataExtended | null };

const HostDetailsPage = () => {
  const { id } = useParams();

  const [vanDetail, setVanDetail] = useState<VanDataExtended | null>(null);

  useEffect(() => {
    const handleFetchId = async () => {
      if (id) {
        try {
          const data = await fetchVanIdData(id);
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
      <Button type="button" className="flex space-x-1 items-center pb-6">
        <IconLeft className="w-4 h-auto" />
        <NavLink
          to=".."
          relative="path"
          type="button"
          className="text-[#201F1D] text-sm md:text-base font-medium hover:underline underline-offset-4"
        >
          Back to all vans
        </NavLink>
      </Button>
      <section className="h-auto w-auto md:max-w-lg lg:max-w-2xl py-6 px-7 mb-6 font-inter rounded-xl mx-auto shadow-xl bg-white">
        {vanDetail !== null ? (
          <DetailContent item={vanDetail} />
        ) : (
          <p>Loading Data</p>
        )}
        <nav className="flex items-center text-base lg:text-lg justify-start space-x-1 lg:space-x-2 py-6">
          <OutletNav />
        </nav>
        <Outlet context={{ vanDetail }} />
      </section>
    </>
  );
};

export default HostDetailsPage;

export function useVanContext() {
  return useOutletContext<ContextType>();
}

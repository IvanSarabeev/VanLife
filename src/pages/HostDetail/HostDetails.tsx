import React, { useEffect, useState } from "react";
import { VanDataExtended } from "../../types/types";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchVanIdData } from "../../services/apiService";
import { ReactComponent as IconLeft } from "../../assets/svgs/arrow-left.svg";
import Button from "../../components/HTML/Button";
import DetailContent from "./DetailContent";

const navLinks = [
  { to: ".", title: "Details" },
  { to: "price", title: "Price" },
  { to: "photos", title: "Photos" },
];

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
      <Button type="button" className="flex space-x-1 items-center pb-6">
        <IconLeft className="w-4 h-auto" />
        <NavLink
          to=".."
          relative="path"
          className="text-[#201F1D] text-base font-medium leading-6 underline"
        >
          Back to all vans
        </NavLink>
      </Button>
      <section className="h-auto w-auto md:w-[512px] py-6 px-7 font-inter rounded-md bg-white">
        {vanDetail !== null ? (
          <DetailContent item={vanDetail} />
        ) : (
          <p>Loading Data</p>
        )}
        <nav className="flex items-center justify-start space-x-2">
          {navLinks.map((link, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav" : "passive-nav"
                }
                key={index}
                to={link.to}
              >
                {link.title}
              </NavLink>
            );
          })}
        </nav>
        <Outlet />
      </section>
    </>
  );
};

export default HostDetails;

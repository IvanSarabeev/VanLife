import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const hostNavigation = [
  { title: "Dashboard", to: "" },
  { title: "Income", to: "income" },
  { title: "Vans", to: "/vans" },
  { title: "Reviews", to: "reviews" },
];

const HostLayout = () => {
  const localPath = useLocation();

  return (
    <>
      <Header />
      <aside className="px-5 pt-8 pb-11 bg-[#FFF7ED]">
        <nav className="font-inter text-lg text-[#4D4D4D] leading-6 font-medium">
          {hostNavigation.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                className={`${
                  localPath.pathname === item.to
                    ? "underline text-[#161616] font-bold hover:text-[#e2b479]"
                    : ""
                } pr-7 hover:text-[#161616] hover:underline hover:font-bold transition-all`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>
      <Outlet />
      <Footer />
    </>
  );
};

export default HostLayout;

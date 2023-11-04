import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const hostNavigation = [
  { title: "Dashboard", to: "host" },
  { title: "Income", to: "income" },
  { title: "Vans", to: "vans" },
  { title: "Reviews", to: "reviews" },
];

const HostLayout = () => {
  return (
    <>
      <Header />
      <aside className="px-5 pt-8 pb-11 bg-coral">
        <nav className="font-inter text-lg text-[#4D4D4D] leading-6 font-medium">
          {hostNavigation.map((item, index) => {
            return (
              <NavLink
                end
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-custom-black font-bold hover:text-[#e2b479] text-lg underline pr-7"
                    : " pr-7 text-lg hover:underline hover:font-bold transition-all"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <main className="min-h-screen w-full px-5 font-inter bg-coral">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HostLayout;

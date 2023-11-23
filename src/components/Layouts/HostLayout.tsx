import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { navLinks } from "constants/data";

const HostLayout = () => {
  return (
    <>
      <Header />
      <aside className="px-4 md:px-6 lg:px-8 xl:px-10 pt-8 pb-2 md:pb-4 lg:pb-8 xl:pb-8 bg-coral">
        <nav className="flex flex-wrap items-center font-inter text-[#4D4D4D] text-sm sm:text-base xl:text-lg">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "active-nav" : "passive-nav"
            }
          >
            Dashboard
          </NavLink>
          {navLinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "active-nav" : "passive-nav"
                }
              >
                {link.title}
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <main className="h-fit w-full px-4 md:px-6 lg:px-8 xl:px-10 pt-5 pb-4 md:pb-6 lg:pb-8 font-inter bg-coral shadow-md">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HostLayout;

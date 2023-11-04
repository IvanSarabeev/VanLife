import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const navLinks = [
  { to: "income", title: "Income" },
  { to: "vans", title: "Vans" },
  { to: "reviews", title: "Reviews" },
];

const HostLayout = () => {
  return (
    <>
      <Header />
      <aside className="px-5 pt-8 pb-11 bg-coral">
        <nav className="font-inter text-lg text-[#4D4D4D] leading-6 font-medium">
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
      <main className="h-fit w-full px-5 pt-5 pb-10 font-inter bg-coral">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HostLayout;

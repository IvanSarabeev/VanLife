import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "price", title: "Price" },
  { to: "photos", title: "Photos" },
];

const OutletNav = () => {
  return (
    <>
      <NavLink
        end
        to="."
        className={({ isActive }) => (isActive ? "active-nav" : "passive-nav")}
      >
        Details
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
    </>
  );
};

export default OutletNav;

import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "About", to: "/about" },
  { title: "Vans", to: "/vans" },
  { title: "Host", to: "/host" },
];

const Header = () => {
  return (
    <header className="h-[110px] w-full py-3 px-5 flex items-center justify-between font-inter bg-coral">
      <h2 className="text-2xl leading-10 font-black text-[#252525] uppercase">
        <NavLink to="/">#vanlife</NavLink>
      </h2>
      <ul className="flex items-center space-x-4">
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "active-link " : "nav-links"
                }
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;

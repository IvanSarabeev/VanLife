import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconLogin } from "../../assets/svgs/user-circle.svg";

const navLinks = [
  { title: "About", to: "/about" },
  { title: "Vans", to: "/vans" },
  { title: "Host", to: "/host" },
];

const Header = () => {
  return (
    <header className="h-[110px] w-full py-3 px-4 md:px-6 lg:px-8 xl:px-10 flex items-center justify-between font-inter bg-coral">
      <h2 className="text-2xl lg:text-[28px] lg:leading-10 font-black text-[#252525] uppercase">
        <NavLink to="/">#vanlife</NavLink>
      </h2>
      <ul className="flex items-center space-x-4 text-sm sm:text-base lg:text-lg">
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
        <li>
          <NavLink to="/login">
            <IconLogin className="w-5 md:w-6 h-5 md:h-6 hover:text-[#e17654]" />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

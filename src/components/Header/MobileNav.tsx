import React from "react";
import { headerLinks } from "constants/data";
import { scrollToTop } from "utils/scrollToTop";
import { NavLink, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  return (
    <>
      <ul className="md:hidden min-h-screen gap-y-8 flex flex-col items-center justify-center w-full bg-coral transition-all ease-in-out ">
        {headerLinks.map((link, index) => {
          return (
            <li key={index} className="text-4xl font-bold">
              <NavLink
                to={link.to}
                onClick={scrollToTop}
                className={`${
                  location.pathname === link.to
                    ? "text-dark-coral font-bold"
                    : "font-medium"
                }whitespace-nowrap hover:text-dark-coral hover:underline`}
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MobileNav;

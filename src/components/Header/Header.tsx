import React from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { title: "About", to: "/about" },
  { title: "Vans", to: "/vans" },
  { title: "Host", to: "/host" },
];

const Header = () => {
  const localPath = useLocation();

  return (
    <header className="h-[110px] w-full py-3 px-5 flex items-center justify-between font-inter bg-[#FFF7ED]">
      <h2 className="text-2xl leading-10 font-black text-[#252525] uppercase">
        <Link to="/">#vanlife</Link>
      </h2>
      <ul className="flex items-center space-x-4">
        {navigation.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.to}
                className={`${
                  localPath.pathname === link.to
                    ? "underline text-[#161616]"
                    : ""
                } text-base font-semibold text-[#4D4D4D] leading-4 hover:underline`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;

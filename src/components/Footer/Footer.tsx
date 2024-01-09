import React from "react";
import Logo from "../../assets/images/title-icon.png";
import { headerLinks } from "constants/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
                <img src={Logo} className="h-8 w-8" alt="VanLife Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">VanLife</span>
            </div>
            <ul className="flex items-center gap-4 ">
                {headerLinks.map((link, index) => {
                    return (
                        <Link key={index} to={link.to}>
                            {link.title}
                        </Link>
                    )
                })}
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center mx-auto">
                    © 2023 <a href="/" className="hover:underline">VanLife™</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

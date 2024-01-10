import React from "react";
import Logo from "../../assets/images/title-icon.png";
import { Link } from "react-router-dom";
import { headerLinks, socialLinks } from "constants/data";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex items-center md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="h-8 me-3" alt="VanLife Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VanLife</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                        <ul className="grid grid-cols-2 text-gray-500 font-medium">
                            {headerLinks.slice(0,4).map((item, index) => {
                                return(
                                    <li key={index} className="mb-4 ">
                                        <Link to={item.to} className="hover:underline">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                            <a href="/#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:flex-row-reverse sm:items-center sm:justify-between">
            <ul className="gap-4 flex items-center mb-4 sm:justify-center sm:mt-0">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <li key={index}>
                            <Link to={link.href} className="text-gray-500 hover:text-white">
                                <Icon />
                                <span className="sr-only">{link.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <span className="text-sm text-gray-500 sm:text-center">
                © 2023 <Link to="/" className="hover:underline">VanLife™</Link>. All Rights Reserved.
            </span>
        </div>
    </div>
</footer>


  );
};

export default Footer;

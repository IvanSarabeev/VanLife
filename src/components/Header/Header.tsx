import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useToggle } from "hooks/useToggle";
import { headerLinks } from "constants/data";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ReactComponent as IconHamburger } from "../../assets/svgs/hamburger.svg";
import { ReactComponent as IconXMark } from "../../assets/svgs/x-mark.svg";
import Button from "components/HTML/Button";
import MobileNav from "./MobileNav";
import { scrollToTop } from "utils/scrollToTop";

const Header = () => {
  const [show, handleToggle] = useToggle();
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{ visibility: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "block" : "visible"}
      onClick={scrollToTop}
      transition={{ duration: 0.35, ease: "easeInOut", type: "spring" }}
      className="sticky z-30 top-0 h-fit lg:h-[110px] w-full font-inter padding-container bg-coral lg:bg-opacity-70 transition-all"
    >
      <nav className="md:flex flex-row items-center justify-between py-4 md:py-6 lg:py-8">
        <h2 className="text-2xl lg:text-[28px] lg:leading-10 font-black text-[#252525] uppercase">
          <NavLink to="/">#vanlife</NavLink>
        </h2>
        <Button
          type="button"
          onClick={() => handleToggle()}
          className="flex md:hidden absolute top-3.5 right-5 p-1 rounded bg-light-coral transition-all ease-in-out"
        >
          {show ? <IconXMark /> : <IconHamburger />}
        </Button>
        <nav className="hidden w-full md:flex items-end justify-end regular-14 sm:regular-16 lg:regular-18">
          <ul className="flex items-center space-x-4">
            {headerLinks.map((link, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    ease: "easeInOut",
                  }}
                  key={index}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? "active-link " : "nav-links"
                    }
                  >
                    {link.title}
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </nav>
      <AnimatePresence mode="wait">
        {show ? <MobileNav /> : hidden}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

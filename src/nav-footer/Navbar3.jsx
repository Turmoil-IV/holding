"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import x14logo from "../assets/x14logo.png";
import x14logowhite from "../assets/x14logowhite.png";

import NavigationButton from "./NavigationButton";


const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const getMobileOverlayClassNames = clsx(
    "fixed inset-0 z-40 bg-black lg:hidden",
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen,
    },
  );
  const NavbarWrapper = isMobile ? motion.div : "div";
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    getMobileOverlayClassNames,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    NavbarWrapper,
  };
};

export function Navbar3() {
  const useActive = useRelume();

  const [isScrolled, setIsScrolled] = useState(false);

  const classNavBtnDark = "hover:underline py-2 px-2 font-normal text-deepSapphire-lightest ";
  const classNavBtnLight = "hover:underline py-2 px-2 font-normal text-deepSapphire-darker";

  const classNavBarDark = " sticky top-0 z-50 z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between px-[5%] md:min-h-18 bg-neutral-darker py-5"
  const classNavBarLight =" sticky top-0 z-50 z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between px-[5%] md:min-h-18 bg-transparent py-5"


  useEffect(() => {
    // Define a scroll handler
    const handleScroll = () => {
      // Set scrolled state if scrollY is greater than your chosen threshold
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="relume"
      className={`${isScrolled ? classNavBarDark : classNavBarLight} transition-all duration-1000 ease-in-out`}
      >
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={useActive.toggleMobileMenu}
      >
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
      </button>
      <AnimatePresence>
        <useActive.NavbarWrapper
          initial="closed"
          animate={useActive.animateMobileMenu}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute top-0 left-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary  px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <a href="#" className="mt-10 mb-8 flex flex-shrink-0 lg:hidden">
            <img
              src={isScrolled?x14logo:x14logowhite}
              alt="Logo image"
              className="w-16 md:w-20 lg:w-24"

            />
          </a>
          <div className="mt-6 lg:hidden">
            <Button title="Menu" size="sm" className="w-full">
              Menu
            </Button>
          </div>
          {/* Menu Items */}
      <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4 justify-center">
      <NavigationButton
              className={isScrolled ?  classNavBtnDark:classNavBtnLight}
        to="/"
        title="Home"
        variant="link"
        size="link"
      >
        Home
      </NavigationButton>
      {/* <NavigationButton
        to="/about"
        title="About Us"
        variant="link"
        size="link"
        className={isScrolled ?  classNavBtnDark:classNavBtnLight}
        >
        About Us
      </NavigationButton>
      <NavigationButton
        to="/portfolio"
        title="Our Portfolio"
        variant="link"
        size="link"
        className={isScrolled ?  classNavBtnDark:classNavBtnLight}
        >
        Our Portfolio
      </NavigationButton>
      <NavigationButton
        to="/partnerships"
        title="partnerships"
        variant="link"
        size="link"
        className={isScrolled ?  classNavBtnDark:classNavBtnLight}
        >
        Partnerships
      </NavigationButton> */}

    </nav>
        </useActive.NavbarWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
          className={useActive.getMobileOverlayClassNames}
          onClick={useActive.toggleMobileMenu}
        />
      </AnimatePresence>
      <a href="#" className="flex min-h-16 flex-shrink-0 items-center" >
        <img
              src={isScrolled?x14logowhite:x14logo}
              alt="Logo image"
              className="w-16 md:w-20 lg:w-24"

        />
      </a>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          {/* <Button title="Join" size="sm" className="border-none px-4 py-1 md:px-6 md:py-2 rounded-lg">
            Join
          </Button> */}
        </div>
      </div>
    </section>
  );
}

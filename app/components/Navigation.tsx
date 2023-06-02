"use client";

import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

interface Navigationprops {}

const Navigation: React.FC<Navigationprops> = () => {
  const [isNavbarDark, setIsNavbarDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        navbarRef.current?.getBoundingClientRect().height || 0;
      setIsNavbarDark(window.scrollY > navbarHeight);
    };

    const navbarRef = React.createRef<HTMLElement>();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        ref={navbarRef}
        className={`bg-white fixed w-full flex justify-center md:justify-end items-center py-2 px-4 transition-all duration-[animation-duration] z-10 ${
          isNavbarDark ? "md:bg-white md:bg-opacity-80" : "md:bg-transparent"
        }`}
      >
        <div className="h-10"></div>
        <button
          className={`block md:hidden absolute top-4 right-4 text-black`}
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`mt-10 md:mt-0 flex-col md:flex-row flex justify-end text-lg font-bold ${
            isNavbarDark ? "md:text-black" : " md:text-white "
          } ${isMobileMenuOpen ? "flex" : "hidden md:flex"}`}
        >
          <li className="mr-5 cursor-pointer">
            <ScrollLink to={""} onClick={handleHomeClick}>
              Home
            </ScrollLink>
          </li>
          <li className="mr-5 cursor-pointer">
            <ScrollLink
              to={"about-me"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              onClick={handleMobileMenuItemClick}
            >
              About Me
            </ScrollLink>
          </li>
          <li className="mr-5 cursor-pointer">
            <ScrollLink
              to={"skills"}
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleMobileMenuItemClick}
            >
              Skills
            </ScrollLink>
          </li>
          <li className="mr-5 cursor-pointer">
            <ScrollLink
              to={"projects"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              onClick={handleMobileMenuItemClick}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="mr-5 cursor-pointer">
            <ScrollLink
              to={"career"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              onClick={handleMobileMenuItemClick}
            >
              Career
            </ScrollLink>
          </li>
          <li className="mr-5 cursor-pointer">
            <ScrollLink
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              onClick={handleMobileMenuItemClick}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

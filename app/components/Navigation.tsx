"use client";

import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Language from "./Language";

interface Navigationprops {}

const NavItem: React.FC<{
  menu: string;
  to: string;
  onClick: () => void;
}> = ({ menu, to, onClick }) => {
  return (
    <li className="mr-5 italic cursor-pointer hover:text-yellow">
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
        onClick={onClick}
      >
        {menu}
      </ScrollLink>
    </li>
  );
};

const Navigation: React.FC<Navigationprops> = ({}) => {
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
        className={`bg-white fixed w-full flex justify-between md:justify-between items-center py-2 px-10 transition-all duration-[animation-duration] z-10 ${
          isNavbarDark ? "md:bg-white md:bg-opacity-80" : "md:bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-center h-10 w-12  ${
            isNavbarDark ? "md:text-black" : "md:text-white"
          }`}
        >
          <Language />
        </div>
        <button
          className={`block md:hidden absolute top-4 right-4 text-black`}
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`mt-10 md:mt-0 flex-col md:flex-row flex justify-end text-lg font-bold ${
            isNavbarDark ? "md:text-black" : " md:text-white "
          } ${isMobileMenuOpen ? "flex w-full text-center" : "hidden md:flex"}`}
        >
          <NavItem menu="home" to="" onClick={handleHomeClick} />
          <NavItem
            menu="about me"
            to="about-me"
            onClick={handleMobileMenuItemClick}
          />
          <NavItem
            menu="skills"
            to="skills"
            onClick={handleMobileMenuItemClick}
          />
          <NavItem
            menu="projects"
            to="projects"
            onClick={handleMobileMenuItemClick}
          />
          <NavItem
            menu="career"
            to="career"
            onClick={handleMobileMenuItemClick}
          />
          <NavItem
            menu="contact"
            to="contact"
            onClick={handleMobileMenuItemClick}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

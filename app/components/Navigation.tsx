"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navigation = (): JSX.Element => {
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
          className={`mt-10 md:mt-0 flex-col md:flex-row flex justify-end text-lg font-bold md:text-white  ${
            isNavbarDark ? "md:text-black" : "text-black"
          } ${isMobileMenuOpen ? "flex" : "hidden md:flex"}`}
        >
          <li className="mr-5">
            <Link href="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#about-me" onClick={handleMobileMenuItemClick}>
              About Me
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#skills" onClick={handleMobileMenuItemClick}>
              Skills
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#projects" onClick={handleMobileMenuItemClick}>
              Projects
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#career" onClick={handleMobileMenuItemClick}>
              Career
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#contact" onClick={handleMobileMenuItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

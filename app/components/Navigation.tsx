"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navigation = (): JSX.Element => {
  const [isNavbarDark, setIsNavbarDark] = useState(false);
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

  const handleHomeClick = () => {
    console.log("?");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed w-full flex justify-end items-center py-2 px-4 transition-all duration-[animation-duration] z-10 ${
        isNavbarDark && "bg-white bg-opacity-80"
      }`}
    >
      <nav>
        <ul
          className={`flex justify-end text-lg font-bold  ${
            isNavbarDark ? "text-black" : "text-white"
          }`}
        >
          <li className="mr-5">
            <Link href="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#about-me">About Me</Link>
          </li>
          <li className="mr-5">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="mr-5">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="mr-5">
            <Link href="#career">Career</Link>
          </li>
          <li className="mr-5">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

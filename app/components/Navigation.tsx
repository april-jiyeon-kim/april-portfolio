"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navigation = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul className="flex justify-end text-lg font-bold text-white">
          <li className="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link href="#greetings">Greetings</Link>
          </li>
          <li className="mr-4">
            <Link href="#about-me">About Me</Link>
          </li>
          <li className="mr-4">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="mr-4">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="mr-4">
            <Link href="#career">Career</Link>
          </li>
          <li className="mr-4">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

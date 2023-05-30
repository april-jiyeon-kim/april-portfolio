"use client";

import React, { useEffect } from "react";
import Navigation from "./Navigation";

const Greetings = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section
      className="px-20 pt-5"
      style={{
        backgroundImage: "url('/images/home_background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navigation />
      <div className="flex justify-center px-48 align-middle py-14 ">
        <div className="flex flex-row ">
          <h1 className="text-4xl font-bold text-white">Jiyeon Kim</h1>
          <div className="ml-64 ">
            <h1 className="text-4xl font-bold text-white">
              Web <br /> Development <br /> Portfolio
            </h1>
            <p className="mt-10 text-xl font-bold text-white">
              Hello!
              <br />
              A Developer currently
              <br /> residing in Seoul, Korea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greetings;

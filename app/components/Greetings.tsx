"use client";

import React, { useEffect } from "react";

const Greetings = (): JSX.Element => {
  return (
    <section
      id="greetings"
      className="relative pt-5"
      style={{
        backgroundImage: "url('/images/home_background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="justify-center px-4 align-middle md:flex md:px-48 py-14">
        <div className="flex flex-col items-center justify-between w-full max-w-5xl md:flex-row md:items-baseline">
          <div className="text-3xl font-extrabold text-white md:text-4xl font-karla">
            Jiyeon Kim
          </div>
          <div className="mt-4 md:mt-0 md:ml-64">
            <h1 className="text-4xl text-white font-archivoblack">
              Web <br /> Developer <br /> Portfolio
            </h1>
            <p className="mt-10 text-xl font-bold text-white">
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

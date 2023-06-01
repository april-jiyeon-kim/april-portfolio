"use client";

import React, { useEffect } from "react";

const Greetings = (): JSX.Element => {
  useEffect(() => {}, []);

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
      <div className="flex justify-center px-48 align-middle py-14">
        <div className="flex flex-row ">
          <h1 className="text-6xl font-extrabold text-white font-karla">
            Jiyeon Kim
          </h1>
          <div className="ml-64 ">
            <h1 className="text-4xl text-white font-archivoblack">
              Web <br /> Development <br /> Portfolio
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

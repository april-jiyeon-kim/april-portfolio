"use client";

import React, { useEffect } from "react";
import Education from "./Education";

const AboutMe: React.FC<{ introduction: string }> = ({ introduction }) => {
  useEffect(() => {}, []);

  return (
    <section id="about-me">
      <div className="flex justify-center py-16 m-8 md:py-24 md:px-28">
        <div className="flex flex-col justify-center m-auto align-middle ">
          <h1 className="mb-6 text-4xl font-bold text-purple font-archivoblack">
            About me
          </h1>
          <h2 className="font-medium whitespace-pre-wrap md:text-xl text-orange">
            {introduction}
          </h2>
          <Education />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

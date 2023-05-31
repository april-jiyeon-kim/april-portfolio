"use client";

import React, { useEffect } from "react";
import CareerCard from "./CareerCard";

const Career = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section id="career">
      <div className="flex flex-col items-center mt-24 mx-28 mb-52 ">
        <div className="flex flex-col justify-center mb-6 text-4xl font-bold text-black">
          CAREER
        </div>
        <div>
          <CareerCard
            title="VOITHRU"
            logo={"/images/voithru_logo.png"}
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            mauris ac risus malesuada maximus. Mauris eget nulla tristique, feugiat
            tellus et, volutpat mi. Nulla pharetra varius erat, in eleifend nulla
            pellentesque nec. Sed ut metus sit amet felis luctus congue. Quisque eu
            sem nec enim consectetur ultrices."
            duration="2019.07~2021.07"
          />
          <CareerCard
            title="VOITHRU"
            logo={"/images/dohe_logo.png"}
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            mauris ac risus malesuada maximus. Mauris eget nulla tristique, feugiat
            tellus et, volutpat mi. Nulla pharetra varius erat, in eleifend nulla
            pellentesque nec. Sed ut metus sit amet felis luctus congue. Quisque eu
            sem nec enim consectetur ultrices."
            duration="2019.07~2021.07"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;

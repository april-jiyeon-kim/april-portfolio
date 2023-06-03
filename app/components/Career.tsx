"use client";

import React, { useEffect } from "react";
import CareerCard from "./CareerCard";
interface Career {
  dohe: string;
  voithru: string;
}

const Career: React.FC<{ career: Career }> = ({ career }) => {
  useEffect(() => {}, []);

  return (
    <section id="career">
      <div className="flex flex-col items-center pt-16 mb-8 md:pt-24 md:px-28 md:mb-52 ">
        <div className="flex flex-col justify-center mb-6 text-4xl font-bold text-black font-archivoblack">
          CAREER
        </div>
        <div>
          <CareerCard
            title="VOITHRU"
            logo={"/images/voithru_logo.png"}
            description={career.voithru}
            duration="2022.01~2023.02"
          />
          <CareerCard
            title="DOHE"
            logo={"/images/dohe_logo.png"}
            description={career.dohe}
            duration="2019.10~2021.09"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;

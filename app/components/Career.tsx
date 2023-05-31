"use client";

import React, { useEffect } from "react";
import CareerCard from "./CareerCard";

const Career = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section id="career">
      <div className="flex flex-col items-center pt-24 px-28 mb-52 ">
        <div className="flex flex-col justify-center mb-6 text-4xl font-bold text-black">
          CAREER
        </div>
        <div>
          <CareerCard
            title="VOITHRU"
            logo={"/images/voithru_logo.png"}
            description="Voithru is an AI-based crowdsourcing subtitle platform. I was responsible for developing and maintaining new features of the administrator tool for managing translators. I actively communicated with backend developers, as well as the product and design teams, to minimize miscommunication. The development was done using React (Next.js) and TypeScript, and I collaborated with the development team through daily code reviews."
            duration="2022.01~2023.02"
          />
          <CareerCard
            title="DOHE"
            logo={"/images/dohe_logo.png"}
            description=" Dohe is a startup accelerator. As a full-stack web developer, I developed a groupware for internal employees. I worked on developing new features and maintaining existing functionalities using PHP and Vue.js. I also conducted deployments using Jenkins."
            duration="2019.10~2021.09"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;

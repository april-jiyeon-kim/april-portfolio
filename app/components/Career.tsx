"use client";

import React, { useEffect } from "react";
import CareerCard from "./CareerCard";
interface Career {
  dohe: string;
  voithru: string;
  outsourcing: string;
  freelancer: string;
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
            techImgs={[
              {
                src: "/images/techImgs/react-icon.png",
                alt: "react-icon",
                width: 36,
              },
              { src: "/images/techImgs/nextjs-icon.png", alt: "nextjs-icon" },
              {
                src: "/images/techImgs/typescript-icon.png",
                alt: "typescript-icon",
              },
              {
                src: "/images/techImgs/graphql-icon.png",
                alt: "graphql-icon",
              },
            ]}
          />
          <CareerCard
            title="DOHE"
            logo={"/images/dohe_logo.png"}
            description={career.dohe}
            duration="2019.10~2021.09"
            techImgs={[
              {
                src: "/images/techImgs/php-icon.png",
                alt: "php-icon",
                width: 60,
              },
              {
                src: "/images/techImgs/vue-icon.png",
                alt: "vue-icon",
                width: 38,
              },
              {
                src: "/images/techImgs/bootstrap-icon.png",
                alt: "bootstrap-icon",
                width: 43,
              },
              {
                src: "/images/techImgs/jenkins-icon.png",
                alt: "jenkins-icon",
              },
            ]}
          />
          <CareerCard
            title="FREELANCER"
            description={career.freelancer}
            duration="2022.07~2023.10"
            techImgs={[
              {
                src: "/images/techImgs/react-icon.png",
                alt: "react-icon",
                width: 36,
              },
            ]}
          />
          <CareerCard
            title="OUTSOURCING"
            description={career.outsourcing}
            duration="2022.10~2023.12"
            techImgs={[
              {
                src: "/images/techImgs/react-icon.png",
                alt: "react-icon",
                width: 36,
              },
              { src: "/images/techImgs/nextjs-icon.png", alt: "nextjs-icon" },
              {
                src: "/images/techImgs/vue-icon.png",
                alt: "vue-icon",
                width: 38,
              },
              {
                src: "/images/techImgs/tailwind-icon.png",
                alt: "tailwind-icon",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Career;

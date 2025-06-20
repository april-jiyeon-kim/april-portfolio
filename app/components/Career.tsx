"use client";

import React from "react";
import CareerCard from "./CareerCard";
import { useTranslation, Trans } from "next-i18next";

const Career: React.FC<{}> = ({}) => {
  const { t } = useTranslation();
  return (
    <section id="career">
      <div className="flex flex-col items-center pt-16 mb-8 md:pt-24 md:px-28 md:mb-52 ">
        <div className="flex flex-col justify-center mb-6 text-4xl font-bold text-black font-archivoblack">
          CAREER
        </div>
        <div>
          <CareerCard
            title="CRYSBE"
            logo={"/images/crysbe_logo.png"}
            description={
              <Trans
                i18nKey="career.crysbe"
                components={{
                  ul: <ul className="list-disc pl-5 space-y-1 text-gray-800" />,
                  li: <li />,
                }}
              />
            }
            duration="2023.08~2025.04"
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
            ]}
          />
          <CareerCard
            title="VOITHRU"
            logo={"/images/voithru_logo.png"}
            description={t("career.voithru")}
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
            description={t("career.dohe")}
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
            description={t("career.freelancer")}
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
            description={t("career.outsourcing")}
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
              {
                src: "/images/techImgs/vercel-icon.png",
                alt: "vercel-icon",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Career;

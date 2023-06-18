"use client";

import React, { useEffect } from "react";
import Education from "./Education";
import { useTranslation } from "next-i18next";

const AboutMe: React.FC<{}> = ({}) => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about-me">
      <div className="flex justify-center py-16 m-8 md:py-24 md:px-28">
        <div className="flex flex-col justify-center m-auto align-middle ">
          <h1 className="mb-6 text-4xl font-bold text-purple font-archivoblack">
            About me
          </h1>
          <h2
            className={`${
              i18n.language === "ko"
                ? "font-notosans font-semibold leading-8 md:text-[18px]"
                : "font-medium md:text-xl"
            } whitespace-pre-wrap  text-orange lg:min-w-[970px] `}
          >
            {t("aboutMe")}
          </h2>
          <Education />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

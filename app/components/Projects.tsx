"use client";

import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "next-i18next";

const Projects: React.FC<{}> = ({}) => {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center px-4 py-16 md:px-6 md:py-16 bg-green ">
        <h1 className="mb-6 text-4xl font-bold text-white font-archivoblack">
          PROJECTS
        </h1>
        <div className="flex flex-col gap-y-4">
          <ProjectCard
            title="Reading Habit"
            description={t("projects.readingHabit.description")}
            mainInformation={t("projects.readingHabit.mainInformation")}
            github="https://github.com/april-jiyeon-kim/reading-habit"
            frontend="React Native"
            backend="Firebase"
            database="Firebase Firestore"
            design="Figma"
            previewImgs={[
              {
                src: "/images/projects/tmp_readinghabbit.png",
                alt: "tmp_readinghabbit",
                width: 600,
                height: 400,
              },
            ]}
          />
          <ProjectCard
            title="Portfolio Site"
            description={t("projects.portfolioSite.description")}
            mainInformation={t("projects.portfolioSite.mainInformation")}
            github="https://github.com/april-jiyeon-kim/april-portfolio"
            frontend="Nextjs"
            deployment="Vercel"
            url="https://www.kjy-portfolio.com/"
            design="Figma"
            previewImgs={[
              {
                src: "/images/projects/portfolio.png",
                alt: "portfolio",
                width: 700,
                height: 400,
              },
            ]}
          />
          <ProjectCard
            title="Wedding Card"
            description={t("projects.weddingCard.description")}
            mainInformation={t("projects.weddingCard.mainInformation")}
            github="https://github.com/april-jiyeon-kim/wedding-card-v2"
            frontend="React"
            deployment="Heroku"
            previewImgs={[
              {
                src: "/images/projects/wedding-card.jpg",
                alt: "wedding-card",
                width: 250,
                height: 400,
              },
            ]}
          />
          <ProjectCard
            title="Portfolio Site"
            description={t("projects.previousPortfolioSite.description")}
            mainInformation={t(
              "projects.previousPortfolioSite.mainInformation"
            )}
            url="https://april-jiyeon-kim.github.io/portfolio/"
            github="https://github.com/april-jiyeon-kim/portfolio"
            frontend="Vanilla JS"
            deployment="GitHub"
            previewImgs={[
              {
                src: "/images/projects/portfolio-previous.png",
                alt: "portfolio",
                width: 650,
                height: 400,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

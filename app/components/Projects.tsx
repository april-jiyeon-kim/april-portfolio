"use client";

import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  description: string;
  mainInformation: string;
}
interface Projects {
  readingHabbit: Project;
  portfolioSite: Project;
  weddingCard: Project;
  previousPortfolioSite: Project;
}

const Projects: React.FC<{ projects: Projects }> = ({ projects }) => {
  useEffect(() => {}, []);

  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center px-4 py-16 md:px-6 md:py-16 bg-green ">
        <h1 className="mb-6 text-4xl font-bold text-white font-archivoblack">
          PROJECTS
        </h1>
        <div className="flex flex-col gap-y-4">
          <ProjectCard
            title="Reading Habit"
            description={projects.readingHabbit.description}
            mainInformation={projects.readingHabbit.mainInformation}
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
            description={projects.portfolioSite.description}
            mainInformation={projects.portfolioSite.mainInformation}
            github="https://github.com/april-jiyeon-kim/april-portfolio"
            frontend="Nextjs"
            deployment="Vercel"
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
            description={projects.weddingCard.description}
            mainInformation={projects.weddingCard.mainInformation}
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
            description={projects.previousPortfolioSite.description}
            mainInformation={projects.previousPortfolioSite.mainInformation}
            github="https://april-jiyeon-kim.github.io/portfolio/"
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

"use client";

import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center px-4 py-16 md:px-6 md:py-16 bg-green ">
        <h1 className="mb-6 text-4xl font-bold text-white font-archivoblack">
          PROJECTS
        </h1>
        <div>
          <ProjectCard
            title="Reading Habit"
            description="I recently developed ReadingHabit, a mobile app designed to help users cultivate a daily reading habit. The app provides a simple and intuitive interface to track reading progress, set goals, and get personalized recommendations based on reading history and preferences. It was a valuable experience for me to have the opportunity to directly use the Figma tool, which I had previously only used in collaboration with designers."
            mainInformation={`Log the number of books they've read and the percentage of their reading goals they've achieved Keep track of their reading habits in the form of a pie chart, Record their favorite quotes and notes for each book, Set wish books and add books to their reading list, keep track of the books they're currently reading and the books they've finished reading `}
            github="https://github.com/april-jiyeon-kim/reading-habit"
            frontend="React Native"
            backend="Firebase"
            database="Firebase Firestore"
            deployment="Vercel"
            design="Figma"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

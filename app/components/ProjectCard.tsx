import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  previewImgs?: string[];
  description: string;
  mainInformation: string;
  github: string;
  url: string;
  frontend: string;
  backend: string;
  database: string;
  deployment: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  previewImgs,
  description,
  mainInformation,
  github,
  url,
  frontend,
  backend,
  database,
  deployment,
}) => {
  return (
    <div className="flex skill-card">
      {previewImgs && <h1>Temp</h1>}
      <h1 className="skill-card-title">{title}</h1>
      <div className="flex flex-row">
        <div>{description}</div>
        <div>
          <div>
            <h2>Main Information</h2>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;

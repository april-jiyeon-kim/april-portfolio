import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProjectCardProps {
  title: string;
  previewImgs?: string[];
  description: string;
  mainInformation: string;
  github: string;
  url: string;
  frontend: string;
  backend?: string;
  database?: string;
  deployment?: string;
  design?: string;
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
  design,
}) => {
  return (
    <div className="flex flex-col max-w-6xl p-10 mx-auto mt-10 bg-white rounded-3xl ">
      <div className="flex items-center justify-center w-full bg-black h-[400px]"></div>
      <div className="mb-4 text-4xl mt-14 font-extrabol font-archivoblack">
        {title}
      </div>
      <div className="flex flex-row">
        <div className="w-[40%] pr-4 font-sans">{description}</div>
        <div className="w-[60%] text-normal">
          <div className="flex w-full">
            <div className="inline-block w-36 archivonarrow">
              Main Information
            </div>
            <div className="text-sm w-[calc(100%-10rem)]">
              {mainInformation}
            </div>
          </div>
          <div className="flex w-full">
            <div className="inline-block w-36 archivonarrow">GitHub</div>
            <Link className="text-sm w-[calc(100%-10rem)] " href={github}>
              {github}
            </Link>
          </div>
          <div className="flex w-full">
            <div className="inline-block w-36 archivonarrow">url</div>
            <Link className="text-sm w-[calc(100%-10rem)] " href={url}>
              {url}
            </Link>
          </div>
          <div className="flex w-full">
            <div className="inline-block w-36 archivonarrow">Frontend</div>
            <div className="text-sm w-[calc(100%-10rem)] ">{frontend}</div>
          </div>
          {backend && (
            <div className="flex w-full">
              <div className="inline-block w-36 archivonarrow">Backend</div>
              <div className="text-sm w-[calc(100%-10rem)] ">{backend}</div>
            </div>
          )}
          {database && (
            <div className="flex w-full">
              <div className="inline-block w-36 archivonarrow">Database</div>
              <div className="text-sm w-[calc(100%-10rem)] ">{database}</div>
            </div>
          )}
          {deployment && (
            <div className="flex w-full">
              <div className="inline-block w-36 archivonarrow">Deployement</div>
              <div className="text-sm w-[calc(100%-10rem)] ">{deployment}</div>
            </div>
          )}
          {design && (
            <div className="flex w-full">
              <div className="inline-block w-36 archivonarrow">Design</div>
              <div className="text-sm w-[calc(100%-10rem)] ">{design}</div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ProjectCard;

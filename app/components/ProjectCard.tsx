import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProjectCardProps {
  title: string;
  previewImgs?: ImageProps[];
  description: string;
  mainInformation: string;
  github: string;
  url?: string;
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
    <div className="flex flex-col max-w-6xl p-10 mx-auto text-black bg-white md:mt-10 rounded-3xl ">
      <div className="md:flex items-center justify-center w-full bg-black h-[400px] hidden">
        {previewImgs &&
          previewImgs.map((img, idx) => (
            <Image
              key={`${title}_img_${idx}`}
              src={img.src}
              alt={img.alt}
              width={img.width || 31}
              height={img.height || 31}
              // width={0}
              // height={0}
              // sizes="100vw"
              // style={{ width: "90%", height: "auto" }}
            />
          ))}
      </div>
      <div className="mb-4 text-2xl md:text-4xl md:mt-14 font-extrabol font-archivoblack">
        {title}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%] pr-4 font-sans">{description}</div>
        <div className="md:w-[60%] text-normal mt-4 md:mt-0">
          <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
            <div className="inline-block w-36 archivonarrow">
              Main Information
            </div>
            <div className="text-sm md:w-[calc(100%-10rem)]">
              {mainInformation}
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
            <div className="inline-block w-36 archivonarrow">GitHub</div>
            <Link
              className="text-sm md:w-[calc(100%-10rem)]  text-orange hover:underline"
              href={github}
              target="blank"
            >
              {github}
            </Link>
          </div>
          {url && (
            <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
              <div className="inline-block w-36 archivonarrow">URL</div>
              <Link
                className="text-sm md:w-[calc(100%-10rem)] text-orange hover:underline"
                href={url}
                target="blank"
              >
                {url}
              </Link>
            </div>
          )}

          <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
            <div className="inline-block w-36 archivonarrow">Frontend</div>
            <div className="text-sm md:w-[calc(100%-10rem)] ">{frontend}</div>
          </div>
          {backend && (
            <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
              <div className="inline-block w-36 archivonarrow">Backend</div>
              <div className="text-sm md:w-[calc(100%-10rem)] ">{backend}</div>
            </div>
          )}
          {database && (
            <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
              <div className="inline-block w-36 archivonarrow">Database</div>
              <div className="text-sm md:w-[calc(100%-10rem)] ">{database}</div>
            </div>
          )}
          {deployment && (
            <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
              <div className="inline-block w-36 archivonarrow">Deployement</div>
              <div className="text-sm md:w-[calc(100%-10rem)] ">
                {deployment}
              </div>
            </div>
          )}
          {design && (
            <div className="flex flex-col w-full mb-2 md:flex-row md:mb-0">
              <div className="inline-block w-36 archivonarrow">Design</div>
              <div className="text-sm md:w-[calc(100%-10rem)] ">{design}</div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ProjectCard;

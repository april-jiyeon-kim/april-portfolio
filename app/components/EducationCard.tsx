import Image from "next/image";
import React from "react";

interface EducationCardProps {
  title: string;
  school: string;
  description?: string;
  duration: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  school,
  description,
  duration,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end">
        <h1 className="text-2xl italic font-extrabold md:text-3xl text-green">
          {title}
        </h1>
        <span className="pl-1 text-base font-normal text-greyBage">
          {duration}
        </span>
      </div>

      <h4 className="text-xl text-greyBage">{school}</h4>

      {description && <p className="font-light md:text-xl">{description}</p>}
    </div>
  );
};

export default EducationCard;

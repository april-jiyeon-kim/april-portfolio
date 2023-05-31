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
      <h1 className="text-4xl font-extrabold text-green">
        {title}
        <span className="pl-1 text-base font-normal text-greyBage">
          {duration}
        </span>
      </h1>
      <h4 className="py-1 text-2xl text-greyBage">{school}</h4>

      {description && <p className="text-2xl font-bold">{description}</p>}
    </div>
  );
};

export default EducationCard;

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
      <h1 className="text-3xl italic font-extrabold text-green">
        {title}
        <span className="pl-1 text-base font-normal text-greyBage">
          {duration}
        </span>
      </h1>
      <h4 className="text-xl text-greyBage">{school}</h4>

      {description && <p className="text-xl font-light">{description}</p>}
    </div>
  );
};

export default EducationCard;

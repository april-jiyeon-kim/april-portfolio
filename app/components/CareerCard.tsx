import Image from "next/image";
import React from "react";

interface CareerCardProps {
  title: string;
  logo: string;
  description: string;
  duration: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  logo,
  description,
  duration,
}) => {
  return (
    <div className="flex flex-row m-8 lg:mt-32 lg:max-w-6xl">
      {logo && (
        <Image
          className="hidden lg:block"
          src={logo}
          alt={title}
          width={230}
          height={217}
        />
      )}
      <div className="mt-5 lg:ml-44">
        <h1 className="text-2xl font-bold lg:text-4xl font-archivoblack">
          {title}
        </h1>
        <h4 className="mt-2 mb-3 lg:text-lg text-grey">{duration}</h4>
        <p className="lg:text-base ">{description}</p>
      </div>
    </div>
  );
};

export default CareerCard;

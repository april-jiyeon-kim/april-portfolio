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
    <div className="flex flex-row max-w-6xl mt-32">
      {logo && <Image src={logo} alt={title} width={230} height={217} />}
      <div className="mt-5 ml-44">
        <h1 className="text-4xl font-bold font-archivoblack">{title}</h1>
        <h4 className="mt-2 mb-3 text-lg text-grey">{duration}</h4>
        <p className="text-base ">{description}</p>
      </div>
    </div>
  );
};

export default CareerCard;

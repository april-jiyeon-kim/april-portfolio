import Image, { ImageProps } from "next/image";
import React from "react";

interface CareerCardProps {
  title: string;
  logo: string;
  description: string;
  duration: string;
  techImgs?: ImageProps[];
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  logo,
  description,
  duration,
  techImgs,
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
        <h1 className="text-2xl font-bold text-black lg:text-4xl font-archivoblack">
          {title}
        </h1>
        {techImgs && (
          <div className="flex h-8 mt-2">
            {techImgs.map((img, idx) => (
              <Image
                key={`${title}_img_${idx}`}
                className="mr-2"
                src={img.src}
                alt={img.alt}
                width={img.width || 31}
                height={img.height || 31}
              />
            ))}
          </div>
        )}

        <h4 className="mt-2 mb-3 lg:text-lg text-grey">{duration}</h4>
        <h4 className="text-black">{description}</h4>
      </div>
    </div>
  );
};

export default CareerCard;

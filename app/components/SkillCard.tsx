import Image from "next/image";
import React from "react";

interface SkillCardProps {
  title: string;
  skillImg?: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ title, skillImg }) => {
  return (
    <div className="drop-shadow-2xl relative px-8 py-8 bg-white rounded-3xl w-[310px] hover:scale-105 ease-in duration-300 ">
      <h1 className="mb-4 text-2xl font-normal text-center text-orange font-archivoblack">
        {title}
      </h1>
      {skillImg && (
        <Image
          src={`${skillImg}`}
          alt={title}
          width={300}
          height={200}
          className="object-cover"
          layout="responsive"
        />
      )}
    </div>
  );
};

export default SkillCard;

import Image from "next/image";
import React from "react";

interface SkillCardProps {
  title: string;
  icon?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon }) => {
  return (
    <div className="skill-card">
      <h1 className="skill-card-title">{title}</h1>
      {icon && <Image src={icon} alt={title} />}
    </div>
  );
};

export default SkillCard;

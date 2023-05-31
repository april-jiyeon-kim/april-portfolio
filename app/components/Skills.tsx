"use client";

import React, { useEffect } from "react";
import SkillCard from "./SkillCard";

const Skills = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section id="skills">
      <div className="relative flex flex-col items-center justify-center py-16 px-28 bg-orange">
        <h1 className="mb-12 text-4xl font-bold text-white">SKILLS</h1>
        <div className="flex flex-col flex-wrap h-[700px] content-center gap-x-24 gap-y-10">
          <SkillCard
            title="Frontend"
            skillImg="/images/skills/frontendSkill.png"
          />
          <SkillCard
            title="Backend"
            skillImg="/images/skills/backendSkill.png"
          />
          <SkillCard title="Mobile App" skillImg="/images/skills/mobile.png" />
          <SkillCard
            title="Version Control"
            skillImg="/images/skills/versionControl.png"
          />
          <SkillCard
            title="Communication"
            skillImg="/images/skills/communication.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

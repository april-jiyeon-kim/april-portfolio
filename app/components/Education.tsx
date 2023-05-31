"use client";

import React, { useEffect } from "react";
import EducationCard from "./EducationCard";

const Education = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <div className="mt-20">
      <h1 className="mb-6 text-4xl font-bold text-purple">Education</h1>
      <EducationCard
        title="Information Technology"
        school="University of Southampton"
        description="Individual Project: Using Comparative Softbiometrics for Face Recognition "
        duration="Oct 2015 - Jun 2019"
      />
      <span className="w-14" />
      <EducationCard
        title="Business Management"
        school="YMK COLLEGE/BTEC HND"
        duration="Mar 2014 - Jan 2015"
      />
    </div>
  );
};

export default Education;

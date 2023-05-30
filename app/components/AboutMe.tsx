"use client";

import React, { useEffect } from "react";

const AboutMe = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section>
      <div className="flex justify-center my-24 mx-28 ">
        <div className="flex flex-col justify-center m-auto align-middle ">
          <h1 className="mb-6 text-4xl font-bold text-orange">About me</h1>
          <h2 className="text-2xl font-bold text-orange">
            {`I am an open-minded person who is open to the perspectives,`}
          </h2>
          <h2 className="text-2xl font-bold text-orange">
            {`values and
          traditions of other individuals and communities.`}
          </h2>
          <h2 className="text-2xl font-bold text-orange">
            {`I try my best to
          listen and understand others.`}
          </h2>
          <h2 className="text-2xl font-bold text-orange">
            {`Continuous learning and improvement are
          important to me.`}
          </h2>
          <h2 className="text-2xl font-bold text-orange">
            {`I'm passionate about filling the gap between computer
          science and organisational applications of IT systems.`}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

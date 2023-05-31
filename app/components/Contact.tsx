"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
const Contact = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center py-16 text-white align-middle bg-black px-28">
        <Link href="https://github.com/april-jiyeon-kim" target="blank">
          <Image
            src={"/images/git-hub.png"}
            alt={"github"}
            width={60}
            height={60}
          />
        </Link>
        <span className="mt-5 text-sm ">
          ©{new Date().getFullYear()}. Jiyeon Kim. All rights reserved.
        </span>
      </div>
    </section>
  );
};

export default Contact;

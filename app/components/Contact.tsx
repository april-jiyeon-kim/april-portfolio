"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
const Contact = (): JSX.Element => {
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center py-16 text-white align-middle bg-black lg:px-28">
        <div className="flex gap-5">
          <Link href="https://github.com/april-jiyeon-kim" target="blank">
            <Image
              src={"/images/git-hub.png"}
              alt={"github"}
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/%EC%A7%80%EC%97%B0-%EA%B9%80-75822a94/"
            target="blank"
          >
            <Image
              src={"/images/linkedin.png"}
              alt={"linkedin"}
              width={40}
              height={40}
            />
          </Link>
        </div>

        <span className="mt-5 text-sm ">yeon19april@gmail.com</span>
        <span className="mt-1 text-sm ">
          ©{new Date().getFullYear()}. Jiyeon Kim. All rights reserved.
        </span>
      </div>
    </section>
  );
};

export default Contact;

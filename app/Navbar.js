"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col py-8 w-full">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image
          src={"/msit.png"}
          width={90}
          height={90}
          alt="msit_logo"
          className="mr-12"
        />
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-[2rem] font-bold text-indigo-800">
            Maharaja Surajmal Institute of Technology
          </h1>
          <p className="text-center text-sm text-red-400">
            {
              "Affiliated to GGSIPU | NAAC Accredited 'A' Grade | NBA (CSE, IT,ECE,EEE) | Approved by AICTE | ISO 9001:2015 Certified"
            }
          </p>
        </div>
      </div>
      {/* Marquee Info Bulletin*/}
      <div className="bg-slate-100 my-6 flex items-center justify-center">
        <marquee>
          <ul className="py-2 text-[0.96rem] font-light text-green-700 list-disc flex gap-36">
            <li>
              <a
                className="hover:text-green-900 active:text-green-950"
                href="https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/"
                target="_blank"
              >
                {
                  "Follow us @msitnewdelhi on Facebook, LinkedIn and Twitter for updates"
                }
              </a>
            </li>
            <li>
              <a
                className="hover:text-green-900 active:text-green-950"
                href="#"
                target="_blank"
              >
                {"Feedback form for bugs and issues regarding this portal"}
              </a>
            </li>
          </ul>
        </marquee>
      </div>
    </div>
  );
};

export default Navbar;

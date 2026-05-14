"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  // b28cff
  return (
    <nav className="flex fixed top-0 left-0 right-0 w-full z-10 py-3 paddingX justify-between items-center bg-white border-b border-gray-300">
      <Link href="/">
        <Image
          className="w-[32px] h-[32px]"
          src="/assets/logo.png"
          height={512}
          width={512}
          alt="logo"
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-[#0066a1] mr-10`}
            onClick={() => setActive(nav.title)}
          >
            <Link href={`/#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          height={512}
          width={512}
          alt="toggle"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl animate-slide-top`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-black mr-10`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

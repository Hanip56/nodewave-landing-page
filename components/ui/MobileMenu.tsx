"use client";

import { logoWhite } from "@/app/assets";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ show, setShow }: Props) => {
  return (
    <div className="block lg:hidden">
      <div
        className="fixed w-[80%] sm:w-96 h-full z-50 top-0 left-0 bg-gray-900 p-4 font-medium transition-[left]"
        style={{ left: show ? "0" : "-35rem" }}
      >
        <Image
          className="mb-8"
          src={logoWhite}
          alt="Nodewave logo"
          width={200}
          height={200}
          priority
        />
        <ul className="w-full [&>li]:px-4 [&>li]:py-3 [&>li]:text-lg [&>li]:cursor-pointer [&>li:hover]:text-gray-200">
          <li>Website</li>
          <li>Mobile Apps</li>
          <li>Portfolio</li>
          <li>
            <button className="bg-green-accent px-5 py-3 rounded-tr-full rounded-br-full hover:bg-green-accent/90">
              Make an App
            </button>
          </li>
        </ul>
      </div>
      {/* overlay */}
      <div
        onClick={() => setShow(false)}
        className="fixed top-0 left-0 bottom-0 right-0 z-40 bg-black/50 cursor-pointer"
        style={{ display: show ? "block" : "none" }}
      />
    </div>
  );
};

export default MobileMenu;

import { logoWhite } from "@/assets";
import { medsos } from "@/constants/uiData";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="mx-auto relative flex flex-col items-center text-center py-11 gap-10 px-2 md:px-4 xl:px-0">
      <Image src={logoWhite} alt="Nodewave logo" />
      <h4>PT NODEWAVE SOLUSI TEKNOLOGI</h4>
      <p className="text-lg lg:text-xl font-semibold leading-normal">
        Graha Pena Surabaya <br /> Jl. Ahmad Yani no. 88 Surabaya <br /> Phone :
        +62811258280 <br />
        Email : support@nodewave.id
      </p>
      <div className="flex gap-4 items-center">
        {medsos.map((m) => (
          <a
            href="#"
            key={m.alt}
            className="flex-shrink-0 hover:opacity-75 transition-opacity"
          >
            <Image src={m.icon} alt={m.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;

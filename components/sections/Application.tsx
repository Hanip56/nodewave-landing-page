import {
  ApplicationListLogo,
  ApplicationThatCanBeMade,
} from "@/constants/uiData";
import Image from "next/image";
import React from "react";

const Application = () => {
  return (
    <section className="max-w-[83.3rem] min-h-[41rem] mx-auto relative flex flex-col items-center py-7 my-10 gap-10 px-2 md:px-4 xl:px-0">
      <h2 className="text-center">Application that can be made</h2>
      <div className="flex flex-col lg:flex-row items-start gap-5 gap-y-8">
        {ApplicationThatCanBeMade.map((draft) => (
          <div
            key={draft.title}
            className="flex-1 flex flex-col gap-3 lg:gap-5"
          >
            <div className="flex items-center gap-3 lg:gap-5">
              <Image
                className="w-10 lg:w-12"
                src={draft.icon}
                alt={draft.title}
                priority
              />
              <h4 className="text-xl">{draft.title}</h4>
            </div>
            <p className="leading-normal">{draft.description}</p>
            <ul className="list-disc pl-8 mt-2 space-y-[2px]">
              {draft.list.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-5 flex-wrap">
        {ApplicationListLogo.map((logo, i) => (
          <div key={i} className="flex items-center gap-2">
            {logo?.icon && (
              <Image
                className="w-8 md:w-10 lg:w-[50px]"
                src={logo.icon}
                alt={logo.label}
                priority
              />
            )}
            <span className="text-md md:text-lg lg:text-xl font-semibold">
              {logo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Application;

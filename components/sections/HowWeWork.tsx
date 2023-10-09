import { howWeWorkBg, howWeWorkCardBg } from "@/assets";
import { ChatComp } from "@/components";
import { chats } from "@/constants/uiData";
import Image from "next/image";
import React from "react";

const HowWeWork = () => {
  return (
    <section className="max-w-[1600px] min-h-[41rem] mx-auto relative flex flex-col items-center py-7 my-10 gap-10 px-2 md:px-4 xl:px-0">
      <h2>How We Work</h2>
      <div className="relative max-w-[48rem] min-h-[31rem] rounded-[0.625rem] bg-white/5 p-9 overflow-hidden">
        <div className="w-full h-full items-center text-center md:text-start md:items-start flex flex-col md:flex-row gap-12">
          <div className="w-72 h-[27rem] rounded-[0.625rem] bg-white flex-shrink-0 p-4 flex flex-col gap-3">
            {chats.map(({ user, altUser, align, text }, i) => (
              <ChatComp
                key={i}
                user={user}
                altUser={altUser}
                align={align}
                text={text}
              />
            ))}
          </div>
          <div className="space-y-4">
            <h5 className="text-xl leading-normal font-semibold">Estimate</h5>
            <p className="font-normal leading-normal text-xl">
              Estimate the cost of creating your application with us. Pricing is
              transparent at the start with a gradual payment method.
            </p>
          </div>
        </div>
        {/* background card */}
        <div className="absolute -z-[5] top-0 left-0 w-full h-full ">
          <Image
            src={howWeWorkCardBg}
            alt="noisy black background"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="w-full h-full -z-10 absolute overflow-hidden top-0 left-0">
        <Image
          src={howWeWorkBg}
          alt="noisy blue background"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HowWeWork;

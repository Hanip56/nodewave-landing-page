import { background, headIdeaIcon, tagIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className={`h-[881px] flex items-center px-2 md:px-4 xl:px-0 relative max-w-[1512px] mx-auto`}
    >
      <div className="h-[881px] w-full absolute -z-20 right-0 overflow-x-hidden top-0">
        <Image
          className="h-full w-full object-cover "
          src={background}
          alt="background code"
        />
        {/* overlay */}
        <div className="absolute h-40 w-full bg-gradient-to-t from-black to-transparent bottom-0 right-0 " />
        <div className="hidden xl:block absolute w-20 h-full bg-gradient-to-l from-black to-transparent bottom-0 right-0 " />
      </div>
      <div className="max-w-[82.88rem] mx-auto flex-grow flex flex-col gap-y-4 items-start relative">
        <div className="relative">
          {/* tag icon */}
          <div className="absolute -top-7 xl:-top-8 left-0 xl:-left-5">
            <Image className="w-8 xl:w-12" src={tagIcon} alt="html tag icon" />
          </div>
          <h1>
            Make Your Own <br /> Website and Mobile Application <br />
            <span className="relative">
              With Nodewave{" "}
              <div className="absolute bottom-0 -right-10 md:-right-16">
                <Image
                  className="w-10 md:w-16"
                  src={headIdeaIcon}
                  alt="head idea icon"
                />
              </div>
            </span>
          </h1>
        </div>
        <button className="px-4 py-2 font-semibold textBody1 tracking-tighter bg-green-accent hover:bg-green-accent/80 rounded-full">
          Get Started Now
        </button>
        <p className="textBody1 leading-normal max-w-[58rem] mt-2">
          Create Mobile Applications and Websites for Companies or Your Business
          Have a transparent pricing, easy and straightforward development
          process
        </p>
      </div>
    </section>
  );
};

export default Hero;

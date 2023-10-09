"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { testimonies, works } from "@/constants/uiData";
import Image from "next/image";

const OurWorks = () => {
  return (
    <section className="max-w-[100%] overflow-hidden mx-auto my-12 px-2 md:px-4 xl:px-0">
      <div className="flex flex-col gap-10 max-w-[87rem] mx-auto">
        <h2 className="text-center">Our Works</h2>
        <div className="max-w-[90%] md:max-w-[54rem] h-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            style={{ overflow: "visible" }}
          >
            {works.map((work, i) => (
              <SwiperSlide
                className="relative rounded-md overflow-hidden font-medium text-sm"
                style={{
                  height: "32.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                key={i}
              >
                <div className="flex flex-col md:flex-row gap-4 p-4">
                  <div className="basis-[70%] flex-shrink-0 rounded-[0.625rem] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={work.image}
                      alt={`${work.title}-image`}
                      width={100}
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-center xl:text-[2rem] leading-[2em]">
                      {work.title}
                    </h3>
                    <p className="font-normal text-center md:text-start md:text-lg lg:text-xl">
                      {work.description}
                    </p>
                  </div>
                </div>
                {/* background img */}
                <div className="w-full h-full absolute -z-10">
                  <div className="absolute w-full h-full bg-white/10" />
                  <Image
                    src={work.bg}
                    alt={work.title}
                    className="absolute w-full h-full object-cover -z-20 blur-[8px] scale-110"
                    priority
                    width={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

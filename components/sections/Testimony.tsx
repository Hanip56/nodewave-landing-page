"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { testimonies } from "@/constants/uiData";

const Testimony = () => {
  return (
    <section className="max-w-[100%] overflow-hidden mx-auto my-12 px-2 md:px-4 xl:px-0">
      <div className="flex flex-col gap-10 max-w-[87rem] mx-auto">
        <h3>Testimony</h3>
        <div className="max-w-[90%] md:max-w-[50%] xl:max-w-[37%] h-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            style={{ overflow: "visible" }}
          >
            {testimonies.map((testimony, i) => (
              <SwiperSlide
                className="bg-white rounded-md p-4 font-medium text-sm"
                style={{
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
                key={i}
              >
                <p className="text-[#333]">{testimony.text}</p>
                <p className="text-green-accent">{testimony.author}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimony;

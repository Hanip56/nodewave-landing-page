import {
  mobileAppsIcon,
  rightArrowIcon,
  threePhone,
  websiteIcon,
} from "@/assets";
import Image from "next/image";
import React from "react";

const OurProduct = () => {
  return (
    <section className="flex flex-col items-center my-12 gap-10 px-2 md:px-4 xl:px-0">
      <h2>Our Product</h2>
      <div className="flex flex-col-reverse xl:flex-row gap-4 lg:gap-6 ">
        <div className="xl:max-w-[26.75rem]  flex flex-col md:flex-row xl:flex-col gap-4 lg:gap-6">
          {/* mobile apps */}
          <div className="bg-white xl:basis-[60%] h-full p-8 lg:py-12 lg:px-10 rounded-3xl flex items-center cursor-pointer hover:bg-white/90">
            <div className="flex w-full items-center gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <Image src={mobileAppsIcon} alt="mobile apps icon" priority />
              </div>
              <div>
                <h3 className="font-medium text-[#333] font-rubik">
                  Mobile Apps
                </h3>
                <p className="text-[#555] font-roboto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto xl:self-end mb-2">
                <Image src={rightArrowIcon} alt="right icon" priority />
              </div>
            </div>
          </div>
          {/* website */}
          <div className="hover:bg-white/10 xl:mx-5 xl:basis-[50%] h-full border border-white p-8 lg:py-12 lg:px-5 rounded-3xl flex items-center cursor-pointer">
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={websiteIcon}
                  width={60}
                  height={60}
                  alt="mobile apps icon"
                  priority
                />
              </div>
              <div>
                <h3 className="font-medium font-rubik">Website</h3>
                <p className="font-roboto font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto xl:self-end mb-2">
                <Image src={rightArrowIcon} alt="right icon" priority />
              </div>
            </div>
          </div>
        </div>
        {/* mobile apps */}
        <div className="xl:max-w-[43rem] bg-white p-8 lg:py-12 lg:px-10 rounded-3xl flex flex-col items-center text-center gap-4 lg:gap-6">
          <Image src={threePhone} alt="Mobile apps image" priority />
          <h3 className="font-medium xl:text-[2rem] text-[#333] font-rubik">
            Mobile Apps
          </h3>
          <p className="text-[#555] font-roboto">
            Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur
            sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi
            kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.
          </p>
          <button className="px-4 py-2 font-medium font-rubik bg-green-accent hover:bg-green-accent/80 rounded-lg shadow-lg shadow-black/20">
            Pelajari Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;

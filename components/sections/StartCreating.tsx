import { discountBadgeIcon, mobileAppsCard, websiteCard } from "@/assets";
import Image from "next/image";
import React from "react";

const StartCreating = () => {
  return (
    <section className="flex flex-col items-center text-center my-10 gap-10 px-2 md:px-4 xl:px-0">
      <h2>Start Creating Websites or Mobile Apps For You Now</h2>
      <div className="flex flex-col lg:flex-row gap-6 xl:gap-24">
        {/* website card */}
        <div className="max-w-[32rem] h-[21rem] bg-white flex rounded-[0.625rem] overflow-hidden">
          <div className="flex-1  p-8 flex flex-col gap-2 items-center text-center text-[#333]">
            <h4 className="text-3xl lg:text-[2rem] -tracking-[0.15rem] leading-normal font-semibold">
              Website
            </h4>
            <h5 className="text-xl font-semibold">Start from</h5>
            <div>
              <div className="relative text-[0.875rem] text-[#717171]">
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-red-500" />
                <Image
                  src={discountBadgeIcon}
                  alt="discount badge icon"
                  className="absolute -right-4 -top-2"
                />
                <span>Rp, 1.000.000</span>
              </div>
              <p className="text-sm font-medium">Rp, 500.000</p>
            </div>
            <button className="w-40 h-10 bg-green-accent rounded-full flex justify-center items-center px-4 text-white text-sm font-normal mt-10 hover:bg-green-accent/80">
              Order Now
            </button>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <Image
              src={websiteCard}
              alt="picture code"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Mobile Apps card */}
        <div className="max-w-[32rem] h-[21rem] bg-white flex rounded-[0.625rem] overflow-hidden">
          <div className="flex-1  p-8 flex flex-col gap-2 items-center justify-between text-center text-[#333]">
            <h4 className="text-3xl lg:text-[2rem] -tracking-[0.15rem] leading-normal font-semibold">
              Mobile Appas
            </h4>
            <div className="space-y-1">
              <h5 className="text-xl font-semibold">Start from</h5>
              <p className="text-sm font-medium">Rp, 999.000</p>
            </div>
            <button className="w-40 h-10 bg-green-accent rounded-full flex justify-center items-center px-4 text-white text-sm font-normal mt-10 hover:bg-green-accent/80">
              Order Now
            </button>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <Image
              src={mobileAppsCard}
              alt="mobile screen picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCreating;

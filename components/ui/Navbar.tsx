"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { logoWhite, menuIcon } from "@/assets";
import { MobileMenu } from "..";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  console.log({ isScrollUp });

  useEffect(() => {
    const onScroll = () => {
      setIsScrollUp(offset > scrollY);
      setOffset(scrollY);
    };

    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, [offset]);

  const HEADER_STYLE =
    offset < 110 ? "w-full" : `w-[100%] top-[110px] transition-[top]`;
  const HEADER_TOP_STYLE = offset < 110 ? "" : isScrollUp ? "0" : "-110px";
  const HEADER_POSITION_STYLE =
    (!isScrollUp && offset < 110) || (isScrollUp && offset == 0)
      ? "absolute"
      : "fixed";

  return (
    <>
      <MobileMenu show={showMobileMenu} setShow={setShowMobileMenu} />
      <header
        className={HEADER_STYLE}
        style={{
          top: HEADER_TOP_STYLE,
          position: HEADER_POSITION_STYLE,
          backgroundColor:
            HEADER_POSITION_STYLE === "fixed" ? "black" : "transparent",
          zIndex: 10,
        }}
      >
        <nav className="max-w-[87rem] mx-auto flex items-center justify-between py-7 px-4 xl:px-0">
          <Image
            className="w-48 md:w-[14rem]"
            src={logoWhite}
            alt="Nodewave logo"
            priority
          />
          <button
            className="block lg:hidden text-white cursor-pointer"
            onClick={() => setShowMobileMenu(true)}
          >
            <Image
              src={menuIcon}
              alt="menu bar"
              width={40}
              height={40}
              priority
            />
          </button>
          <ul className="h-full items-center gap-[1.875rem] [&>li:hover]:text-gray-200 cursor-pointer text-xl font-medium hidden lg:flex">
            <li>Website</li>
            <li>Mobile Apps</li>
            <li>Portfolio</li>
            <li>
              <button className="bg-green-accent px-5 py-3 hover:bg-green-accent/90 transition-colors rounded-full">
                Make an App
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

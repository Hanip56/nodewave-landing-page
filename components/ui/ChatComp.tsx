import Image from "next/image";
import React from "react";

type Props = {
  user: string;
  altUser: string;
  text: string;
  align: "left" | "right";
};

const ChatComp = ({ user, altUser, text, align }: Props) => {
  return (
    <div
      className={`flex items-start justify-between gap-4 ${
        align === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Image src={user} alt={altUser} priority />
      <div className="flex-1 p-2 bg-[#D9D9D9] rounded-[0.625rem] leading-normal text-[0.75rem] text-[#333]">
        {text}
      </div>
    </div>
  );
};

export default ChatComp;

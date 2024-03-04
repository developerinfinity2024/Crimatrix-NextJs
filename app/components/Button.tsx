import React, { ReactNode } from "react";
import  Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  link: string;
  icon?: ReactNode;
  type?: "primary" | "secondary";
}

const ButtonStyles = (type = "primary") => {
  return type === "primary"
    ? "bg-[#2aac95] text-white px-8"
    : "bg-white px-[24px] text-[#2aac95] font-semibold";
};

const Button: React.FC<ButtonProps> = ({ children, link, icon, type }) => {
  if (icon) {
    return (
      <Link
        href={link}
        className="flex gap-2 text-[12.4px] rounded items-center bg-[#1a2d4a] text-white w-fit px-3 py-[9px] cursor-pointer"
      >
        <span>{icon}</span>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <Link
      href={link}
      className={`text-[14px] rounded py-[9px] block w-fit ${ButtonStyles(
        type
      )} `}
    >
      {children}
    </Link>
  );
};

export default Button;

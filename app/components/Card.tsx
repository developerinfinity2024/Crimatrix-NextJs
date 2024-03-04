import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article className="p-4 w-full max-w-[462px] mx-auto h-[252px] shadow-lg rounded-xl bg-white">
      {children}
    </article>
  );
};

export default Card;

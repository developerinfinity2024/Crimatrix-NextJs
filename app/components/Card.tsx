import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article className="p-[21px] w-full max-w-[490px] h-[254px] shadow-lg rounded-[13.4px] bg-white">
      {children}
    </article>
  );
};

export default Card;

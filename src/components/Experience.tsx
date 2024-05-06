import ExpandButton from "./ExpandButton";
import React, { useState, type ReactNode } from "react";

interface Props {
  imgSrc: string;
  title: string;
  children: ReactNode;
}

const Experience: React.FC<Props> = ({ title, imgSrc, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center my-4 sm:m-0 sm:mx-4 sm:mt-10 sm:relative sm:w-[45%]">
      <img
        className="w-20 rounded-full sm:absolute sm:-top-10"
        src={imgSrc}
        alt={title + " logo"}
      />
      <h3 className="text-xl sm:hidden">{title}</h3>
      <div
        className={
          "w-full flex flex-col justify-center transition-all duration-[400ms] items-center rounded-lg p-2 sm:w-9/12 sm:bga sm:pt-12 " +
          `${!isOpen ? "bg-[#00000000]" : "bga"}`
        }
      >
        <h3 className="hidden sm:text-xl sm:block sm:text-[--fonta]">{title}</h3>
        <span
          className={
            "w-3/4 overflow-hidden transition-all duration-500 mt-4 text-[--fonta] " +
            `${isOpen ? "max-h-[128rem]" : "max-h-0"}`
          }
        >
          {children}
        </span>
        <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
export default Experience;

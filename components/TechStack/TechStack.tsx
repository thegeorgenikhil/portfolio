import React from "react";
import TechStackListItems from "./TechStackListItems";
import { techStack } from "./TechStackSrc";

export const TechStack = () => {
  return (
    <>
      <div className="flex items-center my-10">
        <h1 className="text-3xl font-bold">techstack</h1>
        <div className="ml-2 w-full h-[2px]  bg-shade-light-blue"></div>
      </div>
      <TechStackListItems techStackSrc={techStack} />
    </>
  );
};

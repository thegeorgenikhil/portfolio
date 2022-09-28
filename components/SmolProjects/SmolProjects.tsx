import React from "react";
import { SmolProjectList } from "./SmolProjectList";

export const SmolProjects = () => {
  return (
    <>
      <div className="flex items-center my-10">
        <h1 className="text-3xl whitespace-nowrap font-bold">other smol projects</h1>
        <div className="ml-2 w-full  h-[2px]  bg-shade-light-blue"></div>
      </div>
      <SmolProjectList />
    </>
  );
};


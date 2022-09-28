import React from "react";
import { PosterMansonry } from "./PosterMansonry";

export const Posters = () => {
  return (
    <>
      <div className="flex items-center my-10">
        <h1 className="text-3xl font-bold">posters</h1>
        <div className="ml-2 w-full h-[2px]  bg-shade-light-blue"></div>
      </div>
      <p className="text-slate-500 dark:text-white/50 font-medium text-center text-xl max-w-[50ch] mx-auto mb-10">
       some random posters made using photoshop :&#41;
      </p>
      <PosterMansonry />
    </>
  );
};

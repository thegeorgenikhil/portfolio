import React from "react";
import { ProjectCardList } from "./ProjectCardList";

export const Projects = () => {
  return (
    <>
      <div className="flex items-center my-10" id="projects">
        <h1 className="text-3xl font-bold">projects</h1>
        <div className="ml-2 w-full h-[2px]  bg-shade-light-blue"></div>
      </div>
      <p className="text-slate-500 dark:text-white/50 font-medium text-center text-xl max-w-[50ch] mx-auto">
        A list of all the major projects I have worked on. You can find more
        projects on my{" "}
        <a
          className="text-shade-light-blue hover:underline"
          href="https://github.com/thegeorgenikhil"
        >
          Github
        </a>
      </p>
      <ProjectCardList />
    </>
  );
};

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./ProjectData";

export const ProjectCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
      {Projects.projects.map((projectInfo) => (
        <ProjectCard key={projectInfo.title} projectInfo={projectInfo} />
      ))}
    </div>
  );
};

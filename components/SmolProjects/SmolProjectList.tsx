import React from "react";
import { SmolProjectItem } from "./SmolProjectItem";
import { SmolProjects } from "./SmolProjectsData";

export const SmolProjectList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SmolProjects.projects.map((projectData) => (
          <SmolProjectItem key={projectData.title} projectData={projectData} />
        ))}
      </div>
    </>
  );
};

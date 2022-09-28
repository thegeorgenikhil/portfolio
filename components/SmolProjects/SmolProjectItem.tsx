import React from "react";
import { SmolProjectsDataType } from "./SmolProjectsData";

type SmolProjectItemProps = {
  projectData: SmolProjectsDataType;
};

export const SmolProjectItem: React.FC<SmolProjectItemProps> = ({
  projectData,
}) => {
  const { title, projectLink, description,githubLink } = projectData;
  return (
    <div className="col-span-1 flex flex-col gap-2">
      <a
        href={projectLink}
        className="text-lg font-medium w-fit border-b-2 border-shade-light-blue"
      >
        {title} <span className="text-shade-light-blue">&#8599;</span>
      </a>
      <div className="text-slate-600 dark:text-white/50 font-medium text-lg">{description}</div>
      <a
        className="dark:text-shade-light-blue font-semibold hover:underline"
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        view code on github &#8599;
      </a>
    </div>
  );
};

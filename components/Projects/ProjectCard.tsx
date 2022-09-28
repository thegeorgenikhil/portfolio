import Image from "next/image";
import React from "react";
import { ProjectDataType } from "./ProjectData";

type ProjectCardProps = {
  projectInfo: ProjectDataType;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectInfo }) => {
  const {
    title,
    description,
    githubLink,
    projectLink,
    year,
    imgUrl,
    type,
    techStack,
  } = projectInfo;
  return (
    <div>
      <a href={projectLink} target="_blank" rel="noreferrer">
        <div className="mb-5">
          <Image
            className="rounded"
            loading="lazy"
            width={494}
            height={290}
            layout="responsive"
            objectFit="contain"
            src={imgUrl}
            alt={title}
          />
        </div>
      </a>
      <p className="text-shade-light-blue text-sm font-semibold mb-3">{type}</p>
      <a href={projectLink} target="_blank" rel="noreferrer">
        <h1 className="text-2xl font-black hover:underline">
          {title}{" "}
          <span className="text-shade-light-blue font-medium">&#8599;</span>
        </h1>
      </a>
      <p className="text-white/50 text-sm font-medium my-2">
        {techStack} &bull; {year}
      </p>
      <p className="text-slate-700 dark:text-white/50 text-lg mb-4">
        {description}
      </p>
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

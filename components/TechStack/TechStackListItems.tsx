import React from "react";
import TechStackIcons from "./TechStackIcons";
import { TechStackType } from "./TechStackSrc";

const TechStackListItems: React.FC<{ techStackSrc: TechStackType }> = ({
  techStackSrc,
}) => {
  return (
    <>
      {Object.keys(techStackSrc).map((key, index) => (
        <div key={index} className={"mb-12"}>
          <h1 className="text-xl font-bold mb-4 dark:text-white/50">{key}</h1>
          <div className="flex flex-wrap gap-4 items-center">
            {techStackSrc[key as keyof TechStackType].map((tech, index) => (
              <div key={index} className="flex w-full sm:w-48 items-center p-2 dark:bg-white/10 gap-2 rounded-lg bg-slate-200/40 hover:bg-slate-200/70 dark:hover:bg-white/20 transition ease-in-out duration-300">
                <TechStackIcons
                  key={index}
                  name={tech.name}
                  bgClass={tech.bgClass}
                  src={`/dev-icons/${key}/${tech.src}`}
                />
                <p className="text-center font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TechStackListItems;

enum TechStackCategories {
  languages = "languages",
  development = "development",
  databases = "databases",
}

export type TechStackType = {
  [k in TechStackCategories]: TechStackImgDetails[];
};

type TechStackImgDetails = {
  name: string;
  src: string;
  bgClass: string;
};

export const techStack: TechStackType = {
  languages: [
    {
      name: "C",
      src: "c.svg",
      bgClass: "bg-[#5C6BC0]/20",
    },
    {
      name: "C++",
      src: "cpp.svg",
      bgClass: "bg-[#00549D]/20",
    },
    {
      name: "Python",
      src: "python.svg",
      bgClass: "bg-[#0277BD]/20",
    },
    {
      name: "Javascript",
      src: "javascript.svg",
      bgClass: "bg-[#FFD600]/20",
    },
    {
      name: "Typescript",
      src: "typescript.svg",
      bgClass: "bg-[#3080BD]/20",
    },
  ],
  development: [
    {
      name: "React",
      src: "react.svg",
      bgClass: "bg-[#80DEEA]/20",
    },
    {
      name: "React Native",
      src: "reactnative.svg",
      bgClass: "bg-[#80DEEA]/20",
    },
    {
      name: "Next.js",
      src: "nextjs.svg",
      bgClass: "dark:bg-[#FFFFFF]/20 bg-[#121212]/10",
    },
    {
      name: "GraphQL",
      src: "graphql.svg",
      bgClass: "bg-[#FF4081]/20",
    },
    {
      name: "Node.js",
      src: "nodejs.svg",
      bgClass: "bg-[#4CAF50]/20",
    },
    {
      name: "Redux",
      src: "redux.svg",
      bgClass: "bg-[#7E57C2]/20",
    },
    {
      name: "Tailwind CSS",
      src: "tailwindcss.svg",
      bgClass: "bg-[#00ACC1]/20",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      src: "mongodb.svg",
      bgClass: "bg-[#81C784]/20",
    },
  ],
};

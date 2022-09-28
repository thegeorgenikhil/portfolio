export type SmolProjectsDataType = {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
  year: string;
};

type SmolProjectsType = {
  title: string;
  projects: SmolProjectsDataType[];
};

export const SmolProjects: SmolProjectsType = {
  title: "Smol Projects",
  projects: [
    {
      title: "attendance 75",
      description: "Calculate how many more days you can bunk",
      projectLink: "https://attendance75.nikhilgeorge.in/",
      githubLink: "https://github.com/thegeorgenikhil/75attendance",
      year: "2022",
    },
    {
      title: "CryptoWatch",
      description: "Price Tracker made using WazirX API",
      projectLink: "https://crypto-track-app.netlify.app/",
      githubLink:"https://github.com/thegeorgenikhil/crypto-price-tracker",
      year: "2021",
    },
  ],
};

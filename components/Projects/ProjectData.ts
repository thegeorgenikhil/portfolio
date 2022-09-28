type ProjectsType = {
  title: string;
  projects: ProjectDataType[];
};

export type ProjectDataType = {
  imgUrl: string;
  type: string;
  title: string;
  techStack: string;
  description: string;
  year: string;
  githubLink: string;
  projectLink: string;
};

export const Projects: ProjectsType = {
  title: "Projects",
  projects: [
    {
      imgUrl:
        "https://res.cloudinary.com/dgi9vljim/image/upload/v1664202989/portfolio/projects/kryptolinks_ehxgib.png",
      type: "FULL-STACK",
      title: "KryptoLinks",
      techStack: "React, NodeJS, MongoDB",
      description:
        "No more lengthy wallet addresses. Make your own kryptolink and start accepting payments in ethereum",
      year: "2021",
      githubLink: "https://github.com/thegeorgenikhil/kryptolinks.xyz",
      projectLink: "https://www.kryptolinks.xyz/nikhil",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dgi9vljim/image/upload/v1664202989/portfolio/projects/quizz-up_kastj9.png",
      type: "FULL-STACK",
      title: "Quizz-Up",
      techStack: "React, NodeJS, MongoDB, Typescript",
      description:
        "QuizzUp is a web application that allows you to play quizzes based on your favourite technologies.",
      year: "2022",
      githubLink: "https://github.com/thegeorgenikhil/quizz-up-frontend",
      projectLink: "https://quizz-up.netlify.app/",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dgi9vljim/image/upload/v1664202990/portfolio/projects/flow-vid_sjwgfj.png",
      type: "FRONTEND",
      title: "flow.vid",
      techStack: "React, React Player",
      description:
        "A video library made using ReactJs with all the functionalities like Authentication, Watch Later, History, Playlist Management, Likes and Filtering.",
      year: "2022",
      githubLink: "https://github.com/thegeorgenikhil/flow.vid",
      projectLink: "https://flow-vid.netlify.app/",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dgi9vljim/image/upload/v1664202989/portfolio/projects/flow-css_jx36io.png",
      type: "CSS LIBRARY",
      title: "flow.css",
      techStack: "HTML, CSS, JavaScript",
      description:
        "flow.css is a simple, responsive and accessible component library that helps you design components without having to write css.",
      year: "2022",
      githubLink: "https://github.com/thegeorgenikhil/flow.css",
      projectLink: "https://flow-css.netlify.app/",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dgi9vljim/image/upload/v1664202989/portfolio/projects/keep-clone_b0822l.png",
      type: "FRONTEND",
      title: "Keep Clone",
      techStack: "React",
      description:
        "A Google Keep Clone made using ReactJs with all the functionalities like Authentication, Notes, Labels, Archive, Trash, Search and Filtering.",
      year: "2022",
      githubLink: "https://github.com/thegeorgenikhil/keep-clone",
      projectLink: "https://keep-react.netlify.app/",
    },
  ],
};

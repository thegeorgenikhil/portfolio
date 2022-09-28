import React from "react";
import {
  Footer,
  HeadingText,
  Navbar,
  Posters,
  Projects,
  SmolProjects,
  TechStack,
} from "../components";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeadingText />
      <TechStack />
      <Projects />
      <SmolProjects />
      <Posters />
      <Footer />
    </>
  );
};

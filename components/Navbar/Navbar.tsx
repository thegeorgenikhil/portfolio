import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import Dark from "../../public/dark.png";
import Light from "../../public/light.png";
import { NavDropDown } from "./NavDropDown";

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeHandler = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="flex justify-between items-center mt-20">
        <h1 className="text-2xl font-semibold">nikhilgeorge</h1>
        <ul className="text-slate-900 flex items-center gap-4 text-lg dark:text-white/70 font-medium text-nav-list">
          <li className="dark:hover:text-white hidden sm:flex transition ease-in-out hover:opacity-50">
            <a href="#projects">projects</a>
          </li>
          <li className="dark:hover:text-white hidden sm:flex transition ease-in-out hover:opacity-50">
            <a href={"/resume.pdf"} target="_blank" rel="noreferrer">
              resume
            </a>
          </li>
          <li className="dark:hover:text-white transition hidden sm:flex ease-in-out hover:opacity-50">
            <a href="https://github.com/thegeorgenikhil">github</a>
          </li>
          <li>
            <ul className="flex justify-center items-center gap-4">
              <li className="flex sm:hidden items-center cursor-pointer">
                <NavDropDown />
              </li>
              <li
                onClick={themeHandler}
                className="flex items-center cursor-pointer"
              >
                <Image
                  alt="theme-toggle-icon"
                  className="hover:opacity-90 transition ease-in-out"
                  width={24}
                  height={24}
                  src={currentTheme === "dark" ? Dark : Light}
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="w-full h-[2px] bg-shade-light-blue mt-3"></div>
    </>
  );
};

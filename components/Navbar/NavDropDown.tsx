import Image from "next/image";
import React, { useState } from "react";
import Menu from "../../public/menu.png";
import MenuDark from "../../public/menu-dark.png";
import { useTheme } from "next-themes";

export const NavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative">
      <div
        className="flex items-center"
        onClick={() => setIsOpen((status) => !status)}
      >
        <Image
          alt="theme-toggle-icon"
          width={24}
          height={24}
          src={currentTheme === "dark" ? MenuDark : Menu}
        />
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute right-0 w-36 mt-2 z-10 origin-top-right bg-white dark:bg-black border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <a
            href="#projects"
            className="text-slate-400 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-shade-light-blue"
            role="menuitem"
          >
            Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-shade-light-blue"
            role="menuitem"
          >
            Resume
          </a>
          <a
            href="https://github.com/thegeorgenikhil"
            className="text-slate-400 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-shade-light-blue"
            role="menuitem"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

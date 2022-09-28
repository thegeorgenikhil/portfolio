import React from "react";

export const Footer = () => {
  return (
    <footer className="my-10">
      <div className="flex justify-between text-xs font-medium">
        <p>&copy; Nikhil George 2022</p>
      </div>
      <div className="w-full h-[2px] bg-black/20 dark:bg-white/20 my-2"></div>
      <div className="flex justify-between text-xs sm:text-sm font-medium">
        <p>
          built using{" "}
          <a href="https://nextjs.org/" className="text-shade-light-blue">
            nextjs
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" className="text-shade-light-blue">
            tailwind
          </a>
        </p>
        <ul className="flex gap-2 dark:text-white/50">
          <li className="hover:text-shade-light-blue">
            <a href="https://twitter.com/thegeorgenikhil">twitter</a>
          </li>
          <li className="hover:text-shade-light-blue">
            <a href="https://github.com/thegeorgenikhil">github</a>
          </li>
          <li className="hover:text-shade-light-blue">
            <a href="https://www.linkedin.com/in/thegeorgenikhil/">linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

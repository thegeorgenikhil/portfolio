import React, { useState } from "react";

export const HeadingText = () => {
  const [text, setText] = useState("सुन्दर");

  const translateText = () => {
    setText(() => {
      if (text === "beautiful") {
        return "सुन्दर";
      } else if (text === "सुन्दर") {
        return "മനോഹരമായ";
      } else {
        return "beautiful";
      }
    });
  };
  return (
    <div className="mt-10">
      <div className="my-4">
        <h1 className="text-4xl font-semibold mb-6">Hey, I am Nikhil</h1>
        <p className="dark:text-white/50 text-slate-900 font-medium text-md">about:</p>
        <ul className="ml-5 font-medium text-lg">
          <li>
            <p>&rarr; Full Stack Developer</p>
          </li>
          <li>
            <p>&rarr; CS Undergrad at KIIT University</p>
          </li>
        </ul>
        <p className="dark:text-white/50 text-slate-900 font-medium text-md mt-4">currently:</p>
        <ul className="ml-5 font-medium text-lg">
          <li>
            <p>
              &rarr; building{" "}
              <span
                className="cursor-pointer border-b-2 border-b-shade-light-blue"
                onClick={translateText}
              >
                {text}
              </span>{" "}
              frontends🌸
            </p>
          </li>
          <li>
            <p>&rarr; improving backend and typescript skills🌱</p>
          </li>
          <li>
            <p>&rarr; learning react-native and infra 🔨</p>
          </li>
        </ul>
      </div>
      <p className="text-md">
        I&apos;m up for frontend internships rn, hit me up at{" "}
        <a
          className="text-shade-light-blue font-medium border-shade-light-blue"
          href="mailto:thegeorgenikhil@gmail.com"
        >
          email
        </a>{" "}
        /{" "}
        <a
          className="border-shade-light-blue font-medium text-shade-light-blue"
          href="https://twitter.com/messages/compose?recipient_id=1265285162054545408"
        >
          twitter
        </a>
        .
      </p>
    </div>
  );
};

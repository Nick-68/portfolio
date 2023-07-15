import { useEffect, useRef } from "react";

export const ThemeChange = () => {
  const moonIconRef = useRef(null);
  const sunIconRef = useRef(null);
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-schema: dark)").matches;

  // const iconToggle = () => {
  //   moonIconRef.current.classList.toggle(
  //     "display-none",
  //     document.documentElement.classList.contains("dark")
  //   );
  //   sunIconRef.current.classList.toggle(
  //     "display-none",
  //     !document.documentElement.classList.contains("dark")
  //   );
  // };

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      // moonIconRef.current.classList.add("display-none");
    } else {
      document.documentElement.classList.remove("dark");
      // sunIconRef.current.classList.add("display-none");
    }
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      // iconToggle();
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      // iconToggle();
    }
  };

  useEffect(() => {
    themeCheck();
  }, [themeCheck]);

  return (
    <div className="flex justify-center mb-10">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="peer opacity-0"
          onClick={themeSwitch}
        ></input>
        <div className="w-14 h-7 bg-slate-300 rounded-full after:content-[''] after:absolute after:w-7 after:h-7 after:rounded-full after:bg-white peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );
};

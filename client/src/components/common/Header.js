import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../../components";
import Resume from "../../assets/docs/resume.txt";
import { TfiMenu } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Header = ({ isDesktop }) => {
  const [theme, setTheme] = useTheme();
  const { isShowMenu } = useSelector((state) => state.menu);
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex justify-between">
      <div
        className={twMerge(
          clsx(
            "w-full text-3xl font-bold text-black p-4 pt-[100px] bg-blue-400",
            theme === "dark" && "bg-black text-white"
          )
        )}
      >
        {isDesktop && (
          <div
            className="fixed top-0 right-0 text-black cursor-pointer px-2 py-4 z-10 bg-gray-300 w-[50px] rounded-l-md"
            onClick={handleTheme}
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </div>
        )}
        <h3 className="text-blue-700 select-none">Hi I'm a</h3>
        <div className="select-none">
          <Typewriter
            options={{
              strings: [
                "FullStack Developer!",
                "PERN developer!",
                "React.JS developer!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex gap-4 items-center">
          <Button children="Hire Me" />
          <a
            href={Resume}
            download="soyeulilich.pdf"
            className="px-4 py-2 rounded-md text-gray-300 hover:bg-green-500 animate-pulse text-center hover:w-[250px] bg-orange-400"
          >
            My Resume
          </a>
        </div>
      </div>
      {isShowMenu && (
        <span className="top-0 right-0 p-4 fixed z-10">
          <TfiMenu size={30} color={theme==='dark'?"white":"black"} />
        </span>
      )}
    </div>
  );
};

export default Header;

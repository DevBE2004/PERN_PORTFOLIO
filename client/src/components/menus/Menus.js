import React from "react";
import Navigation from "../common/Navigation";
import avatar from "../../assets/avatar.png";
import { useTheme } from "../../context/ThemeContext";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Menus = ({ toggle }) => {
  const [theme] = useTheme();
  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-col w-full h-full",
          theme === "dark" && "bg-black text-white"
        )
      )}
    >
      {toggle && (
        <div className="w-full">
          <img
            src={avatar}
            alt="avatar"
            className="h-40 w-40 rounded-full my-8 mx-auto animate-scale-up-center"
          />
        </div>
      )}
      <div className="h-full min-h-screen w-full">
        <Navigation toggle={toggle} />
      </div>
    </div>
  );
};

export default Menus;

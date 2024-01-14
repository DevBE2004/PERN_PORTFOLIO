import React from "react";
import logo from "../../assets/logo_name.png";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const [theme] = useTheme();
  return (
    <div
      className={twMerge(
        clsx(
          "w-full bg-blue-400 md:p-10",
          theme === "dark" && "bg-black text-white"
        )
      )}
    >
      <div className="h-full grid grid-cols-5">
        <div className="col-span-3 my-auto">
          <img
            src={logo}
            alt="logo"
            className="rounded-md w-[100px] h-[100px] object-fill"
          />
          <p className=""></p>
        </div>
        <div className="col-span-2 flex flex-col items-start">
          <span className="font-semibold text-2xl py-3">Other</span>
          <span className="flex flex-col justify-center flex-wrap gap-1">
            <span className="flex items-center flex-wrap gap-1">
              <span className="font-semibold text-sm text-gray-700">
                Email:
              </span>
              <span className="text-xs text-gray-600">
                leantu2004@gmail.com
              </span>
            </span>
            <span className="flex items-center flex-wrap gap-1">
              <span className="font-semibold text-sm text-gray-700">
                Location:
              </span>
              <span className="text-xs text-gray-600">
                63 Tô Hiến Thành, Duy Tân, Kon Tum, Kon Tum
              </span>
            </span>
          </span>
          <span className="flex items-center flex-wrap gap-1">
            <span className="font-semibold text-sm text-gray-700">Phone: </span>
            <span className="text-xs text-gray-600">0392843805</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

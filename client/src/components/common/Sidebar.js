import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Menus from "../menus/Menus";
import { setIsShowMenu } from "../../store/Menu/menuSlice";
import { twMerge } from "tailwind-merge";
import { setMenuLeft } from "../../store/Menu/menuSlice";
import { icons } from "../../utils/icon";
import { useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
const { BsChevronDoubleLeft, BsChevronDoubleRight } = icons;

const Sidebar = () => {
  const dispatch = useDispatch();
  const [theme] = useTheme();
  const [toggle, settoggle] = useState(true);
  var screenWidth = window.innerWidth;
  const handleToggle = () => {
    dispatch(setMenuLeft({ menuleft: !toggle }));
    settoggle(!toggle);
  };
  const showMenuBar = () => {
    if (screenWidth && screenWidth < 768)
      dispatch(setIsShowMenu({ isShowMenu: true }));
    else dispatch(setIsShowMenu({ isShowMenu: false }));
  };
  useEffect(() => {
    // if (screenWidth && 768 <= screenWidth <= 1024) settoggle(false);
    showMenuBar();
  }, [screenWidth]);
  return (
    <div
      className={twMerge(
        clsx(
          "w-[50px] bg-slate-400 hidden md:block fixed z-10",
          toggle && "w-[230px]"
        )
      )}
    >
      <span
        onClick={handleToggle}
        className={twMerge(
          clsx(
            "cursor-pointer flex justify-end",
            theme === "dark" && "bg-black text-white"
          )
        )}
      >
        {toggle ? (
          <BsChevronDoubleLeft size={30} title="close" />
        ) : (
          <BsChevronDoubleRight size={30} title="open" />
        )}
      </span>
      <div className="flex items-center justify-center">
        <Menus toggle={toggle} />
      </div>
    </div>
  );
};

export default Sidebar;

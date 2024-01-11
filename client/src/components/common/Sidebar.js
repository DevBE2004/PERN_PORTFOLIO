import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Menus from "../menus/Menus";
import { setIsShowMenu } from "../../store/Menu/menuSlice";
import { twMerge } from "tailwind-merge";
import { icons } from "../../utils/icon";
import { useDispatch } from "react-redux";
const { BsChevronDoubleLeft, BsChevronDoubleRight } = icons;

const Sidebar = () => {
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState(true);
  var screenWidth = window.innerWidth;
  const handleToggle = () => {
    settoggle(!toggle);
    // dispatch(setMenuLeft({ menuleft: toggle }));
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
        clsx("w-[50px] bg-slate-400 hidden md:block", toggle && "w-[230px]")
      )}
    >
      <span onClick={handleToggle} className="cursor-pointer flex justify-end">
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

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { FaWindowClose } from "react-icons/fa";
import { setShowModal } from "../../store/Menu/menuSlice";
import { useDispatch } from "react-redux";
import { navigationProfile } from "../../utils/contant";
import { useNavigate } from "react-router-dom";
import SwitchCustom from "./SwitchCustom";

const MenuRight = () => {
  const [theme, setTheme] = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={twMerge(
        clsx(
          "text-3xl text-blue-600 overflow-y-auto fixed w-full h-screen",
          theme === "light" && "bg-blue-400"
        )
      )}
    >
      <div className="flex justify-end">
        <span
          className="cursor-pointer p-4"
          onClick={() => {
            dispatch(setShowModal({ isShowModal: false, Modal: null }));
          }}
        >
          <FaWindowClose
            size={40}
            color={theme === "light" ? "black" : "white"}
          />
        </span>
      </div>
      <div>
        {navigationProfile.map((el) => (
          <div
            onClick={() => {
              navigate(el.path);
              window.scrollTo(0, 0);
              dispatch(setShowModal({ isShowModal: false, Modal: null }));
            }}
            key={el.id}
            className={twMerge(
              clsx(
                "flex items-center justify-center border-b hover:underline cursor-pointer border-blue-400 w-full gap-2"
              )
            )}
          >
            <span
              className={twMerge(
                clsx(
                  "flex items-center justify-center w-full p-4 mt-3",
                  theme === "light" && "bg-blue-300"
                )
              )}
            >
              {el.title}
            </span>
          </div>
        ))}
        <span
          className={twMerge(
            clsx(
              "flex justify-center items-center p-4 mt-3 border-b border-blue-400",
              theme === "light" && "bg-blue-300"
            )
          )}
        >
          <span>Dark mode:</span>
          <SwitchCustom />
        </span>
      </div>
    </div>
  );
};

export default MenuRight;

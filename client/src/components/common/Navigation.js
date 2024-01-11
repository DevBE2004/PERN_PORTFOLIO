import React from "react";
import { navigationProfile } from "../../utils/contant";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Navigation = ({ toggle }) => {
  return (
    <div className={clsx(!toggle && "mt-8")}>
      {navigationProfile.map((el) => (
        <NavLink
          to={el.path}
          key={el.id}
          className={({ isActive }) =>
            twMerge(
              clsx("flex items-center gap-2 p-4", isActive && "bg-blue-300")
            )
          }
        >
          <span className="">{el.icon}</span>
          {toggle && <span className="font-bold">{el.title}</span>}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;

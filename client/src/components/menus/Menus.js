import React from "react";
import Navigation from "../common/Navigation";
import avatar from "../../assets/avatar.png";

const Menus = ({ toggle }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {toggle && (
        <div className="w-full">
          <img
            src={avatar}
            alt="avatar"
            className="h-40 w-40 rounded-full my-8 mx-auto"
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

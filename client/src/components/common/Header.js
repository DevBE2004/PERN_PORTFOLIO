import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../../components";
import Resume from "../../assets/docs/resume.txt";
import { TfiMenu } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Header = () => {
  const { isShowMenu } = useSelector((state) => state.menu);
  return (
    <div className="flex justify-between relative">
      <div className="w-full text-3xl font-bold text-blue-500 p-4 pt-[100px] bg-[#91a8c9]">
        <h3 className="text-black">Hi I'm a</h3>
        <Typewriter
          options={{
            strings: [
              "FullStack Developer! ",
              "PERN developer! ",
              "React navtie developer! ",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="flex gap-4 items-center">
          <Button children="Hire Me" />
          <a
            href={Resume}
            download="your_name.pdf"
            className="px-4 py-2 rounded-md text-gray-300 hover:bg-green-500 animate-pulse text-center hover:w-[250px] bg-orange-400"
          >
            My Resume
          </a>
        </div>
      </div>
      {isShowMenu && (
        <span className="top-0 right-0 p-4 absolute">
          <TfiMenu size={30} />
        </span>
      )}
    </div>
  );
};

export default Header;

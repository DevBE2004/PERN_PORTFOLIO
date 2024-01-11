import React, { useState } from "react";
import { projectList } from "../../utils/contant";
import clsx from "clsx";

const Project = () => {
  const [addView, setaddView] = useState([]);
  const handleAddView = (id) => {
    if (!addView.find((el) => el.id === id))
      setaddView((prev) => [...prev, { id }]);
    else setaddView((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="w-full mt-8">
      <div className="text-center">
        <h2 className="text-3xl text-blue-400 font-semibold uppercase text-center">
          Top recent Projects
        </h2>
        <p className="text-gray-500 italic">
          here are my top 3 recent project with live links and sourse code
        </p>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {projectList.map((el) => (
          <div
            key={el.id}
            className="flex flex-col justify-center border border-black p-3 gap-2 rounded-md"
          >
            <span className="font-semibold">FullStack Project {el.name}</span>
            <span className="flex gap-2">
              <span className="font-semibold">Tech: </span>
              <span>{el.tech}</span>
            </span>
            <img
              src={el.image}
              alt="Project image"
              className="w-[200px] h-[100px] object-cover"
            />
            <span className="flex gap-2">
              <span className="font-semibold">Description: </span>
              <span className="">
                <span
                  className={clsx(
                    !addView.some((item) => item.id === el.id) && "line-clamp-3"
                  )}
                >
                  {el.description}
                </span>
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => handleAddView(el.id)}
                >
                  {el.description
                    ? addView.some((item) => item.id === el.id)
                      ? "thu gọn"
                      : "xem thêm"
                    : ""}
                </span>
              </span>
            </span>
            {el.link && (
              <a
                href={el.link}
                rel="noreferrer"
                target="_blank"
                className="text-blue-400 hover:underline cursor-pointer text-center mt-4"
              >
                Click here
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

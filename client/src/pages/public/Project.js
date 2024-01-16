import React, { useState } from "react";
import { projectList } from "../../utils/contant";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickImage,
  setCurrentImage,
  setShowModal,
} from "../../store/Menu/menuSlice";
import { ZoomImage } from "../../components";

const Project = () => {
  const [addView, setaddView] = useState([]);
  const dispatch = useDispatch();
  const { clickImage } = useSelector((state) => state.menu);
  const handleAddView = (id) => {
    if (!addView.find((el) => el.id === id))
      setaddView((prev) => [...prev, { id }]);
    else setaddView((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="w-full pt-8">
      <div className="text-center">
        <h2 className="text-3xl text-blue-400 font-semibold text-center">
          Top Recent Projects
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
              onClick={() => {
                if (!clickImage) {
                  dispatch(
                    setShowModal({
                      isShowModal: true,
                      modalChildrent: <ZoomImage el={el} />,
                    })
                  );
                  dispatch(setClickImage({ clickImage: true }));
                  dispatch(setCurrentImage({ currentImage: el.image }));
                }
              }}
              src={el.image}
              alt="Project image"
              className={twMerge(
                clsx("w-[200px] h-[100px] object-cover cursor-pointer")
              )}
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
                className="text-white font-semibold hover:underline cursor-pointer text-center mt-4 px-6 py-2 bg-blue-600 rounded-md hover:bg-green-600"
              >
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import {
  setClickImage,
  setCurrentImage,
  setShowModal,
} from "../../store/Menu/menuSlice";

const ZoomImage = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-[500px]"
      onClick={() => {
        dispatch(
          setShowModal({
            isShowModal: false,
            modalChildrent: null,
          })
        );
        dispatch(setClickImage({ clickImage: false }));
        dispatch(setCurrentImage({ currentImage: null }));
      }}
    >
      <img
        src={el.image}
        alt="Project image"
        className={twMerge(
          clsx("w-full h-full object-contain min-h-screen md:object-fit")
        )}
      />
    </div>
  );
};

export default ZoomImage;

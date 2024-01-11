import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  className,
  classNameContainer,
  onClick,
  disabled = false,
}) => {
  return (
    <div className={classNameContainer}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          "px-4 py-2 rounded-md bg-blue-600 text-gray-300 hover:bg-green-500 animate-pulse hover:w-[200px]",
          className,
          disabled && "animate-none opacity-50"
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

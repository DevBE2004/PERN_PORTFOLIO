import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const InputForm = ({
  id,
  register,
  validate,
  errors,
  placeholder,
  type = "text",
  clasNameContainer,
  className,
  onChange,
  rows = 5,
}) => {
  return (
    <div
      className={twMerge(clsx("flex flex-col p-2 w-full ", clasNameContainer))}
    >
      <label htmlFor={id} className=" font-semibold text-2xl text-blue-500">
        {id}
      </label>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        rows={rows}
        className={twMerge(
          clsx("p-2 rounded-md w-full outline-none", className)
        )}
        {...register(id, validate)}
      />
      {errors[id]?.message && (
        <p className="text-xs text-red-500">{errors[id].message}</p>
      )}
    </div>
  );
};

export default InputForm;

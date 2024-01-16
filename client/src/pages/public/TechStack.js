import React from "react";
import { techStackList } from "../../utils/contant";

const TechStack = () => {
  return (
    <div className="pt-10">
      <h2 className="text-3xl text-center border-b-2 border-blue-300 font-semibold text-blue-400">
        Technologies Stack
      </h2>
      <p className="text-center text-gray-500 italic">
        bao gồm ngôn ngữ lập trình, khung, cơ sở dữ liệu, công cụ và API
        font-end và back-end:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {techStackList.map((el) => (
          <div key={el.id} className="hover:bg-blue-400 cursor-default">
            <div className="animate-slide-right flex items-center gap-2 justify-center rounded-md border border-black p-3 hover:animate-bounce">
              <span className="text-3xl">{el.icon}</span>
              <span className="text-3xl">{el.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { icons } from "../../utils/icon";
import { educationList } from "../../utils/contant";
import { useTheme } from "../../context/ThemeContext";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const { IoMdSchool } = icons;
const Education = () => {
  const [theme] = useTheme();
  return (
    <div className="w-full pt-8">
      <div className="text-center w-full">
        <h2 className="text-3xl text-blue-400 font-semibold text-center">
          Education Details
        </h2>
        {/* <p className="text-gray-500 italic">
          here are my top 3 recent project with live links and sourse code
        </p> */}
        <VerticalTimeline>
          {educationList?.map((el) => (
            <VerticalTimelineElement
              key={el.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: theme === "dark" ? "white" : "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={el.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title text-3xl font-semibold">
                {el.title}
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p className="text-gray-700">{el.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;

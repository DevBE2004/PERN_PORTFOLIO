import React from "react";
import About from "./About";
import TechStack from "./TechStack";
import Project from "./Project";

const Home = () => {
  return (
    <div className="min-h-screen h-full w-full">
      <About />
      <TechStack />
      <Project />
      <div className="h-[300px]"></div>
    </div>
  );
};

export default Home;

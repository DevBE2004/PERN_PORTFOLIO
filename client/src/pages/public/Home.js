import React from "react";
import About from "./About";
import { TechStack, Project, Education, WorkExperince, Contact } from ".";

const Home = () => {
  return (
    <div className="min-h-screen h-full w-full">
      <About />
      <TechStack />
      <Project />
      <Education />
      <WorkExperince />
      <Contact />
    </div>
  );
};

export default Home;

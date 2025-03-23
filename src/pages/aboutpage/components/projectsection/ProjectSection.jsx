import React from "react";
import { MethodologyTab } from "../../../../components/tab/MethodologyTab";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <h1 className="font-bold text-2xl lg:text-3xl text-center">
        Our Projects
      </h1>
      <MethodologyTab classname1="flex" />
    </div>
  );
};

export default ProjectSection;

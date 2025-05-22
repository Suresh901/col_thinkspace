import React from "react";
import { MethodologyTab } from "../../../../components/tab/MethodologyTab";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <h1
        className="font-bold text-2xl lg:text-3xl text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our Projects
      </h1>
      <MethodologyTab classname1="flex" />
    </div>
  );
};

export default ProjectSection;

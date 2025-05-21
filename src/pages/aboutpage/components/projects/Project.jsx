import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import image from "../../../../assets/image/Frame5.png";

const Project = () => {
  const projectRef = useRef(null);
  const membersRef = useRef(null);
  const yearsRef = useRef(null);

  const { start: startProjects, reset: resetProjects } = useCountUp({
    ref: projectRef,
    start: 0,
    end: 100,
    duration: 3,
    separator: ",",
  });

  const { start: startMembers, reset: resetMembers } = useCountUp({
    ref: membersRef,
    start: 0,
    end: 15,
    duration: 3,
    separator: ",",
  });

  const { start: startYears, reset: resetYears } = useCountUp({
    ref: yearsRef,
    start: 0,
    end: 2,
    duration: 3,
    separator: ",",
  });

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      startProjects();
      startMembers();
      startYears();
    } else {
      resetProjects();
      resetMembers();
      resetYears();
    }
  }, [
    inView,
    startProjects,
    resetProjects,
    startMembers,
    resetMembers,
    startYears,
    resetYears,
  ]);

  return (
    <div ref={ref} className=" mb-20 max-w-7xl mx-auto text-white   ">
      <div className="border flex-col md:flex-row bg-gradient-to-t from-[#2816CA] to-[#B51AEE] gap-20 p-20  flex items-center justify-center  rounded-xl">
        {/* Projects Completed */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Projects Completed</h2>
          <div ref={projectRef} className="text-4xl font-bold " />
        </div>
        {/* Team Members */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Team Members</h2>
          <div ref={membersRef} className="text-4xl font-bold " />
        </div>
        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Years of Experience</h2>
          <div ref={yearsRef} className="text-4xl font-bold " />
        </div>
      </div>
    </div>
  );
};

export default Project;

import React from "react";
import TeamSlider from "../../components/slider/TeamSlider";

const team = () => {
  return (
    <div className="md:px-12 relative py-48">
      <div className="text-md sm:text-lg md:text-xl lg:text-6xl text-center mb-10 ">
        <h1 className="font-bold">People Who Bring </h1>
        <span className="text-gradient bg-text-gradient font-bold">
          Colors to your Idea
        </span>
      </div>
      <div className="flex items-center justify-center mt-20 mb-20"></div>
      <div>{/* <TeamSlider /> */}</div>
    </div>
  );
};

export default team;

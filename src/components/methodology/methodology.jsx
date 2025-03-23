import React from "react";
import { MethodologyTab } from "../tab/MethodologyTab";
const methodology = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col px-12 justify-between md:text-center gap-5">
        <h1 className="font-bold text-2xl lg:text-3xl">Our Methodology</h1>
        <p className="mx-auto max-w-screen-sm text-md md:text-xl">
          We transform ideas into reality by leveraging tailored tools and
          technology, collaborating closely to achieve strategic goals while
          overcoming administrative, resource, and technological challenges.
        </p>
      </div>
      <MethodologyTab />
    </div>
  );
};

export default methodology;

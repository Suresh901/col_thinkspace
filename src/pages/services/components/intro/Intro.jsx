import React from "react";

const Intro = ({ filteredService }) => {
  return (
    <div className=" flex flex-col justify-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center py-20 ">
        {filteredService[0].heading}
      </h1>
      <div className="flex flex-col lg:flex-row pt-10">
        <div className="lg:w-1/2 flex flex-col gap-5 ">
          <h1 className="font-bold text-xl md:text-3xl">Service Overview</h1>
          <p className="text-lg md:text-xl leading-relaxed lg:pr-10 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            labore totam recusandae explicabo placeat a sit est, libero fugit
            facere non asperiores ipsum blanditiis voluptate? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Ab tempore odit dolores, quas
            beatae aut possimus eaque, libero sint temporibus ex quod inventore
            eum voluptates!
          </p>
          <div>
            <button
              className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-xl tracking-tight 
            text-white shadow-[inset_0_0.15rem_0_#B51AEE,inset_0_-0.12rem_0_#2816CA] max-lg:px-4 max-lg:py-3 
            max-lg:text-sm max-sm:rounded-lg max-sm:px-4 max-sm:py-2 max-sm:text-sm"
            >
              Read More....
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 md:px-6 pt-10 lg:pt-0">
          <img
            src={filteredService[0].image}
            alt={filteredService[0].heading}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

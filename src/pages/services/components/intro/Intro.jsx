import React from "react";
import { Link } from "react-router-dom";

const Intro = ({ filteredService }) => {
  return (
    <div className=" flex flex-col justify-center">
      <div className="text-sm sm:text-base font-medium text-gray-600 space-x-1 mt-10">
        <Link to="/" className=" hover:underline cursor-pointer">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span>Services</span>
        <span className="mx-1">/</span>
        <span className="text-gray-800 font-semibold">
          {filteredService[0]?.heading}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row pt-10">
        <div className="lg:w-1/2 flex flex-col gap-5 ">
          <h1 className="text-2xl md:text-4xl  font-bold py-5 ">
            {filteredService[0].heading}
          </h1>
          <h1 className="font-bold text-xl md:text-2xl">Service Overview</h1>
          <p className="text-lg  leading-relaxed lg:pr-10 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            labore totam recusandae explicabo placeat a sit est, libero fugit
            facere non asperiores ipsum blanditiis voluptate? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Ab tempore odit dolores, quas
            beatae aut possimus eaque, libero sint temporibus ex quod inventore
            eum voluptates!
          </p>
          <div>
            <Link to="/contact">
              <div className="p-[2px] rounded-xl max-sm:rounded-lg  md:rounded-2xl inline-block bg-text-gradient w-1/3">
                <button
                  type="button"
                  className="rounded-xl max-sm:rounded-lg  md:rounded-2xl px-6 py-3 text-xl bg-white w-full h-full max-lg:px-4 max-lg:py-3 max-lg:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-sm"
                >
                  Start
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:px-6 pt-10 lg:pt-0">
          <img
            src={filteredService[0].image}
            alt={filteredService[0].heading}
            className="w-full h-auto max-h-[500px] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

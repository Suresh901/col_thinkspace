import React from "react";
import ServicesCard from "../card/ServicesCard";

const ServicesComponent = () => {
  return (
    <div className="sm:px-6 md:px-12 mb-28 mt-20">
      <h1 className="font-bold text-2xl mb-5 text-center ">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 mt-10 px-6 ">
        <ServicesCard />
      </div>
    </div>
  );
};

export default ServicesComponent;

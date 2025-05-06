import React from "react";
import ServicesCard from "../card/ServicesCard";

const ServicesComponent = () => {
  return (
    <div className="sm:px-6  my-10">
      <h1 className="mb-5 text-center p-5 font-bold text-2xl lg:text-3xl">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 mb-10 mt-10 px-6 md:mx-5 lg:mx-20">
        <ServicesCard />
      </div>
    </div>
  );
};

export default ServicesComponent;

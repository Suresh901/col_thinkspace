import React from "react";
import ServicesCard from "../card/ServicesCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
 
  return (
    <div className="sm:px-6  my-10" data-aos="fade-up" data-aos-duration="2000">
      <h1 className="mb-5 text-center p-5 font-bold text-2xl lg:text-3xl">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 mb-10 mt-10 px-6 mx-auto max-w-7xl">
        <ServicesCard />
      </div>
    </div>
  );
};

export default ServicesComponent;

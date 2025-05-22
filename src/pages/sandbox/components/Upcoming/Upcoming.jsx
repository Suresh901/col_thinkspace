import React from "react";
import Events from "../events/Events";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Upcoming = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:px-12 my-20">
      <div className="">
        <h1
          className="font-bold text-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Upcoming Events
        </h1>
      </div>
      <div
        className="p-5 flex gap-10 "
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <Events />
      </div>
    </div>
  );
};

export default Upcoming;

import React from "react";
import Events from "../events/Events";

const Upcoming = () => {
  return (
    <div className="md:px-12">
      <div className="">
        <h1 className="font-bold text-xl">Upcoming Events</h1>
      </div>
      <div className="p-5 flex gap-10 ">
        <Events />
      </div>
    </div>
  );
};

export default Upcoming;

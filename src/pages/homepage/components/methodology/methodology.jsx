import React from "react";
import { MethodologyTab } from "../../../../components/tab/MethodologyTab";
const methodology = () => {
  return (
    <div
      className="flex flex-col gap-5 md:gap-10 py-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7130871/pexels-photo-7130871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col px-12 justify-between text-center gap-5">
        <h1 className="font-bold text-2xl lg:text-3xl">Our Methodology</h1>
        <p className="mx-auto max-w-screen-sm text-md md:text-lg">
          We bring bold ideas to life with smart technology and custom solutions
          partnering closely with you to break through barriers, streamline
          operations, and drive real, strategic impact.
        </p>
      </div>
      <MethodologyTab />
    </div>
  );
};

export default methodology;

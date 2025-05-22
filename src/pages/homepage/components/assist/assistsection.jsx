import AssistSlider from "../../../../components/slider/AssistSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const assistsection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className=" md:px-12 mt-10 px-6 mb-20 text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="flex flex-col gap-3 p-5 px-6 "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          Let’s Make It Happen Together
        </h1>
        <p className="text-sm sm:text-md md:text-lg ">
          Get Expert Help, Smart Tool and Real Support That Work For You
        </p>
      </div>
      <div>
        <AssistSlider />
      </div>
    </div>
  );
};

export default assistsection;

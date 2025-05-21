import AssistSlider from "../../../../components/slider/AssistSlider";

const assistsection = () => {
  return (
    <div className=" md:px-12 mt-10 px-6 mb-20 text-center">
      <div className="flex flex-col gap-3 p-5 px-6 ">
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

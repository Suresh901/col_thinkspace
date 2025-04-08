import AssistSlider from "../../../../components/slider/AssistSlider";

const assistsection = () => {
  return (
    <div className=" md:px-12 mt-10 px-6 mb-20">
      <div className="flex flex-col gap-5 p-5 px-6">
        <h1 className="font-bold text-md sm:text-2xl lg:text-3xl">
          How Can We Assist You?
        </h1>
        <p className="text-sm sm:text-md md:text-xl ">
          We’re here to ensure you get exactly what you need—tailored solutions,
          expert guidance, and ongoing support.
        </p>
      </div>
      <div>
        <AssistSlider />
      </div>
    </div>
  );
};

export default assistsection;

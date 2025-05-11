import AnimatedHeading from "../heading/AnimatedHeading";

const herosection = () => {
  return (
    <div className=" z-10 flex flex-col items-center justify-center gap-6 max-sm:px-4 h-[60vh] md:h-[85vh] ">
      <div className="flex flex-col items-center max-sm:px-4 justify-center gap-6">
        <div className="bg-white rounded-full"></div>
        <div className="font-bold text-4xl md:text-5xl lg:text-7xl flex flex-col items-center gap-1">
          <h1 className="flex items-center text-center">
            Elevating the Future <br /> of Innovation
          </h1>
        </div>
        <AnimatedHeading />
        <div>
          <div className="p-[2px] rounded-xl max-sm:rounded-lg  md:rounded-2xl inline-block bg-text-gradient">
            <div className="rounded-xl max-sm:rounded-lg  md:rounded-2xl px-6 py-3 text-xl bg-white w-full h-full max-lg:px-4 max-lg:py-3 max-lg:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-sm">
              Start Exploring
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default herosection;

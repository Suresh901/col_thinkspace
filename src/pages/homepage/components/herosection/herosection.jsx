const herosection = () => {
  return (
    <div className=" z-10 flex flex-col items-center justify-center gap-6 max-sm:px-4 h-[100vh] ">
      <div className="flex flex-col items-center max-sm:px-4 justify-center gap-6">
        <div className="bg-white rounded-full">
          <button className="text-gradient bg-text-gradient text-[10px] sm:text-[15px] border-2 rounded-full p-2 ">
            Discover What's New
          </button>
        </div>
        <div className="font-bold  text-2xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col items-center gap-1">
          <h1 className="flex items-center text-center">
            Elevating the Future <br /> of Innovation
          </h1>
        </div>
        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          <h1>
            Color Your Sketched{" "}
            <span className="text-gradient bg-text-gradient font-bold">
              Idea to life.
            </span>
          </h1>
        </div>
        <div>
          <button className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-xl tracking-tight text-white shadow-[inset_0_0.15rem_0_#B51AEE,inset_0_-0.12rem_0_#2816CA] max-lg:px-4 max-lg:py-3 max-lg:text-sm max-sm:rounded-lg max-sm:px-4 max-sm:py-2 max-sm:text-sm">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default herosection;

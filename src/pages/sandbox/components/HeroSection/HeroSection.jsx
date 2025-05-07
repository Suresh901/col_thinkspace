import React from "react";

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-6 max-sm:px-4  h-[60vh] md:h-[85vh] relative ">
      <div className="flex flex-col items-center max-sm:px-4 justify-center gap-6">
        <div className="font-bold text-4xl md:text-5xl lg:text-6xl flex flex-col items-center gap-1">
          <h1 className="flex items-center text-center">
            Color your Ideas with your
          </h1>
        </div>
        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          <h1 className="text-gradient bg-text-gradient font-bold">
            Next Investor or Co-Founder
          </h1>
        </div>
        <div className="font-bold flex flex-col items-center gap-1">
          <h1 className="flex items-center text-center">
            2 Investors Invested in 3 Startups
          </h1>
        </div>
        <div className="flex gap-5">
          <button className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-xl tracking-tight text-white shadow-[inset_0_0.15rem_0_#B51AEE,inset_0_-0.12rem_0_#2816CA] max-lg:px-4 max-lg:py-3 max-lg:text-sm max-sm:rounded-lg max-sm:px-4 max-sm:py-2 max-sm:text-sm">
            Pitch Your Idea
          </button>
          <button className="rounded-xl px-6 py-3 text-xl border border-black max-lg:px-4 max-lg:py-3 max-lg:text-sm max-sm:rounded-lg max-sm:px-4 max-sm:py-2 max-sm:text-sm">
            Invest In Startup
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

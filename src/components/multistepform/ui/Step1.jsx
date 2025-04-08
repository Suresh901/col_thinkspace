import React from "react";

const Step1 = ({ nextStep }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Let’s start your project and bring your dream into reality.
      </h2>
      <button
        className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] text-white px-4 py-2 rounded"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;

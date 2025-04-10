import { useState } from "react";

import StepsManager from "./components/StepsManager";

const MultiStepForm = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  // const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const nextStep = () => {
    setStep(step + 1);
    setError("");
  };
  const prevStep = () => {
    setStep(step - 1);
    setError("");
  };

  // const handleOption = () => {
  //   setSelectedOption(""); // Reset here
  //   nextStep();
  // };

  const updateFormData = (stepNumber, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepNumber]: value,
    }));
  };

  const totalSteps = 7;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
      <div className=" md:w-1/2">
        <img
          src="https://images.squarespace-cdn.com/content/v1/567762e7a2bab87a744bc8cb/1539156449506-FA8GS9IMM1V7FQVR4859/ReachUs_Artboard+2.png?format=1500w"
          alt="img"
        />
      </div>

      <div className="md:w-1/2 w-full">
        <h2 className="text-lg font-bold mb-4 text-gradient bg-text-gradient">
          {step} / {totalSteps} Steps
        </h2>
        {/* progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
          <div
            className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        <StepsManager
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          error={error}
          setError={setError}
          updateFormData={updateFormData}
          closeModal={closeModal}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default MultiStepForm;

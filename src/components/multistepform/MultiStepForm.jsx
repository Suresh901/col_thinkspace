import { useState } from "react";

import StepsManager from "./components/StepsManager";

const MultiStepForm = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  // const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  // const nextStep = () => {
  //   setStep(step + 1);
  //   setError("");
  // };
  const prevStep = () => {
    setStep(step - 1);
    setError("");
  };

  const updateFormData = (stepNumber, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepNumber]: value,
    }));
  };

  const totalSteps = 7;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      setProgress((step / totalSteps) * 100);
    }
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 ">
      <div className=" w-full px-10">
        {/* progress bar */}
        <h1 className="pb-2 text-gradient bg-text-gradient">
          {Math.round(progress)}%
        </h1>
        <div className="flex flex-col items-end gap-1 ">
          <div className="w-full bg-gray-200 rounded-md h-4  overflow-hidden">
            <div
              className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] h-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <h2 className="text-sm font-bold mb-4 text-gradient bg-text-gradient">
            {step} / {totalSteps} Steps
          </h2>
        </div>
        <StepsManager
          step={step}
          nextStep={handleNext}
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

import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const inputData = {
  heading: "What is your budget for this project?",
  options: [
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
    { value: "opt3", label: "Option 3" },
    { value: "opt4", label: "Option 4" },
  ],
};

const Step4 = ({
  nextStep,
  prevStep,
  handleValueChange,
  error,
  currentValue,
  setError,
}) => {
  const handleNext = () => {
    if (!currentValue) {
      setError("Please select an option");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <InputField
          setSelectedOption={handleValueChange}
          error={error}
          selectedOption={currentValue}
          inputData={inputData}
        />
        <Button
          nextStep={nextStep}
          prevStep={prevStep}
          selectedOption={currentValue}
          setError={setError}
          mode="option"
          name="Next"
        />
      </div>
    </div>
  );
};

export default Step4;

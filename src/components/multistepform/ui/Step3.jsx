import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
const inputData = {
  heading: "What service do you require?",
  options: [
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
    { value: "opt3", label: "Option 3" },
    { value: "opt4", label: "Option 4" },
    { value: "opt5", label: "Option 5" },
    { value: "opt6", label: "Option 6" },
  ],
};

const Step3 = ({
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
  );
};

export default Step3;

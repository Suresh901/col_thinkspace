import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const inputData = {
  heading: "How do you want to work with us?",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};

const Step2 = ({
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
    <div className="flex flex-col  justify-center gap-5">
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

export default Step2;

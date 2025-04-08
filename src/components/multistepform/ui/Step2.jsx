import React, { useState } from "react";
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
  setSelectedOption,
  error,
  selectedOption,
  setError,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <InputField
        setSelectedOption={setSelectedOption}
        error={error}
        selectedOption={selectedOption}
        inputData={inputData}
      />
      <Button
        nextStep={nextStep}
        prevStep={prevStep}
        selectedOption={selectedOption}
        setError={setError}
        name="Next"
      />
    </div>
  );
};

export default Step2;

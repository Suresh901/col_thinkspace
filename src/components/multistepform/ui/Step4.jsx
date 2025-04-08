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
  setSelectedOption,
  error,
  selectedOption,
  setError,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <InputField
          setSelectedOption={setSelectedOption}
          error={error}
          selectedOption={selectedOption}
          inputData={inputData}
        />
        <Button
          prevStep={prevStep}
          nextStep={nextStep}
          selectedOption={selectedOption}
          setError={setError}
          mode="option"
          name="Next"
        />
      </div>
    </div>
  );
};

export default Step4;

import React from "react";
import Button from "../components/Button";

const Step5 = ({
  nextStep,
  prevStep,
  handleValueChange,
  error,
  currentValue,
  setError,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-medium">
        Tell us something about your project
      </h1>
      <textarea
        rows="8"
        className={`outline-none border w-full p-4 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        value={currentValue}
        onChange={(e) => handleValueChange(e.target.value)}
        placeholder="Describe your project details here..."
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <Button
        nextStep={nextStep}
        prevStep={prevStep}
        selectedOption={currentValue}
        setError={setError}
        mode="text" 
        name="Next"
      />
    </div>
  );
};

export default Step5;

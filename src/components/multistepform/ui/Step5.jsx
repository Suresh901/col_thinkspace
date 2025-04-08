import React from "react";
import Button from "../components/Button";

const Step5 = ({
  nextStep,
  prevStep,
  setError,
  selectedOption,
  setSelectedOption,
  error,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Tell us something about your project</h1>
      <textarea
        rows="8"
        className="outline-none border w-full p-4"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <Button
        nextStep={nextStep}
        prevStep={prevStep}
        selectedOption={selectedOption}
        setError={setError}
        mode="text"
        name="Next"
      />
    </div>
  );
};

export default Step5;

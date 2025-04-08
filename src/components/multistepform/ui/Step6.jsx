import React from "react";
import Button from "../components/Button";

const Step6 = ({
  nextStep,
  prevStep,
  selectedOption,
  setSelectedOption,
  setError,
  error,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg">
          Would you mind leaving us your Contact number ?
        </h1>
        <h2 className="text-sm">
          One of our representatives might give you a call or Whatsapp you on
          this number.
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm">
          Contact Number {""}
          <span className="text-red-700 text-lg">*</span>
        </h3>
        <input
          type="number"
          placeholder="Enter Your Number"
          className="border p-2 w-full outline-none"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>},
      <Button
        nextStep={nextStep}
        prevStep={prevStep}
        selectedOption={selectedOption}
        setError={setError}
        mode="number"
        name="Next"
      />
    </div>
  );
};

export default Step6;

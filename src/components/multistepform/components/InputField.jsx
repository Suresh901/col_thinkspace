import React from "react";

const InputField = ({
  setSelectedOption,
  error,
  selectedOption,
  inputData,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg">{inputData.heading}</h2>
      <select
        name="opt"
        className={`outline-none border p-2 w-full ${
          error ? "border-red-500" : ""
        }`}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled>
          ---Please choose an option---
        </option>
        {inputData.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;

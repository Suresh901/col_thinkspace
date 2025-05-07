import React from "react";

const Button = ({
  prevStep,
  nextStep,
  selectedOption,
  setError,
  mode = "option",
  name,
  isSubmit = false,
}) => {
  const handleNext = () => {
    if (mode === "number") {
      if (selectedOption.trim() === "" || isNaN(selectedOption)) {
        setError("Please enter a valid contact number.");
      } else {
        setError("");
        nextStep();
      }
    } else if (mode === "option") {
      if (!selectedOption) {
        setError("Please select an option.");
      } else {
        setError("");
        nextStep();
      }
    } else if (mode === "text") {
      if (selectedOption.trim() === "") {
        setError("This field cannot be empty.");
      } else {
        setError("");
        nextStep();
      }
    }
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <button
        type="button"
        className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] text-white px-4 py-2 rounded"
        onClick={prevStep}
      >
        Previous
      </button>

      <button
        type={isSubmit ? "submit" : "button"} // Important fix
        className="bg-gradient-to-t from-[#2816CA] to-[#B51AEE] text-white px-4 py-2 rounded"
        onClick={!isSubmit ? handleNext : undefined}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

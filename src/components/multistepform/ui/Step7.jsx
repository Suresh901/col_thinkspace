import React, { useState } from "react";
import Button from "../components/Button";

const Step7 = ({
  nextStep,
  prevStep,
  handleValueChange,
  error,
  currentValue,
  setError,
  closeModal,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic here
    if (fullName.trim() === "" || email.trim() === "") {
      setError("Both Full Name and Email are required.");
      return;
    }

    setError("");
    alert("Thank you for your submission!");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h1 className="text-lg">Few general information to contact you</h1>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Your Full Name"
            className="border p-2 outline-none w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className="border p-2 outline-none w-full"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <Button
        nextStep={nextStep}
        prevStep={prevStep}
        selectedOption={currentValue}
        setError={setError}
        mode="text"
        name="Get A Quote"
        isSubmit={true}
      />
    </form>
  );
};

export default Step7;

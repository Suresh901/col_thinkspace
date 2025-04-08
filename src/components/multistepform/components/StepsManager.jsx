import Step1 from "../ui/Step1";
import Step2 from "../ui/Step2";
import Step3 from "../ui/Step3";
import Step4 from "../ui/Step4";
import Step5 from "../ui/Step5";
import Step6 from "../ui/Step6";
import Step7 from "../ui/step7";

const StepsManager = ({
  nextStep,
  prevStep,
  error,
  setError,
  selectedOption,
  setSelectedOption,
  step,
  handleOption,
  closeModal,
}) => {
  const steps = {
    1: <Step1 nextStep={nextStep} />,
    2: (
      <Step2
        nextStep={handleOption}
        prevStep={prevStep}
        error={error}
        setError={setError}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    ),
    3: (
      <Step3
        nextStep={handleOption}
        prevStep={prevStep}
        setSelectedOption={setSelectedOption}
        error={error}
        setError={setError}
        selectedOption={selectedOption}
      />
    ),
    4: (
      <Step4
        nextStep={handleOption}
        prevStep={prevStep}
        setSelectedOption={setSelectedOption}
        error={error}
        setError={setError}
        selectedOption={selectedOption}
      />
    ),
    5: (
      <Step5
        nextStep={handleOption}
        prevStep={prevStep}
        setSelectedOption={setSelectedOption}
        error={error}
        setError={setError}
        selectedOption={selectedOption}
      />
    ),
    6: (
      <Step6
        nextStep={handleOption}
        prevStep={prevStep}
        setSelectedOption={setSelectedOption}
        error={error}
        setError={setError}
        selectedOption={selectedOption}
      />
    ),
    7: (
      <Step7
        nextStep={handleOption}
        prevStep={prevStep}
        setSelectedOption={setSelectedOption}
        error={error}
        setError={setError}
        selectedOption={selectedOption}
        closeModal={closeModal}
      />
    ),
  };
  return steps[step];
};

export default StepsManager;

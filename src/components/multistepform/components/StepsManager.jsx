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
  step,
  updateFormData,
  closeModal,
  formData,
}) => {
  const currentValue = formData[step] || "";

  const handleValueChange = (value) => {
    updateFormData(step, value);
  };

  const stepProps = {
    currentValue,
    handleValueChange,
    error,
    setError,
    nextStep,
    prevStep,
    formData,
  };

  const steps = {
    1: <Step1 {...stepProps} />,
    2: <Step2 {...stepProps} />,
    3: <Step3 {...stepProps} />,
    4: <Step4 {...stepProps} />,
    5: <Step5 {...stepProps} />,
    6: <Step6 {...stepProps} />,
    7: <Step7 {...stepProps} closeModal={closeModal} />,
  };

  return steps[step];
};

export default StepsManager;

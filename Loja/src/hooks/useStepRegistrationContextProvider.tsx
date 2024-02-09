import { useState } from "react";

type StepType = 1 | 2 | 3;

function useStepRegistrationContextProvider() {
  const [step, setStep] = useState<StepType>(1);

  function handleStepOne() {
    setStep(2);
  }
  function handleStepTwo() {
    setStep(3);
  }
  function handleStepThree() {
    setStep(1);
  }

  return {
    step,
    setStep,
    handleStepOne,
    handleStepTwo,
    handleStepThree,
  };
}

export default useStepRegistrationContextProvider;

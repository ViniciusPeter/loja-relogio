import { useState } from "react";

type StepType = 1 | 2 | 3;

function useStepRegistrationContextProvider() {
  const [step, setStep] = useState<StepType>(1);

  function handleStepOne() {
    setStep(1);
  }
  function handleStepTwo() {
    setStep(2);
  }
  function handleStepThree() {
    setStep(3);
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

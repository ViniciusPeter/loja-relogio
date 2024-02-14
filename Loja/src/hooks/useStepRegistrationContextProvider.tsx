import { useState } from "react";

type StepType = 1 | 2 | 3;

function useStepRegistrationContextProvider() {
  const [step, setStep] = useState<StepType>(3);

  function handleStepOne() {
    setStep(1);
    console.log("ok One", step);
  }
  function handleStepTwo() {
    setStep(2);
    console.log("ok two", step);
  }
  function handleStepThree() {
    setStep(3);
    console.log("ok Three", step);
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

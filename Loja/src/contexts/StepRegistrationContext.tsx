import { createContext, Dispatch, SetStateAction } from "react";

type StepType = 1 | 2 | 3;

type StepRegistrationContextType = {
  step: StepType;
  setStep: Dispatch<SetStateAction<StepType>>;
  handleStepOne: () => void;
  handleStepTwo: () => void;
  handleStepThree: () => void;
};

const StepRegistrationContext = createContext<StepRegistrationContextType>({
  step: 1,
  setStep: () => {},
  handleStepOne: () => {},
  handleStepTwo: () => {},
  handleStepThree: () => {},
});

export default StepRegistrationContext;

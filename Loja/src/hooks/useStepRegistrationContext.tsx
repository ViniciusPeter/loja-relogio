import { useContext } from "react";
import StepRegistrationContext from "../contexts/StepRegistrationContext";

function useStepRegistrationContext() {
  return useContext(StepRegistrationContext);
}

export default useStepRegistrationContext;

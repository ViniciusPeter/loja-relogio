import useStepRegistrationContextProvider from "../hooks/useStepRegistrationContextProvider";
import StepRegistrationContext from "./StepRegistrationContext";

type Props = {
  children: JSX.Element;
};

function StepRegistrationContextProvider(props: Props) {
  const valuesProvider = useStepRegistrationContextProvider();

  return (
    <StepRegistrationContext.Provider value={valuesProvider}>
      {props.children}
    </StepRegistrationContext.Provider>
  );
}

export default StepRegistrationContextProvider;

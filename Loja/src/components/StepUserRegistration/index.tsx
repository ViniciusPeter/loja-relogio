import StepAddressRegister from "../StepAddressRegister";
import StepPasswordRegister from "../StepPasswordRegister";
import StepUserRegister from "../StepUserRegister";
import styles from "./styles.module.scss";

function StepUserRegistration() {
  return (
    <div className={styles.container}>
      <StepUserRegister />
      <StepPasswordRegister />
      <StepAddressRegister />
    </div>
  );
}

export default StepUserRegistration;

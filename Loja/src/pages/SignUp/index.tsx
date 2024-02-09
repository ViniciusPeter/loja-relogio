import StepUserRegistration from "../../components/StepUserRegistration";
import styles from "./styles.module.scss";

function SignUp() {
  return (
    <div className={styles.container}>
      <StepUserRegistration />
    </div>
  );
}

export default SignUp;

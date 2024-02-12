import StepUserRegistration from "../../components/UserRegistration";
import styles from "./styles.module.scss";

function SignUp() {
  return (
    <div className={styles.container}>
      <StepUserRegistration />
    </div>
  );
}

export default SignUp;

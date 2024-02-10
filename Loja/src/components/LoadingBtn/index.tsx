import styles from "./styles.module.scss";
import IconLoading from "../../assets/Eclipse-loading.svg";
import IconLoading2 from "../../assets/Double Ring-loading.svg";
import IconLoading3 from "../../assets/cube-loading.svg";
import IconLoading4 from "../../assets/ingrenagem-loading.svg";

function LoadingBtn() {
  return (
    <div className={styles.container}>
      <img src={IconLoading} alt="Loading" />
    </div>
  );
}

export default LoadingBtn;

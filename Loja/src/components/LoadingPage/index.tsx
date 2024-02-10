import styles from "./styles.module.scss";
import IconLoading from "../../assets/Eclipse-loading.svg";
import IconLoading2 from "../../assets/Double Ring-loading.svg";
import IconLoading3 from "../../assets/cube-loading.svg";
import IconLoading4 from "../../assets/ingrenagem-loading.svg";
import useGlobalContextProvider from "../../hooks/useGlobalContextProvider";

function LoadingPage() {
  const { openLoadingPage } = useGlobalContextProvider();

  return (
    <>
      {openLoadingPage && (
        <div className={styles.container}>
          <img src={IconLoading2} alt="Loading" />
        </div>
      )}
    </>
  );
}

export default LoadingPage;

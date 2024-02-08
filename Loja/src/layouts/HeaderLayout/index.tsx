import { Outlet } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal";
import Header from "../../components/Header";
import useGlobalContext from "../../hooks/useGlobalContext";
import styles from "./styles.module.scss";

function HeaderLayout() {
  const { handleConfirmModal, openModal, handleCloseModal } =
    useGlobalContext();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["content-page"]}>
        {/* <h2>Replicas de Relógios</h2> */}
        <Outlet />
      </div>

      <ConfirmModal
        open={openModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmModal}
      />
    </div>
  );
}

export default HeaderLayout;

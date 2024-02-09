import { Outlet } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal";
import Header from "../../components/Header";
import useGlobalContext from "../../hooks/useGlobalContext";
import styles from "./styles.module.scss";
import Search from "../../components/Search";

function HeaderLayout() {
  const { handleConfirmModal, openModal, handleCloseModal, openSearch } =
    useGlobalContext();

  return (
    <div className={styles.container}>
      <Header />

      {!openSearch && <Search />}

      <div className={styles["content-page"]}>
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

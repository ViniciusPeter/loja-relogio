import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import useGlobalContext from "../../hooks/useGlobalContext";

function Header() {
  const [openSideBar, setOpensidebar] = useState<Boolean>(false);
  const { openSearch, setOpenSearch } = useGlobalContext();

  function handleSeach() {
    setOpenSearch(!openSearch);
  }

  return (
    <header className={styles.header}>
      <div onClick={() => setOpensidebar(true)}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </div>

      <Link to="/main">
        <h1 className="logo">Relógios</h1>
      </Link>

      <div className={styles["container-car-search"]}>
        <div className={styles.seach} onClick={handleSeach}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <div>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
            />
          </svg>
        </div>
      </div>

      <SideBar openSideBar={openSideBar} setOpenSidebar={setOpensidebar} />
    </header>
  );
}

export default Header;

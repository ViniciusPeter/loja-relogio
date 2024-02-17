import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useGlobalContext from "../../hooks/useGlobalContext";
import styles from "./styles.module.scss";
import CategoryCard from "../../components/CategoryCard";
import ImgCasio from "../../assets/casio-8392121_1920.jpg";
import ImgOmega from "../../assets/analog-watch-1869928_1920.jpg";
import ImgRolex from "../../assets/clock-1075801_1920.jpg";
import ImgTagHeuer from "../../assets/clock-1461689_1920.jpg";
import ImgPatekPhilippe from "../../assets/clock-3005574_1920.jpg";
import ImgHublot from "../../assets/clock-407101_1920.jpg";
import ImgLongines from "../../assets/clock-756487_1920.jpg";
import ImgPanerai from "../../assets/clock-95330_1920.jpg";
import ImgJaegerLeCoultre from "../../assets/hands-1866619_1920.jpg";
import ImgBulgari from "../../assets/wristwatch-407096_1920.jpg";
import ImgRichardMille from "../../assets/rolex-1327169_1920.jpg";
import ImgIWCSchaffhausen from "../../assets/male-watch-144648_1920.jpg";
import ImgBellRoss from "../../assets/male-watch-188780_1920.jpg";
import ImgTissot from "../../assets/wrist-watch-7957073_1920.jpg";
import ImgCitizen from "../../assets/smart-watch-821559_1920.jpg";
import ImgFossil from "../../assets/smart-watch-821557_1920.jpg";

type CategoryType = {
  id: number;
  imgCategory: string;
  category: string;
};

const categoryList: CategoryType[] = [
  { id: 1, imgCategory: ImgCasio, category: "Cásio" },
  { id: 2, imgCategory: ImgOmega, category: "Omega" },
  { id: 3, imgCategory: ImgRolex, category: "Rolex" },
  { id: 4, imgCategory: ImgTagHeuer, category: "Tag Heuer" },
  { id: 5, imgCategory: ImgPatekPhilippe, category: "Patek Philippe" },
  { id: 10, imgCategory: ImgHublot, category: "Hublot" },
  { id: 11, imgCategory: ImgLongines, category: "Longines" },
  { id: 12, imgCategory: ImgPanerai, category: "Panerai" },
  { id: 14, imgCategory: ImgJaegerLeCoultre, category: "Jaeger-LeCoultre" },
  { id: 15, imgCategory: ImgBulgari, category: "Bulgari" },
  { id: 16, imgCategory: ImgRichardMille, category: "Richard Mille" },
  { id: 13, imgCategory: ImgIWCSchaffhausen, category: "IWC Schaffhausen" },
  { id: 17, imgCategory: ImgBellRoss, category: "Bell & Ross" },
  { id: 18, imgCategory: ImgTissot, category: "Tissot" },
  { id: 19, imgCategory: ImgCitizen, category: "Citizen" },
  { id: 20, imgCategory: ImgFossil, category: "Fossil" },
];

function Main() {
  const navigate = useNavigate();
  // const { allProducts } = useGlobalContext();

  return (
    <div className={styles.container}>
      <section className={styles.banner}></section>
      <div className={styles.title}>
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
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14"
          />
        </svg>
        <h1>Categorias </h1>
      </div>
      <section className={styles["container-category"]}>
        <div className={styles["carrousel-category"]}>
          {categoryList.map((item) => {
            return (
              <CategoryCard
                id={item.id}
                imgCategory={item.imgCategory}
                category={item.category}
              />
            );
          })}
        </div>
      </section>

      <section className={styles["container-products"]}>Products</section>
    </div>
  );
}

export default Main;

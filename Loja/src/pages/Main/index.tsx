import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useGlobalContext from "../../hooks/useGlobalContext";
import styles from "./styles.module.scss";

function Main() {
  const navigate = useNavigate();
  // const { allProducts } = useGlobalContext();

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">Minha página man</h1>
    </div>
  );
}

export default Main;

import styles from "./styles.module.scss";

type CategoryProps = {
  id: number;
  imgCategory: string;
  category: string;
};

function CategoryCard(props: CategoryProps) {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.imgCategory} alt="Categoria" />
      </div>
      <h3>{props.category}</h3>
    </div>
  );
}

export default CategoryCard;

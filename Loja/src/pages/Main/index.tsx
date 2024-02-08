import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import useGlobalContext from '../../hooks/useGlobalContext';
import styles from './styles.module.scss';

function Main() {
  const navigate = useNavigate();
  const { allProducts } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles['sub-title']}>
        <h2>Seus Produtos</h2>
        <button
          className="btn-blue"
          onClick={() => navigate('/add-product')}
        >
          Adicionar produto
        </button>
      </div>
      <div className={styles['content-products']}>
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;

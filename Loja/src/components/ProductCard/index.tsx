import styles from './styles.module.scss';
import ProductType from '../../types/ProductType';
import RemoveIcon from '../../assets/remove.svg';
import { useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { formatToMoney } from '../../helpers/formatter';

type Props = {
  product: ProductType
}

function ProductCard({ product }: Props) {
  const { handleOpenModal } = useGlobalContext();
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseOver={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      {showDelete &&
        <img
          src={RemoveIcon}
          alt="remove"
          className={styles.remove}
          onClick={() => handleOpenModal(product.id)}
        />
      }

      <img
        src={product.image}
        alt="product"
        className={styles['card-image']}
      />

      <div className={styles['content-infos']}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className={styles['content-price-qty']}>
          <span>{product.stock} Unidades</span>
          <strong>{formatToMoney(product.value)}</strong>
        </div>
      </div>

    </div>
  )
}

export default ProductCard;
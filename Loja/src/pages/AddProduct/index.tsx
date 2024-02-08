import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';
import { ChangeEvent, FormEvent, useState } from 'react';
import ProductType from '../../types/ProductType';
import notify from '../../utils/notify';

const defaultForm = {
  id: 0,
  name: '',
  value: 0,
  stock: 0,
  description: '',
  image: '',
}

function AddProduct() {
  const navigate = useNavigate();
  const { allProducts, setAllProducts } = useGlobalContext();
  const [form, setForm] = useState<ProductType>({ ...defaultForm });

  function handleChangeForm(event: ChangeEvent<HTMLInputElement>) {

    if (['value', 'stock'].includes(event.target.name)) {
      setForm({ ...form, [event.target.name]: event.target.valueAsNumber || 0 });
      return;
    }

    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const localProducts = [...allProducts];

    const lastProductId = localProducts[localProducts.length - 1].id;

    form.id = lastProductId + 1;

    localProducts.push({ ...form });

    setAllProducts([...localProducts]);

    notify('Produto inserido com sucesso!', 'success');

    navigate('/main');
  }

  return (
    <div className={styles.container}>
      <div className={styles['sub-title']}>
        <h2>Adicionar Produto</h2>
      </div>
      <div className={styles['content-form']}>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-inputs']}>
            <div className={styles['input-label']}>
              <label htmlFor='name'>Nome do produto</label>
              <input
                type="text"
                id='name'
                name='name'
                value={form.name}
                onChange={handleChangeForm}
                required
              />
            </div>

            <div className={styles['content-price-stock']}>
              <div className={styles['input-label']}>
                <label htmlFor='value'>Preço</label>
                <input
                  type="number"
                  placeholder='R$'
                  id='value'
                  name='value'
                  value={form.value}
                  onChange={handleChangeForm}
                  required
                  min={0}
                />
              </div>

              <div className={styles['input-label']}>
                <label htmlFor='stock'>Estoque</label>
                <input
                  type="number"
                  placeholder='Un'
                  id='stock'
                  name='stock'
                  value={form.stock}
                  onChange={handleChangeForm}
                  required
                  min={0}
                />
              </div>
            </div>

            <div className={styles['input-label']}>
              <label htmlFor='description'>Descrição do produto</label>
              <input
                type="text"
                id='description'
                name='description'
                value={form.description}
                onChange={handleChangeForm}
                required
              />
            </div>

            <div className={styles['input-label']}>
              <label htmlFor='image'>Imagem</label>
              <input
                type="text"
                id='image'
                name='image'
                value={form.image}
                onChange={handleChangeForm}
                required
              />
            </div>
          </div>

          <div className={styles['horizontal-line']} />

          <div className={styles['content-buttons']}>
            <Link to="/main">
              Cancelar
            </Link>
            <button className='btn-blue'>
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

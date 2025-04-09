import { useParams, useOutletContext } from 'react-router-dom';
import { useFetchProduct } from '../../useFetchData';
import styles from './Product.module.css';

export default function Product() {
  const products = useParams();
  const [bag, handleAddToCart, _] = useOutletContext();
  const { product, error, isLoading } = useFetchProduct(products.productId);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Network error...</h1>;

  function renderQuantity() {
    const itemInBag = bag.find((bagItem) => bagItem.id === product.id);
    if (itemInBag) {
      return <p>Quantity in bag: {itemInBag.quantity}</p>;
    }
  }

  return (
    <>
      {product && (
        <div>
          <section className={`${styles.wrapper}`}>
            <div>
              <img
                width="300px"
                height="300px"
                src={product.image}
                alt={product.title}
              />
            </div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>ADD TO BAG</button>
            {renderQuantity()}
            <p>{product.category}</p>
            <p>{product.description}</p>
          </section>
        </div>
      )}
    </>
  );
}

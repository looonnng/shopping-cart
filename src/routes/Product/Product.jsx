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
        <main>
          <section className={`${styles.wrapper}`}>
            <div className={styles.descriptionWrapper}>
              <p className={styles.productTitle}>{product.title}</p>
              <p className={styles.productDescription}>{product.description}</p>
            </div>
            <div className={styles.imgWrapper}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.detailsWrapper}>
              <div className={styles.priceWrapper}>
                <p className={styles.price}>${product.price}</p>
                {renderQuantity()}
              </div>
              <button
                className={styles.addBtn}
                onClick={() => handleAddToCart(product)}
              >
                ADD TO BAG
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

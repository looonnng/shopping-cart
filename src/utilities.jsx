import styles from './routes/HomePage/HomePage.module.css';
import { Link } from 'react-router-dom';

const renderProducts = (products) =>
  products.map((prod) => (
    <Link
      to={`/product/${prod.id}`}
      className={`${styles.productCard}`}
      key={prod.id}
    >
      <div className={`${styles.imgWrapper}`}>
        <img
          className={`${styles.productImg}`}
          src={prod.image}
          alt={prod.title}
        />
      </div>
      <div className={`${styles.productTextWrapper}`}>
        <p>{prod.title}</p>
        <p>${prod.price}</p>
      </div>
    </Link>
  ));

const renderMainSection = (products, error) =>
  error ? (
    <h1>Network error...</h1>
  ) : products ? (
    <main>
      <section className={`${styles.wrapper} ${styles.cardsContainer}`}>
        {renderProducts(products)}
      </section>
    </main>
  ) : (
    <h1>Loading...</h1>
  );

export default renderMainSection;

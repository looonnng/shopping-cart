import { useOutletContext } from 'react-router-dom';
import styles from './Bag.module.css';

function BagItems(props) {
  if (props.bag.length > 0) {
    const itemElements = props.bag.map((item, index) => (
      <div className={styles.itemWrapper} key={index}>
        <div className={styles.itemImgWrapper}>
          <img className={styles.itemImg} src={item.image} alt={item.title} />
        </div>
        <div className={styles.itemDetails}>
          <ul>
            <li>
              <p>{item.title}</p>
            </li>
            <li>
              <p>${item.price}</p>
            </li>
          </ul>
          <ul className={styles.quantityWrapper}>
            <li>
              <p>Quantity:{item.quantity}</p>
            </li>
            <li className={styles.removeBtnWrapper}>
              <button onClick={() => props.handleRemove(item, index)}>
                Remove
              </button>
            </li>
          </ul>
        </div>
      </div>
    ));

    const totalElement = (
      <h1>
        Total: $
        {props.bag
          .map((item) => Number(item.price) * item.quantity)
          .reduce((prev, curr) => prev + curr, 0)
          .toFixed(2)}
      </h1>
    );

    return (
      <>
        <section className={styles.bagItems}>{itemElements}</section>
        <section className={styles.bagTotal}>{totalElement}</section>
      </>
    );
  }
}

const Bag = () => {
  const [bag, , handleRemove] = useOutletContext();

  return (
    <main className={styles.wrapper}>
      {bag.length === 0 && <h1>Bag is empty</h1>}
      <BagItems bag={bag} handleRemove={handleRemove} />
    </main>
  );
};

export default Bag;

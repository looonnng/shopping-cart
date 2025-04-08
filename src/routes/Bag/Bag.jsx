import { useOutletContext } from 'react-router-dom';

const Bag = () => {
  const [bag, , handleRemove] = useOutletContext();
  return (
    <>
      {bag.length > 0 &&
        bag.map((item, index) => (
          <div key={index}>
            <img
              width="200px"
              height="200px"
              src={item.image}
              alt={item.title}
            />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>Quantity:{item.quantity}</p>
            <p>{item.category}</p>
            <button onClick={() => handleRemove(item, index)}>Remove</button>
          </div>
        ))}

      <h1>
        Total:
        {bag
          .map((item) => Number(item.price) * item.quantity)
          .reduce((prev, curr) => prev + curr, 0)
          .toFixed(2)}
      </h1>
    </>
  );
};

export default Bag;

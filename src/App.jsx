import './App.css';
import './utilities.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  const [bag, setBag] = useState([]);

  function handleAddToCart(item) {
    setBag((prevBag) => {
      // Check if item already exists
      const itemInBag = prevBag.find((bagItem) => bagItem.id === item.id);

      if (itemInBag) {
        // If it exists, increase quantity
        return prevBag.map((bagItem) =>
          bagItem.id === item.id
            ? { ...bagItem, quantity: bagItem.quantity + 1 }
            : bagItem,
        );
      } else {
        // If it doesn't exist, add it with quantity 1
        return [...prevBag, { ...item, quantity: 1 }];
      }
    });
  }

  function handleRemoveFromCart(removeItem, removeItemIndex) {
    setBag((prevBag) => prevBag.filter((_, index) => index != removeItemIndex));
  }

  return (
    <>
      <Header bag={bag} />
      <Outlet context={[bag, handleAddToCart, handleRemoveFromCart]} />
    </>
  );
}

export default App;

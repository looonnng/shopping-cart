import { useState, useEffect } from 'react';

export function useFetchData() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error occurred');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err));
  }, []);

  return { products, error };
}

export function useFetchProduct(productId) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error occurred');
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err));
  }, [productId]);

  return { product, error };
}

export function useFetchCategory(category) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error occurred');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err));
  }, [category]);

  return { products, error };
}

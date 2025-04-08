import { useState, useEffect } from 'react';
import renderMainSection from '../../utilities';
import { useParams } from 'react-router-dom';

export default function Category() {
  const params = useParams();
  const [productsCategory, setProductsCategory] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${params.categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error occurred');
        }
        return response.json();
      })
      .then((data) => setProductsCategory(data))
      .catch((err) => setError(err));
  }, [params.categoryId]);

  return renderMainSection(productsCategory, error);
}

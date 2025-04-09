import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ErrorPage from './routes/ErrorPage/error.jsx';
import HomePage from './routes/HomePage/HomePage.jsx';
import Bag from './routes/Bag/Bag.jsx';
import Product from './routes/Product/Product.jsx';
import Category from './routes/Category/Category.jsx';

const router = createBrowserRouter([
  {
    path: '/shopping-cart',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/shopping-cart/home',
        element: <HomePage />,
      },
      {
        path: '/shopping-cart/category/:categoryId',
        element: <Category />,
      },
      {
        path: '/shopping-cart/product/:productId',
        element: <Product />,
      },
      {
        path: '/shopping-cart/bag',
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);

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
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/category/:categoryId',
        element: <Category />,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/bag',
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

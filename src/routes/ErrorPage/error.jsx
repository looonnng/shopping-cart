import styles from './error.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className={`${styles.errorPage} flex-center`}>
      <h1>Not all who wander are lost!</h1>
      <Link to="/shopping-cart/home">Return to Homepage</Link>
    </main>
  );
};

export default ErrorPage;

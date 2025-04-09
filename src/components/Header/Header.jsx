import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoUrl from '../../assets/logo-white-text.svg';

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul className={`${styles.navList} ${styles.leftList}`}>
          <li>
            <Link to="/shopping-cart/category/men's%20clothing">MENSWEAR</Link>
          </li>
          <li>
            <Link to="/shopping-cart/category/women's%20clothing">WOMENSWEAR</Link>
          </li>
          <li>
            <Link to="/shopping-cart/category/electronics">EVERYTHING ELSE</Link>
          </li>
          <li>
            <Link to="/shopping-cart/category/jewelery">SALE</Link>
          </li>
        </ul>
        <ul className={`${styles.logoWrapper} ${styles.navList}`}>
          <li>
            <Link to="/shopping-cart/home">
              <img className={styles.logo} src={logoUrl} alt="logo" />
            </Link>
          </li>
        </ul>
        <ul className={`${styles.navList} ${styles.rightList}`}>
          <li>
            <Link>ENGLISH</Link>
          </li>
          <li>
            <Link>LOGIN</Link>
          </li>
          <li>
            <Link>WISH LIST</Link>
          </li>
          <li>
            <Link to="/shopping-cart/bag">BAG ({props.bag ? props.bag.length : '0'})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

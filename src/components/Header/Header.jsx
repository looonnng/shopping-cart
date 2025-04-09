import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul className={`${styles.navList} ${styles.leftList}`}>
          <li>
            <Link to="/category/men's%20clothing">MENSWEAR</Link>
          </li>
          <li>
            <Link to="/category/women's%20clothing">WOMENSWEAR</Link>
          </li>
          <li>
            <Link to="/category/electronics">EVERYTHING ELSE</Link>
          </li>
          <li>
            <Link to="/category/jewelery">SALE</Link>
          </li>
        </ul>
        <ul className={`${styles.logoWrapper} ${styles.navList}`}>
          <li>
            <Link to="/home">
              <img
                className={styles.logo}
                src="/src/assets/logo-white-text.svg"
                alt="logo"
              />
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
            <Link to="/bag">BAG ({props.bag ? props.bag.length : '0'})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

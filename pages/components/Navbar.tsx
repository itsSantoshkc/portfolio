import type { NextPage } from "next";
import styles from "../../styles/navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.navButton}>
            <span className={styles.navItems}>Home</span>
          </li>
          <li className={styles.navButton}>
            <span className={styles.navItems}>Projects</span>
          </li>
          <li className={styles.navButton}>
            <span className={styles.navItems}>About Me</span>
          </li>
          <li className={styles.navButton}>
            <span className={styles.navItems}>Contact</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

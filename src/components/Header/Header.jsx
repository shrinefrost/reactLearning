import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.logo}>Keeper</h1>
    </header>
  );
}

export default Header;

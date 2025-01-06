import styles from './Header.module.css';
import SwitchTheme from '../SwitchTheme';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <SwitchTheme/>
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about" id="about">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
        </nav>
      </div>
      <a href="#contact" className={styles.contactButton}>
        Contact Me
      </a>
    </header>
  );
};

export default Header;

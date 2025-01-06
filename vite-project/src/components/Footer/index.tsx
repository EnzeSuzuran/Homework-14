import styles from './Footer.module.css';
import linkSvg from '@assets/images/heroes/link.svg';

const Footer = () => {
    return (
      <section className={styles.hero}>
        <div className={styles.image}>
          <h1>LET'S <a href="#link" className={styles.linkButton}><img src={linkSvg} alt="" /></a></h1>
          <h1>WORK TOGETHER</h1>
        </div>
        <div>
            <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#about" id="about">About Me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Services</a>
            </nav>
        </div>
      </section>
    );
  };

  export default Footer;

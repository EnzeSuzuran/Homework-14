import styles from './Hero.module.css';
import uzorSvg from '@assets/images/heroes/uzor.svg';
import linkSvg from '@assets/images/heroes/link.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p>Designer / Frontend Developer</p>
        <h1 className={styles.name}>Enze Sult</h1>
      </div>
        <img src={uzorSvg} alt="uzor" />
      <div className={styles.image}>
        <h1>LET'S <a href="#link" className={styles.linkButton}><img src={linkSvg} alt="" /></a></h1>
        <h1>WORK TOGETHER</h1>
      </div>
    </section>
  );
};

export default Hero;

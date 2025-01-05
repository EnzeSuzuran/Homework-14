import styles from './TechStack.module.css';
import techStack from '../../data/techStack.json';
import { Technology } from '../../types';

const TechStack = () => {
  return (
    <section className={styles.techStack} id="tech-stack">
      <h2>Мой технологический стек</h2>
      <p>Технологии которыми я владею и регулярно пользуюсь</p>
      <div className={styles.grid}>
        {techStack.technologies.map((tech: Technology) => (
          <div key={tech.id} className={styles.tech}>
            <img className={`icon`} src={`${tech.icon}`}/>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
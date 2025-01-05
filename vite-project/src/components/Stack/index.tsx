import styles from './Stack.module.css';
import starSvg from '@assets/images/heroes/star.svg';
import itemsData from '../../data/items.json';

const Stack = () => {
  return (
    <section className={styles.stack}>
      <div className={styles.items}>
        {itemsData.item && itemsData.item.map(item => (
          <div key={item.id} className={styles.item}>
            <img src={starSvg} alt="icon" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
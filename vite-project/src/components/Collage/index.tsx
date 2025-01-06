import styles from './ImageList.module.css';
import collageData from '../../data/collage.json';
import { CollageImage } from '../../types';

const ImageList = () => {
  return (
    <section className={styles.imageListSection} id="image-list">
      <div className={styles.imageListContainer}>
        {collageData.collageImage.map((image: CollageImage) => (
          <div key={image.id} className={styles.imageWrapper}>
            <img className={styles.image} src={image.src} alt={image.alt} />
            <span className={styles.overlay}>{image.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageList;

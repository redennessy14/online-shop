import React, { useEffect, useState } from "react";
import styles from "../../styles/Product.module.css";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const SIZES = [4, 4.5, 5];

const Product = ({ title, images, description, price }) => {
  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${currentImage})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div key={size} onClick={() => {}} className={`{styles.size}`}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>

        <div className={styles.action}>
          <button className={styles.add}>Add to cart</button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}> 10 people purchased</div>
          <Link to={ROUTES.HOME}> Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;

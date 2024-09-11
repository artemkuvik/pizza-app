import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

function ProductCard({
  id,
  price,
  rating,
  name,
  img,
  description,
}: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <div className={styles.card} id="id">
        <div className={styles.price}>
          {price}
          <span className={styles.icon}>&#8381;</span>
        </div>
        <button className={styles.basket}>
          <img src="/basket.svg" alt="basket" />
        </button>
        <img className={styles.img} src={img} alt="dish" />
        <div className={styles.rating}>
          {rating}
          <img src="/Star.svg" className={styles.star} alt="star" />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

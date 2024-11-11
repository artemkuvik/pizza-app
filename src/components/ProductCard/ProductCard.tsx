import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { useDispatch } from "react-redux";
import { AppDispath } from "../../store/store";
import { cartAction } from "../../store/cart.slice";
import { Raiting } from "../Raiting/Raiting";

function ProductCard({
  id,
  price,
  rating,
  name,
  img,
  description,
}: ProductCardProps) {
  const dispatch = useDispatch<AppDispath>();
  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(cartAction.add(id));
  };
  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <div className={styles.card} id="id">
        <div className={styles.price}>
          {price}
          <span className={styles.icon}>&#8381;</span>
        </div>
        <button className={styles.basket} onClick={add}>
          <img src="/basket.svg" alt="basket" />
        </button>
        <img className={styles.img} src={img} alt="dish" />
        <Raiting rating={rating} className={styles["rating-position"]} />
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

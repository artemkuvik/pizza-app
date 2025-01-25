import { BASE_URL } from "../../helpers/Api";
import styles from "./Raiting.module.css";

interface RaitingProps {
  rating: number;
  className?: string;
}

export function Raiting({ rating, className }: RaitingProps) {
  return (
    <div className={`${styles.rating} ${className}`}>
      {rating}
      <img src={`${BASE_URL}/Star.svg`} className={styles.star} alt="star" />
    </div>
  );
}

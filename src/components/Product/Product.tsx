import { useLoaderData } from "react-router-dom";
import type { Product } from "../../interfaces/product.interface";
import styles from "../Product/Product.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { AppDispath } from "../../store/store";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart.slice";
import { Raiting } from "../Raiting/Raiting";
import { BASE_URL } from "../../helpers/Api";

export function Product() {
  const data = useLoaderData() as Product;
  console.log(data);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(cartAction.add(data.id));
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles["name-wrapper"]}>
          <button
            onClick={() => {
              navigate("/");
              console.log("click");
            }}
          >
            <img src={`${BASE_URL}/Product-return.png`} alt="Стрелка" />
          </button>
          <h1 className={styles.name}>{data.name}</h1>
        </div>
        <Button appearance="small" className={styles.basket} onClick={add}>
          <img src={`${BASE_URL}/basket.svg`} alt="basket" />
          <span>В корзину</span>
        </Button>
      </div>
      <div className={styles["wrepper-card"]}>
        <img className={styles["img"]} src={data.image}></img>
        <div className={styles.info}>
          <div className={styles["wrapper-price"]}>
            <div className={styles["text-price"]}>Цена</div>
            <div className={styles["price"]}>
              {data.price} <span className={styles.icon}>&#8381;</span>
            </div>
          </div>
          <div className={styles["wrapper-raiting"]}>
            <div className={styles["text-raiting"]}>Рейтинг</div>
            <Raiting rating={data.rating} />
          </div>
          <div className={styles.compound}>Состав:</div>
          <ul className={styles.list}>
            {data.ingredients.map((elem) => (
              <li className={styles.elem}>{elem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;

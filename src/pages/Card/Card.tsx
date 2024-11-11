import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title/Title";
import { AppDispath, RootState } from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product.interface";
import { PREFIX } from "../../helpers/Api";
import axios from "axios";
import styles from "./Card.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { cartAction } from "../../store/cart.slice";

const DELIVERY_FEE = 163;

export function Card() {
  const [cartProducts, setCartProducs] = useState<Product[]>([]);
  const [order, setOrder] = useState(false);
  const items = useSelector((s: RootState) => s.cart.items);
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const total = items
    .map((i) => {
      const product = cartProducts.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  const getItem = async (id: number) => {
    const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducs(res);
  };

  const checkout = async () => {
    if (total > DELIVERY_FEE) {
      await axios.post(
        `${PREFIX}/order`,
        {
          products: items,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch(cartAction.clean());
      navigate("/success");
    } else setOrder(true);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
      <Title className={styles.headling}>Корзина</Title>
      {items.map((i) => {
        const product = cartProducts.find((p) => p.id === i.id);
        if (!product) {
          return;
        }
        return <CartItem key={product.id} count={i.count} {...product} />;
      })}
      <div>
        <div className={styles.line}>Итог</div>
        <div className={styles.wrapper}>
          {total}
          &nbsp;
          <span className={styles.currency}>₽</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div>Доставка</div>
        <div className={styles.wrapper}>
          {DELIVERY_FEE}
          &nbsp;
          <span className={styles.currency}>₽</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div>
          Итог <span className={styles.count}>({items.length})</span>
        </div>
        <div className={styles.wrapper}>
          {total + DELIVERY_FEE}
          &nbsp;
          <span className={styles.currency}>₽</span>
        </div>
      </div>
      <div className={styles.checkout}>
        <Button appearance="big" onClick={checkout}>
          оформить
        </Button>
      </div>
      {order && (
        <div className={styles["not-order"]}>Пожалуйста, сделайте заказа</div>
      )}
    </>
  );
}

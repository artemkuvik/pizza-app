import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "../Success/Succes.module.css";
import { BASE_URL } from "../../helpers/Api";

export function Success() {
  const navigate = useNavigate();
  return (
    <div className={styles.success}>
      <img src={`${BASE_URL}/pizza.png`} alt="Изображенние пиццы" />
      <div className={styles.text}>Ваш заказ успешно оформлен!</div>
      <Button appearance="big" onClick={() => navigate("/")}>
        Сделать новый
      </Button>
    </div>
  );
}

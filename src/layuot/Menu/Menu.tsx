import { Link, Outlet } from "react-router-dom";
import styles from "../Menu/Menu.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <img src="/public/Intersect.png" alt="man" className={styles.man} />
        <div className={styles.title}>Антон Ларичев</div>
        <div className={styles.email}>alaricode@ya.ru</div>
        <div className={styles.main}>
          <div className={cn(styles["menu-elem"])}>
            <img src="/public/menu-icon.svg" alt="menu" />
            <Link className={styles.link} to="/">
              Меню
            </Link>
          </div>
          <div className={cn(styles["menu-elem"])}>
            <img src="/public/cart-icon.svg" alt="cart" />
            <Link className={styles.link} to="/cart">
              Корзина
            </Link>
          </div>
        </div>
        <Button className={styles.button}>
          <img src="/public/Group 18072.svg" alt="" />
          <div>Выйти</div>
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

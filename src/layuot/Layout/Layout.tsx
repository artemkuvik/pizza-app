import { NavLink, Outlet } from "react-router-dom";
import styles from "../Layout/Layout.module.css";
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
            <NavLink
              className={({ isActive }) =>
                cn(styles.link, {
                  [styles.active]: isActive,
                })
              }
              to="/"
            >
              Меню
            </NavLink>
          </div>
          <div className={cn(styles["menu-elem"], styles.card)}>
            <img src="/public/cart-icon.svg" alt="card" />
            <NavLink
              className={({ isActive }) =>
                cn(styles.link, {
                  [styles.active]: isActive,
                })
              }
              to="/card"
            >
              Корзина
            </NavLink>
          </div>
        </div>
        <Button className={styles.button}>
          <img src="/public/Group 18072.svg" alt="" />
          <div>Выйти</div>
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "../Layout/Layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { getProfile, userAction } from "../../store/user.slice";
import { useEffect } from "react";
import { BASE_URL } from "../../helpers/Api";

export function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const profile = useSelector((s: RootState) => s.user.profile);
  const items = useSelector((s: RootState) => s.cart.items);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userAction.logout());
    navigate("auth/login");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <img
          src={`${BASE_URL}/Intersect.png`}
          alt="man"
          className={styles.man}
        />
        <div className={styles.title}>{profile?.name}</div>
        <div className={styles.email}>{profile?.email}</div>
        <div className={styles.main}>
          <div className={cn(styles["menu-elem"])}>
            <img src={`${BASE_URL}/menu-icon.svg`} alt="menu" />
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
            <img src={`${BASE_URL}/cart-icon.svg`} alt="card" />
            <NavLink
              className={({ isActive }) =>
                cn(styles.link, {
                  [styles.active]: isActive,
                })
              }
              to="/card"
            >
              Корзина
              <span className={styles["cart-count"]}>{items.length}</span>
            </NavLink>
          </div>
        </div>
        <Button onClick={logout} className={styles.button}>
          <img src={`${BASE_URL}/Group 18072.svg`} alt="" />
          <div>Выйти</div>
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

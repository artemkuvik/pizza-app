import { Outlet } from "react-router-dom";
import styles from "../AuthLayout/AuthLayout.module.css";
import { BASE_URL } from "../../helpers/Api";

export function AuthLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <img src={`${BASE_URL}/Group.png`} alt="Group" />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

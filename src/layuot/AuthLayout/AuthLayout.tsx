import { Outlet } from "react-router-dom";
import styles from "../AuthLayout/AuthLayout.module.css";

export function AuthLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <img src="/Group.png" alt="Group" />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

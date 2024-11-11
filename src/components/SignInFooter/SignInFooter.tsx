import styles from "./SignInFooter.module.css";
import { SignInProps } from "./SignInFooter.props";

function SignInFooter({ title, link, onClick }: SignInProps) {
  return (
    <a className={styles.footer} onClick={onClick}>
      <div className={styles.title}>{title}</div>
      <div className={styles.link}>{link}</div>
    </a>
  );
}

export default SignInFooter;

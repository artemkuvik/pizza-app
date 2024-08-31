import styles from "./SignIn.module.css";
import { SignInProps } from "./SignIn.props";

function SignIn({ children }: SignInProps) {
  return <div className={styles.screen}>{children}</div>;
}

export default SignIn;

import styles from "./RightSignInPart.module.css";
import { RightSignInPatrProps } from "./Right.props";

function RightSignInPart({ children }: RightSignInPatrProps) {
  return <div className={styles["right-block"]}>{children}</div>;
}

export default RightSignInPart;

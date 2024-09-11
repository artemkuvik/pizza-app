import { TitleProps } from "./Title.props";
import styles from "./Title.module.css";

function Title({ children }: TitleProps) {
  return <h1 className={styles.title}> {children}</h1>;
}

export default Title;

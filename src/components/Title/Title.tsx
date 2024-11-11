import { TitleProps } from "./Title.props";
import styles from "./Title.module.css";

function Title({ children, className }: TitleProps) {
  return <h1 className={`${styles.title} ${className}`}> {children}</h1>;
}

export default Title;

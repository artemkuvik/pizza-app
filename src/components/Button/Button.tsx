import { ButtonProps } from "./Button.props";
import styles from "../Button/Button.module.css";
import cn from "classnames";

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        styles["button"],
        styles["accent"],
        className,
        styles["big-button"]
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
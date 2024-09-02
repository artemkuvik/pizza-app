import { ButtonProps } from "./Button.props";
import styles from "../Button/Button.module.css";
import cn from "classnames";

function Button({
  children,
  className,
  appearance = "small",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles["button"],
        styles["accent"],
        className,
        { [styles["small"]]: appearance === "small" },
        { [styles["big"]]: appearance === "big" }
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

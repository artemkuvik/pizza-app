import styles from "./InputSignIn.module.css";
import { InputProps } from "./InputSignIn.props";
import cn from "classnames";

function InputSignIn({
  id,
  label,
  value,
  onChange,
  placeholder,
  className,
}: InputProps) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className={cn(styles.input, className)}
        placeholder={placeholder}
      />
    </>
  );
}

export default InputSignIn;

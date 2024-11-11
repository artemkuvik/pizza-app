import { FormProps } from "./Form.porps";
import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form({ children, onSubmit, buttonText }: FormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <Button appearance="big">{buttonText}</Button>
    </form>
  );
}

export default Form;

import { FormProps } from "./Form.porps";
import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form({ children }: FormProps) {
  return (
    <form className={styles.form}>
      {children}
      <Button>Вход</Button>
    </form>
  );
}

export default Form;

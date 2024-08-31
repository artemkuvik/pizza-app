import Input from "../Input/Input";
import Form from "../Form/Form";
import { useState } from "react";
import styles from "./FormSignIn.module.css";

function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Input
        className={styles["first-input"]}
        id="email"
        label="Ваш email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        className={styles["second-input"]}
        id="password"
        placeholder="Пароль"
        label="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </Form>
  );
}

export default FormSignIn;

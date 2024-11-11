import InputSignIn from "../InputSignIn/InputSignIn";
import Form from "../Form/Form";
import { useState } from "react";
import styles from "./FormSignIn.module.css";
import Title from "../Title/Title";
import { FormSignInProps } from "./FormSignIn.props";
import cn from "classnames";

function FormSignIn({ title, onSubmit, buttonText }: FormSignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <Form onSubmit={onSubmit} buttonText={buttonText}>
      <Title className={styles["sign-in-title"]}>{title}</Title>
      <InputSignIn
        className={styles["first-input"]}
        name="email"
        id="email"
        label="Ваш email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputSignIn
        className={cn({
          [styles["first-input"]]: title === "Регистрация",
          [styles["last-input"]]: title === "Вход",
        })}
        name="password"
        id="password"
        placeholder="Пароль"
        label="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {title === "Регистрация" && (
        <InputSignIn
          className={styles["last-input"]}
          name="name"
          id="name"
          placeholder="Имя"
          label="Имя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      )}
    </Form>
  );
}

export default FormSignIn;

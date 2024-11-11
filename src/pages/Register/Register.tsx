import { useNavigate } from "react-router-dom";
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import SignInFooter from "../../components/SignInFooter/SignInFooter";
import { FormEvent, useEffect } from "react";
import { register, userAction } from "../../store/user.slice";
import { AppDispath, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.css";

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};

function Register() {
  const error = useSelector((s: RootState) => s.user.registerErrorMessage);
  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();
  const jwt = useSelector((s: RootState) => s.user.jwt);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userAction.cleanRegisterError());
    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;
    dispatch(
      register({
        email: email.value,
        password: password.value,
        name: name.value,
      })
    );
  };

  function onLogin() {
    navigate("/auth/login");
  }
  return (
    <>
      {error && <div className={styles.error}>{error}</div>}
      <FormSignIn
        onSubmit={submit}
        title="Регистрация"
        buttonText="Зарегистрироваться"
      />
      <SignInFooter title="Есть аккаунт?" link="Войти" onClick={onLogin} />
    </>
  );
}

export default Register;

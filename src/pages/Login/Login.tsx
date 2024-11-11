import { FormEvent, useEffect } from "react";
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import SignInFooter from "../../components/SignInFooter/SignInFooter";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "../../store/store";
import { login, userAction } from "../../store/user.slice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

function Login() {
  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const error = useSelector((s: RootState) => s.user.loginErrorMessage);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userAction.cleanLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  function onRegister() {
    navigate("/auth/register");
    console.log("click");
  }

  return (
    <>
      {error && <div className={styles.error}>{error}</div>}
      <FormSignIn onSubmit={submit} title="Вход" buttonText="Вход" />
      <SignInFooter
        title="Нет аккаунта?"
        link="Зарегистрироваться"
        onClick={onRegister}
      />
    </>
  );
}

export default Login;

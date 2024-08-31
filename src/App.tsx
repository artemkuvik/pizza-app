import SignIn from "./components/screens/SignIn/SignIn";
import LeftSignInPart from "./components/LeftSignInPart/LeftSignInPart";
import RightSignInPart from "./components/RightSignInPart/RightSignInPart";
import Title from "./components/Title/Title";
import FormSignIn from "./components/FormSignIn/FormSignIn";
import SignInProps from "./SignInFooter/SignInFooter";

function App() {
  return (
    <>
      <SignIn>
        <LeftSignInPart />
        <RightSignInPart>
          <Title>Вход</Title>
          <FormSignIn />
          <SignInProps title="Нет аккаунта?" link="Зарегистрироваться" />
        </RightSignInPart>
      </SignIn>
    </>
  );
}

export default App;

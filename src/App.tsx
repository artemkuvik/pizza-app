import Button from "./components/Button/Button";
import { useState } from "react";
import Input from "./components/Button/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Button appearance="small" onClick={() => setCounter(counter + 1)}>
        Кнопка {counter}
      </Button>
      <Button appearance="big" onClick={() => setCounter(counter + 1)}>
        Кнопка {counter}
      </Button>
      <Input placeholder="Email" />
    </>
  );
}

export default App;

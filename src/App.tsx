import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Button onClick={() => setCounter(counter + 1)}>Кнопка {counter}</Button>
    </>
  );
}

export default App;

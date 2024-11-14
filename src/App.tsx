import { useState } from "react";
import { Button, ChildrenButton } from "./components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <ChildrenButton>
          <div>{count}</div>
        </ChildrenButton>
      </Button>
    </>
  );
}

export default App;

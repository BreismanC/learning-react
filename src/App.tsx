import "./App.css";
import { ColorRed } from "./components";
import { GlobalProvider } from "./context/global.context";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <GlobalProvider>
      <ColorRed>
        <span>Esto es de color rojo</span>
      </ColorRed>
      <Button onClick={() => alert("Se modificó el estado global")}>
        <div>Click me!</div>
      </Button>
    </GlobalProvider>
  );
}

export default App;

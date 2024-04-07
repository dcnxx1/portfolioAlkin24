import "./App.css";
import AppRouter from "./AppRouter";
import { GlobalStyle } from "./global.styled";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      <AppRouter />
    </div>
  );
}

export default App;

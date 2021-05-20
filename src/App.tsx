import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { Router } from "./src/router/Router";
import GlobalStyle from "./src/globalStyles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

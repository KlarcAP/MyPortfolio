import { Header } from "./components/Header";
import { AnimatedRoutes } from "./components/Routes/AnimatedRoutes";
import { GlobalStyle } from "./style/global";
import { BrowserRouter as Router, useLocation} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimatedRoutes/>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { HeroSection } from "../src/components/Hero/index";
import { SobreMim } from "../src/components/About/index";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
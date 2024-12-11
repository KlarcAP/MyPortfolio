import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import { HeroSection } from "../src/components/Hero/index";
import { SobreMim } from "../src/components/About/index";
import { GlobalStyle } from "./style/global";
import { SectionProjects } from "./components/Projects";


function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes >
          <Route path="/" element={<HeroSection />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/projetos" element={<SectionProjects />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
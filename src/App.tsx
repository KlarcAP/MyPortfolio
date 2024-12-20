import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import { HeroSection } from "../src/components/Hero/index";
import { SobreMim } from "../src/components/About/index";
import { GlobalStyle } from "./style/global";
import { SectionProjects } from "./components/Projects/index";
import { ServicosSection } from "./components/Serviços/index";
import { ContactMeForms } from "./components/Contact/index";
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/servicos" element={<ServicosSection />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/projetos" element={<SectionProjects />} />
          <Route path="/contato" element={<ContactMeForms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

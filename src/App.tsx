//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Para React Router v6
import Header from "./components/Header";
import { HeroSection } from "../src/components/Hero/index";
import { SobreMim } from "../src/components/About/index";
import { GlobalStyle } from "./style/global";
import { SectionProjects } from "./components/Projects/index";
import { ServicosSection } from "./components/Serviços/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <ServicosSection />
      <SobreMim />
      <SectionProjects />
    </>
  );
}

export default App;

import Header from "./components/Header";
import { HeroSection } from "../src/components/Hero/index";
import { SobreMim } from "../src/components/About/index";
import { GlobalStyle } from "./style/global";
import { SectionProjects } from "./components/Projects/index";
import { Tecnologias } from "./components/Tecnologias/index";
import { ServicosSection } from "./components/Serviços/index"


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <ServicosSection />
      <SobreMim />
      <SectionProjects />
      <Tecnologias />
    </>
  );
}


export default App;
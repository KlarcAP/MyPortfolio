import { SobreMim } from "./components/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <SobreMim/>
      <GlobalStyle/>
    </>
  );
}

export default App;
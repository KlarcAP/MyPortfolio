import { GlobalStyle } from './style/global'
import { Header} from './components/Header/index';
import { HeroSection } from './components/Hero';
import { SobreMim } from './components/About';

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

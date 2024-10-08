import { GlobalStyle } from './style/global'
import { Header} from './components/Header/index';
import { HeroSection } from './components/Hero';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <GlobalStyle/>
    </>
  );
}

export default App;

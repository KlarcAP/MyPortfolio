import Header from "../components/Header";
import { About } from "../sections/About";
import HeroSection from "../sections/Hero";
import { Projects } from "../sections/Projects";

function App() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;

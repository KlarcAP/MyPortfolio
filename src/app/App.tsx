import Header from "../components/Header";
import { About } from "../sections/About";
import { FormationTimeline } from "../sections/Formação";
import { Footer } from "../components/Rodapé";
import HeroSection from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { CTA } from "../sections/CTA";

function App() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <About />
        <Projects />
        <FormationTimeline />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;

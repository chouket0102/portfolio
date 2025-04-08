import ButtonGradient from "./assets/svg/ButtonGradient";
import Skills from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Projects/>
        <Skills/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

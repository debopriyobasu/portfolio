import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

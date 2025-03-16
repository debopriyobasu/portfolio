import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main id="scrollable-container">
        <HeroSection />
        <About />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

import "./HeroSection.css";
import useGreeting from "../hooks/useGreeting";
import heroImage from "../assets/hero_image.webp";
const HeroSection = () => {
  const greeting = useGreeting();
  return (
    <section id="hero" className="container">
      <div id="hero-text">
        <h1 tabIndex={0}>
          {greeting}!
          <br /> I am Debopriyo Basu
        </h1>
        <h3 className="mt-2 m-mt-1" tabIndex={0}>
          A software engineer who builds beautiful and engaging web experiences
        </h3>
      </div>
      <figure role="img" aria-label="Profile photo of Debopriyo Basu">
        <img src={heroImage} alt="Debopriyo Basu" id="hero-image" />
      </figure>
      <hr className="gradient-overlay" />
    </section>
  );
};

export default HeroSection;

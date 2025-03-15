import "./HeroSection.css";
import { salutation } from "../../utils/appUtils";
import heroImage from "../../assets/hero_image.webp";
import { content } from "../../content";

const HeroSection = () => {
  const greeting = salutation();
  return (
    <section id="hero" className="container">
      <div id="hero-text">
        <h1 tabIndex={0} className="font-jakarta fw-bold">
          {greeting}!
          <br /> {content.heroSection.title}
        </h1>
        <p className="mt-2 m-mt-1" tabIndex={0}>
          {content.heroSection.description}
        </p>
      </div>
      <figure role="img" aria-label="Profile photo of Debopriyo Basu">
        <img
          src={heroImage}
          alt="Debopriyo Basu"
          id="hero-image"
          width={969}
          height={1301}
        />
        <hr className="gradient-overlay"></hr>
      </figure>
    </section>
  );
};

export default HeroSection;

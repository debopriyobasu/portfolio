import "./About.css";
import Certifications from "../Certifications/Certifications";
import { content } from "../../content";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="font-jakarta fw-bold">{content.about.title}</h2>
        {content.about.description.map((paragraph, index) => (
          <p key={index} className="mt-1 mw-70ch">
            {paragraph}
          </p>
        ))}
        <div className="mt-2">
          <Certifications />
        </div>
      </div>
    </section>
  );
};

export default About;

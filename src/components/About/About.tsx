import "./About.css";
import { content } from "../../content";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <AnimationWrapper>
          <div className="about-text mw-70ch m-auto">
            <h2 className="font-jakarta fw-bold">{content.about.title}</h2>
            {content.about.description.map((paragraph, index) => (
              <p key={index} className="mt-1 ">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default About;

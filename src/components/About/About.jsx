import "./About.css";
import Certifications from "../Certifications/Certifications";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="font-jakarta fw-bold">About me</h2>
        <p className="mt-1 mw-70ch">
          As a front-end focused software engineer with a solid understanding of
          backend technologies, I excel in JavaScript ES6+, TypeScript,
          React.js, CSS and Git. I am also familiar with core Java, Python,
          Express.js and Mongo DB. For cloud technologies, I am familiar with
          Microsoft Azure. I have a total work experience of 5 years.
        </p>
        <p>Below are some of my relevant licenses/certifications: </p>
        <div className="mt-2">
          <Certifications />
        </div>
      </div>
    </section>
  );
};

export default About;

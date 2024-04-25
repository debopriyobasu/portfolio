import "./Contact.css";
import { SiLinkedin, SiMedium, SiGithub, SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_55aw1qn", "template_od2bqfy", form.current, {
        publicKey: "Vg_n_0vZfmPLxr7c2",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
          alert("Thanks! Your email has been sent.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <p className="mt-1 text-center">
          Feel free to contact me to discuss any work opportunities, or for any
          suggestions
        </p>
        <form ref={form} onSubmit={sendEmail} className="contactForm mt-2">
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitBtn btn" type="submit" value="Send">
            Submit
          </button>
        </form>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/dpbasu/"
            rel="noopener noreferrer"
            target="_blank"
            className="icon-link"
          >
            <SiLinkedin className="icon" />
          </a>
          <a
            href="https://medium.com/@debopriyobasu"
            rel="noopener noreferrer"
            target="_blank"
            className="icon-link"
          >
            <SiMedium className="icon" />
          </a>
          <a
            href="https://github.com/debopriyobasu"
            rel="noopener noreferrer"
            target="_blank"
            className="icon-link"
          >
            <SiGithub className="icon" />
          </a>
          <a
            href="https://leetcode.com/Debopriyo_Basu/"
            rel="noopener noreferrer"
            target="_blank"
            className="icon-link"
          >
            <SiLeetcode className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import "./Contact.css";
import { SiLinkedin, SiMedium, SiGithub, SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { content } from "../../content";
import { FormEvent } from "react";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  interface EmailJSResponse {
    text: string;
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55aw1qn",
        "template_od2bqfy",
        form.current as HTMLFormElement,
        {
          publicKey: "Vg_n_0vZfmPLxr7c2",
        }
      )
      .then(
        (result: EmailJSResponse) => {
          console.log("SUCCESS!", result.text);
          e.currentTarget.reset();
          alert("Thanks! Your email has been sent.");
        },
        (error: EmailJSResponse) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <AnimationWrapper>
        <div className="container">
          <div className="m-auto mw-70ch">
            <h2>{content.contact.title}</h2>
            <p className="mt-1">{content.contact.description}</p>
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
                rows={5}
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
                aria-label="Connect with Debopriyo on LinkedIn"
              >
                <SiLinkedin className="icon" />
              </a>
              <a
                href="https://medium.com/@debopriyobasu"
                rel="noopener noreferrer"
                target="_blank"
                className="icon-link"
                aria-label="Connect with Debopriyo on Medium"
              >
                <SiMedium className="icon" />
              </a>
              <a
                href="https://github.com/debopriyobasu"
                rel="noopener noreferrer"
                target="_blank"
                className="icon-link"
                aria-label="View Debopriyo's github profile"
              >
                <SiGithub className="icon" />
              </a>
              <a
                href="https://leetcode.com/Debopriyo_Basu/"
                rel="noopener noreferrer"
                target="_blank"
                className="icon-link"
                aria-label="View Debopriyo's Leetcode profile"
              >
                <SiLeetcode className="icon" />
              </a>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Contact;

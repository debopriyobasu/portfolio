import "./Footer.css";
import { content } from "../../content";

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        {content.footer.copyright.replace("{year}", new Date().getFullYear())}
      </p>
    </footer>
  );
};

export default Footer;

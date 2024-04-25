import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        &copy; {new Date().getFullYear()}. Developed by Debopriyo Basu
      </p>
    </footer>
  );
};

export default Footer;

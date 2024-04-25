import PropTypes from "prop-types";
import "./Certificate.css";
const Certificate = ({ certificateImg, certificateName }) => {
  return (
    <article className="certificate">
      <img src={certificateImg} alt={certificateName} />
    </article>
  );
};
Certificate.propTypes = {
  certificateImg: PropTypes.string.isRequired,
  certificateName: PropTypes.string.isRequired,
};
export default Certificate;

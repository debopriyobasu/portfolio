import PropTypes from "prop-types";
import "./Certificate.css";

interface CertificateProps {
  certificateImg: string;
  certificateName: string;
}

const Certificate: React.FC<CertificateProps> = ({
  certificateImg,
  certificateName,
}) => {
  return (
    <article className="certificate">
      <img
        src={certificateImg}
        alt={certificateName}
        loading="lazy"
        width={1762}
        height={1168}
      />
    </article>
  );
};

Certificate.propTypes = {
  certificateImg: PropTypes.string.isRequired,
  certificateName: PropTypes.string.isRequired,
};

export default Certificate;

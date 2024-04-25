import { certificateData } from "./certificateData";
import Certificate from "./Certificate";
import "./Certifications.css";
const Certifications = () => {
  const slides = Object.entries(certificateData);
  return (
    <div className="certificates">
      {slides.map(([key, value]) => {
        return (
          <Certificate key={key} certificateImg={value} certificateName={key} />
        );
      })}
    </div>
  );
};

export default Certifications;

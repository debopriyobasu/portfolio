import "./WorkExperience.css";
import { content } from "../../content";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const WorkExperience = () => {
    return (
        <section id="work-experience">
            <div className="container">
                <AnimationWrapper direction="right">
                    <div className="work-experience m-auto">
                        <h2 className="font-jakarta fw-bold">
                            {content.about.workExperience.title}
                        </h2>
                        {content.about.workExperience.experiences.map((experience, index) => (
                            <div key={index} className="experience-item mt-2">
                                <h3 className="font-jakarta fw-bold">
                                    {experience.role}, {experience.company}
                                </h3>
                                <p className="duration">{experience.duration}</p>
                                <ul className="details">
                                    {experience.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
};

export default WorkExperience;
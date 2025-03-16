export interface Content {
  heroSection: {
    greeting: string;
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string[];
    workExperience: {
      title: string;
      experiences: {
        role: string;
        company: string;
        duration: string;
        details: string[];
      }[];
    };
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
}

export const content: Content = {
  heroSection: {
    greeting: "Good Morning",
    title: "I am Debopriyo Basu",
    description:
      "A software engineer who builds beautiful and engaging web experiences",
  },
  about: {
    title: "About me",
    description: [
      "As a front-end focused software engineer with a strong background in back-end concepts, I excel in JavaScript (ES6+), TypeScript, React.js and Web Components. I also have experience with essential back-end development practices and cloud technologies. With five years of professional experience, I consistently deliver robust and innovative solutions.",
    ],
    workExperience: {
      title: "Work Experience",
      experiences: [
        {
          role: "Senior Software Engineer",
          company: "Wipro Limited",
          duration: "June 2019 – Present",
          details: [
            "Led the optimization of a key module in an internet banking application, increasing referral conversion rates from 8% to 12%. Implemented multi-brand architecture, where a single codebase serves three different bank's internet banking platform.",
            "Developed over 20 product pages for a global healthcare provider and attracted over 250k unique monthly visitors for each site."
          ],
        },
      ],
    },
  },
  contact: {
    title: "Contact Me",
    description:
      "Feel free to contact me to discuss any work opportunities, or for any suggestions",
  },
  footer: {
    copyright: "Made in India by Debopriyo Basu | {year}",
  },
};

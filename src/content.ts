export interface Content {
  heroSection: {
    greeting: string;
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string[];
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

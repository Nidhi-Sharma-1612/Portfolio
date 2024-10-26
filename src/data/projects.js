import Portfolio1 from "../assets/images/screenshots/screenshot-7.png";
import Portfolio2 from "../assets/images/screenshots/screenshot-3.png";
import Portfolio3 from "../assets/images/screenshots/screenshot-6.png";
import Portfolio4 from "../assets/images/screenshots/screenshot-4.png";
import Portfolio5 from "../assets/images/screenshots/screenshot-2.png";
import Portfolio6 from "../assets/images/screenshots/screenshot-8.png";
import Portfolio7 from "../assets/images/screenshots/screenshot-9.png";

export const projects = [
  {
    title: "LCGC-LAB-ASSISTANT",
    description: "Calibration software desktop app.",
    img: Portfolio1,
    year: "2024",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Electron Forge",
      "Tabulator",
      "JsPdf",
    ],
    details: [
      "Developed the Dashboard, Sidebar, User Profile, Company Profile, and Client Profile.",
      "Created multiple forms and implemented tables using Tabulator.js, customized with CSS and Tailwind CSS.",
      "Implemented export functionality to export tables and forms as a PDF.",
    ],
  },
  {
    title: "Docuswift Web App",
    description:
      "AI for legal documents with features like case chat, search, and insights.",
    img: Portfolio2,
    year: "2024",
    technologies: ["HTML", "Tailwind CSS", "Next.js"],
    details: [
      "Worked on regenerate, dislike, and chat history functionalities for case chat and insights.",
      "Integrated multiple APIs to fetch and send data.",
    ],
  },
  {
    title: "Docuswift Website",
    description: "Official website of Docuswift.",
    img: Portfolio3,
    year: "2024",
    technologies: ["HTML", "Tailwind CSS", "Next.js", "Figma"],
    details: [
      "Designed the website and created an interactive prototype using Figma.",
      "Developed the website using HTML, Tailwind CSS, and Next.js.",
      "Website includes: Navbar, Hero Section, Sponsorship Banner, Features section with GIFs, Case Studies, Pricing, FAQs, CTA, and Footer.",
    ],
  },
  {
    title: "Sites60",
    description:
      "AI-generated custom website in 60 seconds, highly customizable.",
    img: Portfolio4,
    year: "2024",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "REST API"],
    details: [
      "Designed and developed responsive website templates.",
      "Added functionalities for image upload, add section, edit section, regenerate content, and delete section.",
      "Integrated REST APIs to fetch and send data.",
    ],
  },
  {
    title: "Flowlaunch",
    description: "Official website for a startup.",
    img: Portfolio5,
    year: "2024",
    technologies: ["HTML", "Tailwind CSS", "Next.js"],
    details: [
      "Developed the About Us and Portfolio pages.",
      "Added the navbar, footer, contact, and logo sections.",
      "Styled and ensured responsiveness using Tailwind CSS.",
    ],
  },

  {
    title: "Exo",
    description: "Blockchain-based decentralized finance (DeFi) marketplace.",
    img: Portfolio6,
    year: "2022",
    technologies: [
      "HTML",
      "CSS",
      "Styled Components",
      "NextJS",
      "TypeScript",
      "GraphQL",
      "Web3JS",
    ],
    details: [
      "Developed UI based on Figma designs.",
      "Created reusable and dynamic UI components using styled-components.",
      "Integrated ApexCharts for various chart types.",
      "Integrated blockchain APIs using Web3JS.",
      "Implemented GraphQL APIs with data handling and transformation.",
    ],
  },
  {
    title: "Pulse Crash",
    description:
      "Blockchain-based online betting game as part of an online casino.",
    img: Portfolio7,
    year: "2021",
    technologies: [
      "HTML",
      "CSS",
      "Styled Components",
      "ReactJS",
      "JavaScript",
      "GraphQL",
      "Web3JS",
    ],
    details: [
      "Developed UI based on Figma designs.",
      "Created reusable and dynamic UI components using styled-components.",
      "Used Canvas library to display rocket animation based on backend data points.",
      "Integrated GraphQL subscriptions for real-time updates of crash points.",
      "Integrated blockchain APIs using Web3JS.",
    ],
  },
];

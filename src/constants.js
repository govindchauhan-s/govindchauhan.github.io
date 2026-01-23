/* ===================== SKILLS LOGOS ===================== */
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import pythonLogo from "./assets/tech_logo/python.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import figmaLogo from "./assets/tech_logo/figma.png";

/* ===================== EXPERIENCE LOGOS ===================== */
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

/* ===================== EDUCATION LOGOS ===================== */
import glaLogo from "./assets/education_logo/logo.jpg";
import bsaLogo from "./assets/education_logo/kingston.png";
import vpsLogo from "./assets/education_logo/newkingston.png";

/* ===================== PROJECT LOGOS (FIXED) ===================== */
import cProjectLogo from "./assets/work_logo/c.png";
import pythonProjectLogo from "./assets/work_logo/python.png";
import portfolioLogo from "./assets/work_logo/portfolio.png";
import caffeLogo from "./assets/work_logo/caffe.png";
import fakeNewsLogo from "./assets/work_logo/fake.jpeg";

/* ===================== SKILLS ===================== */
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

/* ===================== EXPERIENCE ===================== */
export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Frontend / Full Stack Projects",
    company: "Personal & Academic Projects.",
    date: "2025 - Present",
    desc: "Built responsive and scalable web applications using React, Tailwind CSS, and Node.js. Focused on clean UI design, reusable components, and API integration.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Node JS"],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Self-Taught Full Stack Developer",
    company: "Continuous Learning",
    date: "2025 - Present",
    desc: "Learning full stack development through hands-on projects and real-world practice. Worked on REST APIs, state management, and backend logic.",
    skills: ["JavaScript", "React JS", "Node JS", "MongoDB", "Express JS"],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Data Science Projects",
    company: "Self Learning",
    date: "2025 - Present",
    desc: "Worked on data analysis and machine learning projects including Fake News Detection, focusing on data preprocessing and model building.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
  },
];

/* ===================== EDUCATION (CORRECT & SAFE) ===================== */
export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "AllenHouse Institute Of Technology, Kanpur",
    date: "2025 - Present",
    grade: "Pursuing",
    degree: "Bachelor of Technology (B.Tech)",
    desc: "Currently pursuing B.Tech with a focus on core computer science subjects, programming, and practical problem-solving. Actively working on projects to strengthen technical and analytical skills.",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "New Kingston Senior Secondary School",
    date: "2022 - 2024",
    grade: "84%",
    degree: "CBSE Class XII (PCM + Computer Science)",
    desc: "Completed higher secondary education with Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation in analytical and logical thinking.",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "New Kingston Senior Secondary School",
    date: "2020 - 2022",
    grade: "82%",
    degree: "CBSE Class X",
    desc: "Completed secondary education with Science and Mathematics, developing interest in programming and problem-solving.",
  },
];

/* ===================== PROJECTS ===================== */
export const projects = [
  {
    id: 0,
    title: "C Programming Projects",
    description:
      "A collection of C programming projects focused on logic building and problem solving.",
    image: cProjectLogo,
    tags: ["C", "Logic Building", "Problem Solving"],
    github: "https://github.com/govindchauhan-s/C-Programing-Project",
    webapp: "",
  },
  {
    id: 1,
    title: "Python Projects",
    description:
      "Python projects based on OOP concepts, automation, and real-world problem solving.",
    image: pythonProjectLogo,
    tags: ["Python", "OOP", "Automation"],
    github: "https://github.com/govindchauhan-s/Python-Project",
    webapp: "",
  },
  {
    id: 2,
    title: "Cafe Management System",
    description:
      "A console-based Python application to manage cafe orders, menu items, and billing.",
    image: caffeLogo,
    tags: ["Python", "File Handling"],
    github: "https://github.com/govindchauhan-s/Caffe-Management-System",
    webapp: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built using React and Tailwind CSS to showcase skills and projects.",
    image: portfolioLogo,
    tags: ["React JS", "Tailwind CSS"],
    github: "https://github.com/govindchauhan-s/govindchauhan.github.io",
    webapp: "https://govindchauhan-s.github.io/govindchauhans.github.io/",
  },
  {
    id: 4,
    title: "Fake News Detection System",
    description:
      "A machine learning based project that classifies news as real or fake using NLP techniques.",
    image: fakeNewsLogo,
    tags: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/govindchauhan-s/fake-news-detection",
    webapp: "",
  },
];

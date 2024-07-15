import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  tripguide,
  threejs,
  ui,
  ps,
  three,
  laravel,
  typescript2,
  blnder,
  lymo,
  zumra,
  proto,
  air,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "three",
    icon: three,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend laravel",
    icon: laravel,
  },
  {
    title: "Content react",
    icon: react,
  },

  {
    title: "Content ps",
    icon: ps,
  },

  {
    title: "Content ui",
    icon: ui,
  },

  {
    title: "Content typescript2",
    icon: typescript2,
  },
  {
    title: "Content blnder",
    icon: blnder,
  },
  
 

];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "RBK bootcamp",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January to April 2020",
    points: [
      "I pursued web development courses at RBK Tunisia, where I honed my skills in HTML, JavaScript, CSS, JQuery, and Bootstrap.",
    ],
  },
  {
    title: "Entrepreneurship",
    companyName: "6*6 project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2020",
    points: [
      "I participated in the Entrepreneurship Strategic Planning Leadership Skills program by Riyadah 6*6 project, focusing on strategic planning and leadership in entrepreneurship",
    ],
  },
  {
    title: "Google Developer Club ",
    companyName: "Hakathon",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - january",
    points: [
      " I participated in and won a Hackathon organized by the Google Developer Club. I contributed as a UI/UX developer for the Peak2Peak educational solution application",
    ],
  },
  {
    title: "Yasmeals",
    companyName: "food App",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2021 - jun",
    points: [
      "  I founded Yes Meals, a food delivery application, and led its management until October of the same year. This experience sharpened my skills in leadership, management, entrepreneurship, strategic thinking, and innovative problem-solving.",
    ],
  },


  {
    title: "Yasgames",
    companyName: "E-commerce",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2021 - Desmber",
    points: [
      "   I launched a new e-commerce venture focused on selling board games and products, expanding my entrepreneurial endeavors.",
    ],
  },
  {
    title: "e-bina",
    companyName: "Entepunership program",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2022 march - 2023 Feb",
    points: [
      " I participated in the E-bina program, a selective year-long course in management, entrepreneurship, and startup fundamentals. Out of 300 participants, I successfully completed the program alongside 20 others, gaining expertise in business canvas development, startup strategies, and operational management, which I applied to enhance Yes Meals Start-up.",
    ],
  },


  {
    title: "ALX program",
    companyName: "software engineering",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 jun - 2024 jouly",
    points: [
      "I have been enrolled in the ALX Program in Software Engineering, a comprehensive 12-month course focusing on software development. This program has provided me with extensive experience and skills in both backend and frontend development, shaping me into a proficient full-stack developer.",
    ],
  },

  {
    title: "Dorcas Agency",
    companyName: "Tech company",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 April - present",
    points: [
      "working at Dorcas Agency tech company as a UI/UX designer, Using Figma to design websites and applications",
    ],
  },


];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      " success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



const projects: TProject[] = [
  {
    name: "Yasgames",
    description: " E-commerce platform",
    tags: [],
    image: {
      src: carrent, 
      alt: "Car Rental Platform",
    },
    sourceCodeLink: "https://github.com/",
    liveSiteLink: "#",
  },


  {
    name: "Zumra",
    description: " E-commerce platform",
    tags: [],
    image: {
      src: zumra, 
      alt: "Car Rental Platform",
    },
    sourceCodeLink: "https://github.com/",
    liveSiteLink: "#",
  },


  {
    name: "LYMonada",
    description: " 3d showcase platform",
    tags: [],
    image: {
      src: lymo, 
      alt: "Car Rental Platform",
    },
    sourceCodeLink: "https://github.com/yasmen-khaled/landing-page",
    liveSiteLink: "#",
  },




  {
    name: "protobyte",
    description: " C# system management ",
    tags: [],
    image: {
      src: proto, 
      alt: "Car Rental Platform",
    },
    sourceCodeLink: "https://github.com/Hiba-bakka/hibabk/tree/main/Protobyte2",
    liveSiteLink: "#",
  },





  {
    name: "Simple Shell",
    description: " Terminal emulator using C ",
    tags: [],
    image: {
      src: tripguide, 
      alt: "Car Rental Platform",
    },
    sourceCodeLink: "https://github.com/HoodaHashem/simple_shell",
    liveSiteLink: "#",
  },


  {
    name: "Airbnb",
    description: " Rental platform",
    tags: [],
    image: {
      src: air, 
      alt: "Car Rental Platform",
    },
    sourceCodeLink: "https://github.com/yasmen-khaled/AirBnB_clone_v4",
    liveSiteLink: "#",
  },



];

export { services, technologies, experiences, testimonials, projects };

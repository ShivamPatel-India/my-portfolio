import {
  car,
  contact,
  estate,
  express,
  github,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  AWS,
  talkwave,
  git,
} from "../assets/icons";
import { abjayon, cpp, ddu } from "../assets/images";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Verision Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: AWS,
    name: "AWS",
    type: "Amazone Web Service",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Bachelor's in Information Technology",
    company_name: "Dharmsinh Desai University, India",
    icon: ddu,
    iconBg: "#000000",
    date: "July 2018 - March 2022",
    points: [
      "GPA: 8.5/10",
      "Subjects: Software Engineering, Data Structure and Algorithm, Computer Networks, Computer Architecture, Web Technology, Operating System, Database Management System, Distributed Computing",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Abjayon Inc., CA",
    icon: abjayon,
    iconBg: "#e6e6ff",
    date: "Jan 2022 - May 2022",
    points: [
      "Developed a React-based healthcare survey app with an interactive 3D UI, capturing user data on surgeries and medications.",
      "Integrated the application seamlessly with Salesforce APIs, ensuring secure and accurate retrieval of medical information.",
      "Implemented rigorous Jest.JS unit tests, contributing to the application's robustness, and proactively resolved CORS-related issues.",
      "Configured the app to store survey responses in AWS S3 objects, streamlining data management and ensuring secure submissions.",
      "Deployed and optimized the application on AWS Amplify."
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Abjayon Inc., Fremont, CA",
    icon: abjayon,
    iconBg: "#ffe6e6",
    date: "June 2022 - July 2023",
    points: [
      "Played a key role in the development of Matchgrid MedSleuth, a critical healthcare application, built using Java Spring MVC, facilitating rapid matching of live organ donors and recipients.",
      "Implemented a sophisticated algorithm for matching live organ donors and recipients based on a range of medical factors.",
      "Developed a robust functionality enabling the sharing of patient data among different hospitals, fostering a collaborative approach to finding optimal organ matches across associated medical organizations.",
      "Engineered a comprehensive file storage system within the application, facilitating the secure storage and retrieval of various medical files of both recipients and donors.",
       "Additionally, contributed to Google Drive integration and UI enhancements using Thymeleaf and CSS for an improved user experience.",
    ],
  },
  {
    title: "Graduate Student in Computer Science",
    company_name: "California State Polytechnic University, USA",
    icon: cpp,
    iconBg: "#d9f2d9",
    date: "Aug 2023 - Present",
    points: [
      "GPA: To be declared",
      "Subjects: Advanced Algorithms Design and Analysis, Connected adn Autonomous Vehicles",
      "Project: Lane Detection in Severe Weather Condition",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ShivamPatel-India",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shivam-patel-b7420416b",
  },
];

export const projects = [
  {
    iconUrl: talkwave,
    theme: "btn-back-pink",
    name: "TalkWave",
    description:
      "TalkWave is a dynamic communication platform, akin to Discord, designed to enhance real-time collaboration and interaction. Built using NextJS, this project seamlessly integrates various features to provide users with a versatile communication experience.",
    link: "https://github.com/ShivamPatel-India/TalkWave1.0",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "Konnect",
    description:
      "Konnect is a user-centric social platform offering secure authentication, content creation with reactions, follower dynamics, and automated content moderation. With tiered accounts and an admin portal, it ensures a safe, engaging space for users to connect and share meaningful content.",
    link: "https://github.com/ShivamPatel-India/Konnect",
  },
  {
    iconUrl: threads,
    theme: "btn-back-red",
    name: "Medicare",
    description:
      'A Django-powered e-commerce platform, provides a seamless online experience for purchasing medicines and healthcare products. Offering features like real-time order tracking, an efficient admin panel, and doctor information by city, Medicare ensures a user-friendly and comprehensive healthcare shopping experience',
    link: "https://github.com/ShivamPatel-India/Medicare",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "My Portfolio",
    description:
      "Welcome to My Portfolio! Explore my world through this personalized website made using React and ThreeJS, offering a unique experience. Engage with me through the Contact feature powered by EmailJS, and enjoy the added dimension of audio on the home page",
    link: "https://github.com/ShivamPatel-India/my-portfolio",
  },
  {
    iconUrl: car,
    theme: "btn-back-yellow",
    name: "Lane Detection in Severe Weather",
    description:
      "Lane Detection in Adverse Weather Conditions is a Python-based project focused on enhancing lane detection accuracy in challenging weather conditions like rain and clouds. Leveraging the CARLA Simulator and various sensors, including LiDAR, RGB, and depth cameras, the project utilizes the Hough Transform algorithm for robust lane detection.",
    link: "https://github.com/ShivamPatel-India/CS5990",
  },
];
